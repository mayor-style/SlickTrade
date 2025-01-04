import React from 'react';

const NotesTextarea = ({ label, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-white mb-2">{label}</label>
      <textarea
        className="w-full p-2 border border-dark-gray rounded-lg bg-gray text-white"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add additional notes (optional)"
        rows="4"
      />
    </div>
  );
};

export default NotesTextarea;
