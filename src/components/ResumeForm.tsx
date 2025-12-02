import React, { useState } from 'react';
import type { ResumeData, Education, Experience } from '../types';

interface ResumeFormProps {
  onSubmit: (data: ResumeData) => void;
}

export const ResumeForm: React.FC<ResumeFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ResumeData>({
    personalInfo: {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      linkedin: 'linkedin.com/in/johndoe',
      portfolio: 'johndoe.dev',
    },
    summary: 'Experienced software engineer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of building scalable applications and leading cross-functional teams to deliver high-quality solutions.',
    education: [
      {
        id: '1',
        institution: 'University of California, Berkeley',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        startDate: '2015-09',
        endDate: '2019-05',
        gpa: '3.8',
      },
      {
        id: '2',
        institution: 'Stanford University',
        degree: 'Master of Science',
        field: 'Software Engineering',
        startDate: '2019-09',
        endDate: '2021-06',
        gpa: '3.9',
      },
    ],
    experience: [
      {
        id: '1',
        company: 'Tech Innovations Inc.',
        position: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2021-07',
        endDate: '',
        current: true,
        description: 'Lead development of microservices architecture serving 2M+ users. Implemented CI/CD pipelines reducing deployment time by 60%. Mentor junior developers and conduct code reviews.',
      },
      {
        id: '2',
        company: 'StartUp Labs',
        position: 'Full Stack Developer',
        location: 'Palo Alto, CA',
        startDate: '2019-06',
        endDate: '2021-06',
        current: false,
        description: 'Built responsive web applications using React and Node.js. Collaborated with designers to implement pixel-perfect UIs. Optimized database queries improving performance by 40%.',
      },
      {
        id: '3',
        company: 'Digital Solutions Co.',
        position: 'Software Engineer Intern',
        location: 'San Jose, CA',
        startDate: '2018-06',
        endDate: '2018-08',
        current: false,
        description: 'Developed RESTful APIs and integrated third-party services. Participated in agile development processes and daily standups.',
      },
    ],
    skills: [
      { id: '1', name: 'JavaScript', category: 'Programming' },
      { id: '2', name: 'TypeScript', category: 'Programming' },
      { id: '3', name: 'React', category: 'Frontend' },
      { id: '4', name: 'Node.js', category: 'Backend' },
      { id: '5', name: 'Python', category: 'Programming' },
      { id: '6', name: 'PostgreSQL', category: 'Database' },
      { id: '7', name: 'MongoDB', category: 'Database' },
      { id: '8', name: 'AWS', category: 'Cloud' },
      { id: '9', name: 'Docker', category: 'DevOps' },
      { id: '10', name: 'Git', category: 'Tools' },
      { id: '11', name: 'Figma', category: 'Design' },
      { id: '12', name: 'Agile/Scrum', category: 'Methodology' },
    ],
  });

  const [currentEducation, setCurrentEducation] = useState<Omit<Education, 'id'>>({
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    gpa: '',
  });

  const [currentExperience, setCurrentExperience] = useState<Omit<Experience, 'id'>>({
    company: '',
    position: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
  });

  const [currentSkill, setCurrentSkill] = useState({ name: '', category: '' });

  const addEducation = () => {
    if (currentEducation.institution && currentEducation.degree) {
      setFormData({
        ...formData,
        education: [...formData.education, { ...currentEducation, id: Date.now().toString() }],
      });
      setCurrentEducation({
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: '',
      });
    }
  };

  const removeEducation = (id: string) => {
    setFormData({
      ...formData,
      education: formData.education.filter((edu) => edu.id !== id),
    });
  };

  const addExperience = () => {
    if (currentExperience.company && currentExperience.position) {
      setFormData({
        ...formData,
        experience: [...formData.experience, { ...currentExperience, id: Date.now().toString() }],
      });
      setCurrentExperience({
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
      });
    }
  };

  const removeExperience = (id: string) => {
    setFormData({
      ...formData,
      experience: formData.experience.filter((exp) => exp.id !== id),
    });
  };

  const addSkill = () => {
    if (currentSkill.name) {
      setFormData({
        ...formData,
        skills: [...formData.skills, { ...currentSkill, id: Date.now().toString() }],
      });
      setCurrentSkill({ name: '', category: '' });
    }
  };

  const removeSkill = (id: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((skill) => skill.id !== id),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Build Your Resume</h2>

      {/* Personal Information */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name *"
            required
            value={formData.personalInfo.fullName}
            onChange={(e) =>
              setFormData({
                ...formData,
                personalInfo: { ...formData.personalInfo, fullName: e.target.value },
              })
            }
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="email"
            placeholder="Email *"
            required
            value={formData.personalInfo.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                personalInfo: { ...formData.personalInfo, email: e.target.value },
              })
            }
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="tel"
            placeholder="Phone *"
            required
            value={formData.personalInfo.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                personalInfo: { ...formData.personalInfo, phone: e.target.value },
              })
            }
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="text"
            placeholder="Location *"
            required
            value={formData.personalInfo.location}
            onChange={(e) =>
              setFormData({
                ...formData,
                personalInfo: { ...formData.personalInfo, location: e.target.value },
              })
            }
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="url"
            placeholder="LinkedIn (optional)"
            value={formData.personalInfo.linkedin}
            onChange={(e) =>
              setFormData({
                ...formData,
                personalInfo: { ...formData.personalInfo, linkedin: e.target.value },
              })
            }
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <input
            type="url"
            placeholder="Portfolio (optional)"
            value={formData.personalInfo.portfolio}
            onChange={(e) =>
              setFormData({
                ...formData,
                personalInfo: { ...formData.personalInfo, portfolio: e.target.value },
              })
            }
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </section>

      {/* Professional Summary */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Professional Summary</h3>
        <textarea
          placeholder="Write a brief summary about yourself..."
          value={formData.summary}
          onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </section>

      {/* Education */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Education</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Institution"
              value={currentEducation.institution}
              onChange={(e) =>
                setCurrentEducation({ ...currentEducation, institution: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Degree"
              value={currentEducation.degree}
              onChange={(e) =>
                setCurrentEducation({ ...currentEducation, degree: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Field of Study"
              value={currentEducation.field}
              onChange={(e) =>
                setCurrentEducation({ ...currentEducation, field: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="GPA (optional)"
              value={currentEducation.gpa}
              onChange={(e) =>
                setCurrentEducation({ ...currentEducation, gpa: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="month"
              placeholder="Start Date"
              value={currentEducation.startDate}
              onChange={(e) =>
                setCurrentEducation({ ...currentEducation, startDate: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="month"
              placeholder="End Date"
              value={currentEducation.endDate}
              onChange={(e) =>
                setCurrentEducation({ ...currentEducation, endDate: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="button"
            onClick={addEducation}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Add Education
          </button>
        </div>

        {formData.education.map((edu) => (
          <div key={edu.id} className="bg-white border border-gray-300 p-4 rounded-lg mb-2 flex justify-between items-start">
            <div>
              <p className="font-semibold">{edu.degree} in {edu.field}</p>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.startDate} - {edu.endDate}</p>
              {edu.gpa && <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>}
            </div>
            <button
              type="button"
              onClick={() => removeEducation(edu.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Work Experience</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Company"
              value={currentExperience.company}
              onChange={(e) =>
                setCurrentExperience({ ...currentExperience, company: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Position"
              value={currentExperience.position}
              onChange={(e) =>
                setCurrentExperience({ ...currentExperience, position: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Location"
              value={currentExperience.location}
              onChange={(e) =>
                setCurrentExperience({ ...currentExperience, location: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="month"
              placeholder="Start Date"
              value={currentExperience.startDate}
              onChange={(e) =>
                setCurrentExperience({ ...currentExperience, startDate: e.target.value })
              }
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="month"
              placeholder="End Date"
              value={currentExperience.endDate}
              onChange={(e) =>
                setCurrentExperience({ ...currentExperience, endDate: e.target.value })
              }
              disabled={currentExperience.current}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-200"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                id="current"
                checked={currentExperience.current}
                onChange={(e) =>
                  setCurrentExperience({
                    ...currentExperience,
                    current: e.target.checked,
                    endDate: e.target.checked ? '' : currentExperience.endDate,
                  })
                }
                className="mr-2"
              />
              <label htmlFor="current" className="text-gray-700">Currently working here</label>
            </div>
          </div>
          <textarea
            placeholder="Job description and achievements..."
            value={currentExperience.description}
            onChange={(e) =>
              setCurrentExperience({ ...currentExperience, description: e.target.value })
            }
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
          />
          <button
            type="button"
            onClick={addExperience}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Add Experience
          </button>
        </div>

        {formData.experience.map((exp) => (
          <div key={exp.id} className="bg-white border border-gray-300 p-4 rounded-lg mb-2 flex justify-between items-start">
            <div>
              <p className="font-semibold">{exp.position}</p>
              <p className="text-gray-600">{exp.company} - {exp.location}</p>
              <p className="text-sm text-gray-500">
                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </p>
              <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
            </div>
            <button
              type="button"
              onClick={() => removeExperience(exp.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Skills</h3>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Skill name"
              value={currentSkill.name}
              onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Category (e.g., Programming, Design)"
              value={currentSkill.category}
              onChange={(e) => setCurrentSkill({ ...currentSkill, category: e.target.value })}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="button"
            onClick={addSkill}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Add Skill
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {formData.skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center gap-2"
            >
              <span>{skill.name} {skill.category && `(${skill.category})`}</span>
              <button
                type="button"
                onClick={() => removeSkill(skill.id)}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </section>

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
      >
        Continue to Template Selection
      </button>
    </form>
  );
};
