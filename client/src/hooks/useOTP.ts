import { useState, useCallback } from "react";
import { OTPService, OTPResponse } from "@/services/OTPService";

interface UseOTPReturn {
  otp: string;
  setOtp: (otp: string) => void;
  isOtpSent: boolean;
  isVerified: boolean;
  isLoading: boolean;
  sessionId: string | null;
  remainingAttempts: number;
  sendOTP: (phone: string, countryCode: string) => Promise<OTPResponse>;
  verifyOTP: (inputOtp: string) => Promise<OTPResponse>;
  resendOTP: (phone: string, countryCode: string) => Promise<OTPResponse>;
  resetOTP: () => void;
}

export const useOTP = (): UseOTPReturn => {
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [remainingAttempts, setRemainingAttempts] = useState(3);

  const sendOTP = useCallback(
    async (phone: string, countryCode: string): Promise<OTPResponse> => {
      setIsLoading(true);

      try {
        const response = await OTPService.sendOTP(phone, countryCode);

        if (response.success) {
          setIsOtpSent(true);
          setSessionId(response.sessionId || null);
          setRemainingAttempts(3);
        }

        return response;
      } catch (error) {
        console.error("Error in sendOTP:", error);
        return {
          success: false,
          message: "Failed to send OTP. Please try again.",
        };
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const verifyOTP = useCallback(
    async (inputOtp: string): Promise<OTPResponse> => {
      if (!sessionId) {
        return {
          success: false,
          message: "No active OTP session found",
        };
      }

      setIsLoading(true);

      try {
        const response = await OTPService.verifyOTP(sessionId, inputOtp);

        if (response.success) {
          setIsVerified(true);
          setSessionId(null);
        } else {
          // Update remaining attempts
          const attempts = OTPService.getRemainingAttempts(sessionId);
          setRemainingAttempts(attempts);

          // If no attempts left, reset the session
          if (attempts === 0) {
            setIsOtpSent(false);
            setSessionId(null);
            setOtp("");
          }
        }

        return response;
      } catch (error) {
        console.error("Error in verifyOTP:", error);
        return {
          success: false,
          message: "Failed to verify OTP. Please try again.",
        };
      } finally {
        setIsLoading(false);
      }
    },
    [sessionId]
  );

  const resendOTP = useCallback(
    async (phone: string, countryCode: string): Promise<OTPResponse> => {
      setIsLoading(true);

      try {
        const response = await OTPService.resendOTP(phone, countryCode);

        if (response.success) {
          setOtp("");
          setSessionId(response.sessionId || null);
          setRemainingAttempts(3);
        }

        return response;
      } catch (error) {
        console.error("Error in resendOTP:", error);
        return {
          success: false,
          message: "Failed to resend OTP. Please try again.",
        };
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const resetOTP = useCallback(() => {
    setOtp("");
    setIsOtpSent(false);
    setIsVerified(false);
    setIsLoading(false);
    setSessionId(null);
    setRemainingAttempts(3);
  }, []);

  return {
    otp,
    setOtp,
    isOtpSent,
    isVerified,
    isLoading,
    sessionId,
    remainingAttempts,
    sendOTP,
    verifyOTP,
    resendOTP,
    resetOTP,
  };
};
