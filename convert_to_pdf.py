#!/usr/bin/env python3
"""
Convert Markdown resume to a professionally styled PDF
"""

from weasyprint import HTML, CSS
from markdown_it import MarkdownIt
import os

def convert_markdown_to_html(markdown_file):
    """Convert markdown to HTML with proper styling"""
    
    # Read markdown content
    with open(markdown_file, 'r', encoding='utf-8') as f:
        md_content = f.read()
    
    # Initialize markdown parser
    md = MarkdownIt()
    html_content = md.render(md_content)
    
    # Add professional styling
    styled_html = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jordan Setbon - Android Developer Resume</title>
        <style>
            @page {{
                size: A4;
                margin: 1.5cm 2cm;
            }}
            
            body {{
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 800px;
                margin: 0 auto;
                font-size: 11pt;
            }}
            
            h1 {{
                color: #1a73e8;
                font-size: 28pt;
                margin-bottom: 0.3em;
                border-bottom: 3px solid #1a73e8;
                padding-bottom: 0.3em;
            }}
            
            h2 {{
                color: #1a73e8;
                font-size: 18pt;
                margin-top: 1.5em;
                margin-bottom: 0.5em;
                border-bottom: 2px solid #e8e8e8;
                padding-bottom: 0.2em;
            }}
            
            h3 {{
                color: #333;
                font-size: 14pt;
                margin-top: 1em;
                margin-bottom: 0.3em;
            }}
            
            p {{
                margin: 0.5em 0;
            }}
            
            strong {{
                color: #1a73e8;
                font-weight: 600;
            }}
            
            ul {{
                margin: 0.5em 0;
                padding-left: 1.5em;
            }}
            
            li {{
                margin: 0.3em 0;
            }}
            
            hr {{
                border: none;
                border-top: 2px solid #e8e8e8;
                margin: 1.5em 0;
            }}
            
            a {{
                color: #1a73e8;
                text-decoration: none;
            }}
            
            a:hover {{
                text-decoration: underline;
            }}
            
            /* Header styling */
            h1 + p {{
                font-size: 11pt;
                color: #666;
                margin-bottom: 1em;
            }}
            
            /* Section headers with emojis */
            h2:before {{
                margin-right: 0.3em;
            }}
            
            /* Improve spacing for lists */
            ul ul {{
                margin-top: 0.2em;
            }}
            
            /* Style for key sections */
            blockquote {{
                border-left: 4px solid #1a73e8;
                padding-left: 1em;
                margin-left: 0;
                color: #555;
                font-style: italic;
            }}
            
            /* Print optimization */
            @media print {{
                body {{
                    font-size: 10pt;
                }}
                
                h1 {{
                    font-size: 24pt;
                }}
                
                h2 {{
                    font-size: 16pt;
                    page-break-after: avoid;
                }}
                
                h3 {{
                    font-size: 12pt;
                    page-break-after: avoid;
                }}
                
                ul, ol {{
                    page-break-inside: avoid;
                }}
            }}
        </style>
    </head>
    <body>
        {html_content}
    </body>
    </html>
    """
    
    return styled_html

def main():
    markdown_file = '/workspace/Jordan_Setbon_Resume_Enhanced.md'
    output_file = '/workspace/Jordan_Setbon_Resume_Enhanced.pdf'
    
    print(f"Converting {markdown_file} to PDF...")
    
    # Convert markdown to styled HTML
    html_content = convert_markdown_to_html(markdown_file)
    
    # Generate PDF
    HTML(string=html_content).write_pdf(output_file)
    
    print(f"✅ PDF created successfully: {output_file}")
    print(f"📄 File size: {os.path.getsize(output_file) / 1024:.1f} KB")

if __name__ == '__main__':
    main()
