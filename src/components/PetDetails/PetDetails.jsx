import { useParams } from "react-router-dom";
import usePets from "../../hooks/usePets";
import Carousel from "../Carousel/Carousel";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const PetDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = usePets(id);
  const pet = data?.pets[0] ?? [];

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
      <Carousel images={pet.images} />
      <h2>
        {pet.name} - {pet.breed} - {pet.city}, {pet.state}
      </h2>
      <h3>{pet.description}</h3>
      <button>Adopt {pet.name}</button>
    </>
  );
};

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <PetDetails {...props} />
    </ErrorBoundary>
  );
}
