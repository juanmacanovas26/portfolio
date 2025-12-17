import pdfplumber

with pdfplumber.open(r'c:\Users\juanm\Downloads\CV English 2025.pdf') as pdf:
    text = ''
    for page in pdf.pages:
        text += page.extract_text() + '\n'

print(text)