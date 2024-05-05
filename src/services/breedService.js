const fetchBreedList = async (animal) => {
  if (!animal) return [];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(
      `breeds/${animal}: Unable to fetch breed of animal ${animal}`
    );
  }

  return await apiRes.json();
};

export default fetchBreedList;
