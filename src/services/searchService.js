const fetchSearch = async (requestParams) => {
  const { location, animal, breed } = requestParams;

  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );

  if (!res.ok) {
    throw new Error(`Error in fetching pets: ${animal}, ${location}, ${breed}`);
  }

  return await res.json();
};

export default fetchSearch;
