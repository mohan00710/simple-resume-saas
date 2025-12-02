import React from 'react';
import type { ResumeData } from '../../types';

interface MinimalTemplateProps {
  data: ResumeData;
}

export const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ data }) => {
  const formatDate = (date: string) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    return `${year}.${month}`;
  };

  return (
    <div className="bg-white p-8 shadow-lg" id="resume-content">
      <div className="mb-8">
        <h1 className="text-5xl font-light text-gray-900 mb-3">{data.personalInfo.fullName}</h1>
        <div className="text-sm text-gray-600 space-x-3">
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
          {data.personalInfo.linkedin && <span>{data.personalInfo.linkedin}</span>}
          {data.personalInfo.portfolio && <span>{data.personalInfo.portfolio}</span>}
        </div>
      </div>

      {data.summary && (
        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">{data.summary}</p>
        </section>
      )}

      {data.experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Experience
          </h2>
          {data.experience.map((exp) => (
            <div key={exp.id} className="mb-6">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-medium text-gray-900">{exp.position}</h3>
                <span className="text-xs text-gray-500">
                  {formatDate(exp.startDate)} — {exp.current ? 'Now' : formatDate(exp.endDate)}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                {exp.company} / {exp.location}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Education
          </h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {edu.degree}, {edu.field}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {edu.institution}
                    {edu.gpa && ` / GPA: ${edu.gpa}`}
                  </p>
                </div>
                <span className="text-xs text-gray-500">
                  {formatDate(edu.startDate)} — {formatDate(edu.endDate)}
                </span>
              </div>
            </div>
          ))}
        </section>
      )}

      {data.skills.length > 0 && (
        <section>
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Skills
          </h2>
          <div className="text-sm text-gray-700">
            {data.skills.map((skill, index) => (
              <span key={skill.id}>
                {skill.name}
                {index < data.skills.length - 1 && ', '}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
