import PlantCard from './PlantCard';

const PlantList = ({ plants }) => {
  if (!plants.length) {
    return <p className="text-center text-gray-500 mt-8">No plants found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {plants.map((plant) => (
        <PlantCard key={plant._id} plant={plant} />
      ))}
    </div>
  );
};

export default PlantList;
