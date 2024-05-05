import { useQuery } from "@tanstack/react-query";
import fetchSearch from "../services/searchService";

const useSearch = (requestParams) => {
  const result = useQuery({
    queryKey: ["search", requestParams],
    queryFn: () => fetchSearch(requestParams),
  });

  return {
    pets: result.data?.pets || [],
    isLoading: result.isLoading,
    error: result.error,
  };
};

export default useSearch;
