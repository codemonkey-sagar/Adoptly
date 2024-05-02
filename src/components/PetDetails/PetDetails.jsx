import { useParams } from "react-router-dom";
import usePets from "../../hooks/usePets";

const PetDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = usePets(id);
  const pet = data?.pets[0];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occured. ${isError}</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>Details Page</h1>
      <h2>
        {pet.name} - {pet.breed} - {pet.city}, {pet.state}
      </h2>
      <button>Adopt {pet.name}</button>
    </>
  );
};

export default PetDetails;
