# Resume Builder App

A modern, responsive resume builder application built with React, TypeScript, and Tailwind CSS.

## Features

- **Interactive Form**: Comprehensive form to collect all resume data including:
  - Personal Information (name, email, phone, location, links)
  - Professional Summary
  - Work Experience (with ability to add multiple positions)
  - Education (with ability to add multiple degrees)
  - Skills (categorized)

- **Multiple Templates**: Choose from 4 professionally designed templates:
  - **Modern**: Sleek design with bold headings and blue accents
  - **Classic**: Traditional format with elegant serif typography
  - **Minimal**: Clean and simple design focusing on content
  - **Professional**: Corporate-friendly with structured sections

- **Resume Preview**: Real-time preview of your resume with the selected template

- **Export Options**:
  - Print resume directly
  - Download as PDF (via browser print)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## How to Use

1. **Fill in the Form**:
   - Enter your personal information
   - Add your professional summary
   - Add education entries
   - Add work experience entries
   - Add your skills
   - Click "Continue to Template Selection"

2. **Choose a Template**:
   - Browse through 4 different templates
   - Click on your preferred template to select it

3. **Preview and Export**:
   - Review your resume in the selected template
   - Use "Edit Information" to go back and modify data
   - Use "Change Template" to select a different template
   - Click "Print" or "Download PDF" to export your resume

## Technology Stack

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Styling framework

## Project Structure

```
src/
├── components/
│   ├── ResumeForm.tsx          # Form for data collection
│   ├── TemplateSelector.tsx    # Template selection interface
│   ├── ResumePreview.tsx       # Preview and export component
│   └── templates/
│       ├── ModernTemplate.tsx
│       ├── ClassicTemplate.tsx
│       ├── MinimalTemplate.tsx
│       └── ProfessionalTemplate.tsx
├── types.ts                     # TypeScript type definitions
├── App.tsx                      # Main app component
└── index.css                    # Global styles

```

## License

MIT
