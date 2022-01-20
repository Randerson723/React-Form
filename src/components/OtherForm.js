import React from 'react';

export default function OtherForm({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        text="text"
        placeholder="Company Name..."
        value={formData.companyName}
        onChange={(event) =>
          setFormData({ ...formData, companyName: event.target.value })
        }
      />
      <input
        text="text"
        placeholder="Occupation..."
        value={formData.occupation}
        onChange={(event) =>
          setFormData({ ...formData, occupation: event.target.value })
        }
      />
    </div>
  );
}
