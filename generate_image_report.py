from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font('Arial', 'B', 16)
pdf.cell(0, 10, 'Website Image Usage Report', ln=True, align='C')
pdf.set_font('Arial', '', 12)
pdf.ln(10)

sections = [ 
    ('Hero Section', 'client/src/components/hero-section.tsx', ['/hero-light.png', 'https://i.postimg.cc/28z0TGsG/Chat-GPT-Image-Jun-26-2025-07-35-01-PM.png'], 'w-full h-full (responsive)'),
    ('Alumni (Marquee)', 'client/src/components/company-logos.tsx', ['postimg.cc (12 logos)'], 'h-32 w-auto (128px tall)'),
    ('Our Programs', 'client/src/components/programs-section.tsx', ['postimg.cc (per program)'], 'h-24 (96px tall)'),
    ('Leadership Team', 'client/src/components/leadership-team.tsx', ['DB/Unsplash'], 'w-32 h-32 rounded-full (128px)'),
    ('Testimonials', 'client/src/components/testimonials.tsx', ['DB/Unsplash'], 'w-12 h-12 rounded-full (48px)'),
    ('Success Stories', 'client/src/components/success-stories.tsx', ['DB/Unsplash'], 'w-16 h-16 rounded-full (64px)'),
    ('Industries Pie Section', 'client/src/components/industries-pie-section.tsx', ['Unsplash'], 'w-full h-full (responsive)'),
    ('Navigation (Logo)', 'client/src/components/navigation.tsx', ['postimg.cc'], 'h-16 w-auto (64px tall)')
]

for section, file, images, dims in sections:
    pdf.set_font('Arial', 'B', 12)
    pdf.cell(0, 10, section, ln=True)
    pdf.set_font('Arial', '', 11)
    pdf.cell(0, 8, f'File: {file}', ln=True)
    pdf.cell(0, 8, f'Image Source(s): {", ".join(images)}', ln=True)
    pdf.cell(0, 8, f'Dimensions: {dims}', ln=True)
    pdf.ln(2)

pdf.output('image-usage-report.pdf') 