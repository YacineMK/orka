import React, { useState } from 'react';

interface AddNodeFormProps {
  onSubmit: (nodeData: {
    title: string;
    date: Date;
    resources: string;
    executionTime: string;
    cost: string;
    backgroundColor: string;
  }) => void;
  onClose: () => void;
}

const COLORS = [
  '#E57373', // Pink
  '#7E57C2', // Purple
  '#FF9800', // Orange
  '#4CAF50', // Green
];

export const AddNodeForm: React.FC<AddNodeFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    date: new Date().toISOString().split('T')[0],
    resources: '',
    executionTime: '',
    cost: '',
    backgroundColor: COLORS[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      date: new Date(formData.date),
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-20" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-xl w-80 relative">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">Add New Task</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          {/* Color Selection */}
          <div className="mb-4 flex gap-2">
            {COLORS.map((color) => (
              <button
                key={color}
                type="button"
                className={`w-6 h-6 rounded-full transition-transform ${
                  formData.backgroundColor === color ? 'scale-110 ring-2 ring-offset-2 ring-blue-500' : ''
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setFormData({ ...formData, backgroundColor: color })}
              />
            ))}
          </div>

          {/* Title Input */}
          <input
            type="text"
            required
            placeholder="Task title"
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />

          {/* Date Input */}
          <input
            type="date"
            required
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />

          {/* Resources Input */}
          <input
            type="text"
            placeholder="Resources"
            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={formData.resources}
            onChange={(e) => setFormData({ ...formData, resources: e.target.value })}
          />

          {/* Time and Cost Row */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Duration"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={formData.executionTime}
              onChange={(e) => setFormData({ ...formData, executionTime: e.target.value })}
            />
            <input
              type="text"
              placeholder="Cost"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={formData.cost}
              onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 