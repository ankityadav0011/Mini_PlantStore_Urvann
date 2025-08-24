import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlants, addPlant } from './features/plantSlice';

import SearchFilter from './components/SearchFilter';
import PlantList from './components/PlantList';
import AddPlantForm from './components/AddPlantForm';
import Loader from './components/Loader';
import Error from './components/Error';

const App = () => {
  const dispatch = useDispatch();
  const { plants, loading, error } = useSelector((state) => state.plants);
  const [filters, setFilters] = useState({ search: '', category: '' });

  // State for modal visibility
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    dispatch(fetchPlants(filters));
  }, [dispatch, filters]);

  const handleSearch = (search, category) => {
    setFilters({ search, category });
  };

  const handleAddPlant = async (plantData) => {
    try {
      await dispatch(addPlant(plantData)).unwrap();
      alert('Plant added successfully!');
      setShowAddForm(false); // Close the modal after submission
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center p-0 m-0">
      <h1 className="text-4xl font-bold text-green-800 mb-8 w-full text-center">
        Mini Plant Store
      </h1>
      {/* Add Plant Top Button */}
      <div className="flex justify-end w-full px-2 sm:px-8 mb-4">
        <button
          className="bg-green-700 text-white px-5 py-2 rounded shadow hover:bg-green-800 transition"
          onClick={() => setShowAddForm(true)}
        >
          + Add Plant
        </button>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full px-2 sm:px-8">
          <SearchFilter onSearch={handleSearch} />
          {loading && <Loader />}
          {error && <Error message={error} />}
          <div className="w-full">
            <PlantList plants={plants} />
          </div>
        </div>
      </div>

      {/* MODAL FOR PLANT FORM - BLUR ONLY */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Only blurred background, no darkening */}
          <div className="absolute inset-0 backdrop-blur"></div>
          <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg z-10">
            <button
              className="absolute top-3 right-3 text-xl text-gray-500 hover:text-gray-800"
              onClick={() => setShowAddForm(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <AddPlantForm onAdd={handleAddPlant} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
