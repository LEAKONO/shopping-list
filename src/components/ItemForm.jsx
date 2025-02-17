import React, { useState } from "react";

const ItemForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    const newItem = {
      id: Date.now(),
      name: formData.name,
      description: formData.description,
      category: formData.category,
      price: parseFloat(formData.price) || 0, // Ensure valid price
    };

    onAdd(newItem);

    setFormData({ name: "", description: "", category: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6 max-w-md mx-auto">
      <label className="block">
        <span className="font-medium text-gray-700">Name:</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label className="block">
        <span className="font-medium text-gray-700">Description:</span>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label className="block">
        <span className="font-medium text-gray-700">Category:</span>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <label className="block">
        <span className="font-medium text-gray-700">Price:</span>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          min="0"
          step="0.01"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </label>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Add Item
      </button>
    </form>
  );
};

export default ItemForm;
