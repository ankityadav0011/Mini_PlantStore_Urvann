import { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const categories = ['', 'Indoor', 'Outdoor', 'Succulent', 'Air Purifying', 'Home Decor'];

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(searchTerm, category);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col sm:flex-row gap-3 sm:items-center mb-6"
    >
      <input
        type="text"
        placeholder="Search by name or category"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat || 'All Categories'}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchFilter;
