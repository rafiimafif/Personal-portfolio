import sys
try:
    from pypdf import PdfReader
except ImportError:
    print("pypdf not installed", file=sys.stderr)
    sys.exit(1)

cv_path = "C:\\Users\\rafii\\Documents\\Doc\\Rafii Muhammad Afif - DevOps Engineer - CV.pdf"
try:
    reader = PdfReader(cv_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    with open("cv_text.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("Successfully wrote to cv_text.txt")
except Exception as e:
    print(f"Error reading PDF: {e}", file=sys.stderr)
    sys.exit(1)
