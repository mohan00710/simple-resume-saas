import React from 'react';
import type { TemplateType } from '../types';

interface TemplateSelectorProps {
  onSelectTemplate: (template: TemplateType) => void;
  onBack: () => void;
}

const templates: { type: TemplateType; name: string; description: string; preview: string }[] = [
  {
    type: 'modern',
    name: 'Modern',
    description: 'A sleek, contemporary design with bold headings and clean lines',
    preview: '🎨',
  },
  {
    type: 'classic',
    name: 'Classic',
    description: 'Traditional format with elegant typography and professional layout',
    preview: '📄',
  },
  {
    type: 'minimal',
    name: 'Minimal',
    description: 'Simple and clean design focusing on content with minimal decoration',
    preview: '✨',
  },
  {
    type: 'professional',
    name: 'Professional',
    description: 'Corporate-friendly design with structured sections and formal styling',
    preview: '💼',
  },
];

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onSelectTemplate, onBack }) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="text-blue-500 hover:text-blue-700 mb-4 flex items-center gap-2"
        >
          ← Back to Form
        </button>
        <h2 className="text-3xl font-bold text-gray-800">Choose Your Template</h2>
        <p className="text-gray-600 mt-2">Select a template that best represents your style</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map((template) => (
          <div
            key={template.type}
            onClick={() => onSelectTemplate(template.type)}
            className="bg-white border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-500 hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            <div className="text-6xl mb-4 text-center">{template.preview}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{template.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{template.description}</p>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
