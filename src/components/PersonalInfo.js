import React from 'react';

export default function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        text="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(event) =>
          setFormData({ ...formData, firstName: event.target.value })
        }
      />
      <input
        text="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(event) =>
          setFormData({ ...formData, lastName: event.target.value })
        }
      />
      <input
        text="text"
        placeholder="Username..."
        value={formData.userName}
        onChange={(event) =>
          setFormData({ ...formData, userName: event.target.value })
        }
      />
    </div>
  );
}
