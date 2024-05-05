import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "../services/breedService";

const useBreedList = (animal) => {
  const result = useQuery({
    queryKey: ["breeds", animal],
    queryFn: () => fetchBreedList(animal),
    enabled: !!animal,
  });

  return {
    breeds: result.data?.breeds || [],
    isLoading: result.isLoading,
    error: result.error,
  };
};

export default useBreedList;
