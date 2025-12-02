import React from 'react';
import type { ResumeData } from '../../types';

interface ClassicTemplateProps {
  data: ResumeData;
}

export const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ data }) => {
  const formatDate = (date: string) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="bg-white p-8 shadow-lg" id="resume-content">
      <div className="text-center mb-6 pb-4 border-b-2 border-gray-800">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
          {data.personalInfo.fullName}
        </h1>
        <div className="text-sm text-gray-700">
          {data.personalInfo.email} • {data.personalInfo.phone} • {data.personalInfo.location}
        </div>
        <div className="text-sm text-gray-700 mt-1">
          {data.personalInfo.linkedin && <span>{data.personalInfo.linkedin} </span>}
          {data.personalInfo.portfolio && <span>• {data.personalInfo.portfolio}</span>}
        </div>
      </div>

      {data.summary && (
        <section className="mb-6">
          <h2 className="text-xl font-serif font-bold text-gray-900 mb-2 uppercase tracking-wide">
            Professional Summary
          </h2>
          <p className="text-gray-700 text-justify leading-relaxed">{data.summary}</p>
        </section>
      )}

      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-serif font-bold text-gray-900 mb-3 uppercase tracking-wide">
            Professional Experience
          </h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-serif font-semibold text-gray-900">{exp.position}</h3>
                <span className="text-sm italic text-gray-600">
                  {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                </span>
              </div>
              <p className="italic text-gray-700 mb-2">
                {exp.company}, {exp.location}
              </p>
              <p className="text-gray-700 text-justify">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-serif font-bold text-gray-900 mb-3 uppercase tracking-wide">
            Education
          </h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-gray-900">
                    {edu.degree}, {edu.field}
                  </h3>
                  <p className="italic text-gray-700">{edu.institution}</p>
                  {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                </div>
                <span className="text-sm italic text-gray-600">
                  {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                </span>
              </div>
            </div>
          ))}
        </section>
      )}

      {data.skills.length > 0 && (
        <section>
          <h2 className="text-xl font-serif font-bold text-gray-900 mb-3 uppercase tracking-wide">
            Skills & Competencies
          </h2>
          <div className="text-gray-700">
            {data.skills.map((skill, index) => (
              <span key={skill.id}>
                {skill.name}
                {index < data.skills.length - 1 ? ' • ' : ''}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
