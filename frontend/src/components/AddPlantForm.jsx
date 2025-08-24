import { useState } from 'react';

const AddPlantForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [categories, setCategories] = useState('');
  const [inStock, setInStock] = useState(true);
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !price || isNaN(price)) {
      setError('Please enter a valid name and price');
      return;
    }

    const categoryArray = categories
      .split(',')
      .map((c) => c.trim())
      .filter((c) => c);

    if (!categoryArray.length) {
      setError('Enter at least one category');
      return;
    }

    onAdd({ name, price: Number(price), categories: categoryArray, inStock });
    setName('');
    setPrice('');
    setCategories('');
    setInStock(true);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-green-800">Add New Plant</h2>

      {error && <p className="text-red-600 mb-3">{error}</p>}

      <input
        type="text"
        placeholder="Enter plant name (e.g., Money Plant)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-900"
        required
      />

      <input
        type="number"
        placeholder="Enter price in USD (e.g., 15)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-900"
        required
      />

      <input
        type="text"
        placeholder="Enter categories, comma separated (e.g., Indoor, Succulent)"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-900"
        required
      />

      <label className="flex items-center mb-4 space-x-3">
        <input
          type="checkbox"
          checked={inStock}
          onChange={(e) => setInStock(e.target.checked)}
          className="h-5 w-5 rounded border-gray-300"
        />
        <span className="text-gray-700 select-none">In Stock</span>
      </label>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
      >
        Add Plant
      </button>
    </form>
  );
};

export default AddPlantForm;
