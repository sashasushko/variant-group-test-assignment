import React, { useState } from "react";

interface LetterGeneratorProps {
  onGenerate: (content: string) => void;
}

export const LetterGenerator: React.FC<LetterGeneratorProps> = ({
  onGenerate,
}) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    company: "",
    skills: "",
    additionalDetails: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const content = `
Dear Hiring Manager,

I am writing to express my strong interest in the ${formData.jobTitle} position at ${formData.company}. With my skills in ${formData.skills}, I believe I would be a valuable addition to your team.

${formData.additionalDetails}

Thank you for your consideration. I look forward to the opportunity to discuss how I can contribute to ${formData.company}'s success.

Sincerely,
[Your Name]
    `;
    onGenerate(content);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="jobTitle">Job Title</label>
        <input
          id="jobTitle"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="skills">I am good at</label>
        <input
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="additionalDetails">Additional Details</label>
        <textarea
          id="additionalDetails"
          name="additionalDetails"
          value={formData.additionalDetails}
          onChange={handleChange}
          rows={5}
        />
        <p className="text-sm text-gray-500 mt-1">
          Character count: {formData.additionalDetails.length}
        </p>
      </div>
      <button type="submit">Create Cover Letter</button>
    </form>
  );
};
