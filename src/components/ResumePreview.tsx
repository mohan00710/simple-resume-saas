import React, { useRef } from 'react';
import type { ResumeData, TemplateType } from '../types';
import { ModernTemplate } from './templates/ModernTemplate';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { MinimalTemplate } from './templates/MinimalTemplate';
import { ProfessionalTemplate } from './templates/ProfessionalTemplate';

interface ResumePreviewProps {
  data: ResumeData;
  template: TemplateType;
  onBack: () => void;
  onChangeTemplate: () => void;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({
  data,
  template,
  onBack,
  onChangeTemplate,
}) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const renderTemplate = () => {
    switch (template) {
      case 'modern':
        return <ModernTemplate data={data} />;
      case 'classic':
        return <ClassicTemplate data={data} />;
      case 'minimal':
        return <MinimalTemplate data={data} />;
      case 'professional':
        return <ProfessionalTemplate data={data} />;
      default:
        return <ModernTemplate data={data} />;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    handlePrint();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md p-4 mb-6 print:hidden">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <button
              onClick={onBack}
              className="text-blue-500 hover:text-blue-700 flex items-center gap-2"
            >
              ← Edit Information
            </button>
            <button
              onClick={onChangeTemplate}
              className="text-blue-500 hover:text-blue-700 flex items-center gap-2"
            >
              Change Template
            </button>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleDownloadPDF}
              className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
            >
              Download PDF
            </button>
            <button
              onClick={handlePrint}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
            >
              Print
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div ref={resumeRef} className="bg-white">
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};
