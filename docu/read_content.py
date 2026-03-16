# -*- coding: utf-8 -*-
import os
import sys
from docx import Document
import zipfile

# UTF-8 output
sys.stdout = open(sys.stdout.fileno(), mode='w', encoding='utf-8', buffering=1)

base = r'C:\.temp_private\oy\Website içerikleri'

def read_docx(path):
    try:
        doc = Document(path)
        content = []
        for para in doc.paragraphs:
            if para.text.strip():
                content.append(para.text)
        return '\n'.join(content) if content else '[Boş dosya]'
    except Exception as e:
        return f'Hata: {e}'

# Tüm dosyaları listele ve docx olanları bul
docx_files = []
for root, dirs, files in os.walk(base):
    for f in files:
        if f.endswith('.docx'):
            docx_files.append(os.path.join(root, f))

print("BULUNAN DOCX DOSYALARI:")
print("=" * 50)
for f in docx_files:
    print(f)
print()

# Her birini oku
for path in docx_files:
    folder = os.path.basename(os.path.dirname(path))
    filename = os.path.basename(path)
    print(f'=== {folder} / {filename} ===')
    print(read_docx(path))
    print()

# Görsel ve video dosyalarını listele
print("\nMEDYA DOSYALARI:")
print("=" * 50)
media_exts = ['.jpg', '.jpeg', '.png', '.mp4', '.mov', '.avi']
for root, dirs, files in os.walk(base):
    for f in files:
        ext = os.path.splitext(f)[1].lower()
        if ext in media_exts:
            full = os.path.join(root, f)
            rel = os.path.relpath(full, base)
            size = os.path.getsize(full)
            print(f'{rel} ({size/1024/1024:.2f} MB)')
