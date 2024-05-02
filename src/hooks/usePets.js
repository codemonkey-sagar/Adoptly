import { useQuery } from "@tanstack/react-query";
import { fetchPet } from "../services/petService";

const usePets = (id) => {
  return useQuery({
    queryKey: ["petDetails", id],
    queryFn: () => fetchPet(id),
  });
};

export default usePets;
