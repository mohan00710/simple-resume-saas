import React from 'react';
import type { ResumeData } from '../../types';

interface ProfessionalTemplateProps {
  data: ResumeData;
}

export const ProfessionalTemplate: React.FC<ProfessionalTemplateProps> = ({ data }) => {
  const formatDate = (date: string) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  const skillsByCategory = data.skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <div className="bg-white shadow-lg" id="resume-content">
      <div className="bg-gray-800 text-white p-8">
        <h1 className="text-4xl font-bold mb-3">{data.personalInfo.fullName}</h1>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>Email: {data.personalInfo.email}</div>
          <div>Phone: {data.personalInfo.phone}</div>
          <div>Location: {data.personalInfo.location}</div>
          {data.personalInfo.linkedin && <div>LinkedIn: {data.personalInfo.linkedin}</div>}
          {data.personalInfo.portfolio && <div>Portfolio: {data.personalInfo.portfolio}</div>}
        </div>
      </div>

      <div className="p-8">
        {data.summary && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-gray-300">
              PROFESSIONAL PROFILE
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify">{data.summary}</p>
          </section>
        )}

        {data.experience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-gray-300">
              PROFESSIONAL EXPERIENCE
            </h2>
            {data.experience.map((exp) => (
              <div key={exp.id} className="mb-5 pl-4 border-l-4 border-gray-300">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-gray-700 font-medium">
                      {exp.company} | {exp.location}
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 whitespace-nowrap ml-4">
                    {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                  </span>
                </div>
                <p className="text-gray-700 mt-2 text-justify">{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {data.education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-gray-300">
              EDUCATION
            </h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-4 pl-4 border-l-4 border-gray-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-gray-700 font-medium">{edu.institution}</p>
                    {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
                  </div>
                  <span className="text-sm text-gray-600 whitespace-nowrap ml-4">
                    {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                  </span>
                </div>
              </div>
            ))}
          </section>
        )}

        {data.skills.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3 pb-2 border-b-2 border-gray-300">
              SKILLS & EXPERTISE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(skillsByCategory).map(([category, skills]) => (
                <div key={category} className="mb-2">
                  <h3 className="font-semibold text-gray-800 mb-1">{category}:</h3>
                  <p className="text-gray-700">{skills.join(', ')}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
