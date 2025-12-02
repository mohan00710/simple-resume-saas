import { useState } from 'react';
import { ResumeForm } from './components/ResumeForm';
import { TemplateSelector } from './components/TemplateSelector';
import { ResumePreview } from './components/ResumePreview';
import type { ResumeData, TemplateType } from './types';

type Step = 'form' | 'template' | 'preview';

function App() {
  const [currentStep, setCurrentStep] = useState<Step>('form');
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('modern');

  const handleFormSubmit = (data: ResumeData) => {
    setResumeData(data);
    setCurrentStep('template');
  };

  const handleTemplateSelect = (template: TemplateType) => {
    setSelectedTemplate(template);
    setCurrentStep('preview');
  };

  const handleBackToForm = () => {
    setCurrentStep('form');
  };

  const handleBackToTemplate = () => {
    setCurrentStep('template');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      {currentStep === 'form' && <ResumeForm onSubmit={handleFormSubmit} />}

      {currentStep === 'template' && (
        <TemplateSelector
          onSelectTemplate={handleTemplateSelect}
          onBack={handleBackToForm}
        />
      )}

      {currentStep === 'preview' && resumeData && (
        <ResumePreview
          data={resumeData}
          template={selectedTemplate}
          onBack={handleBackToForm}
          onChangeTemplate={handleBackToTemplate}
        />
      )}
    </div>
  );
}

export default App;
