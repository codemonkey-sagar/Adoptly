const fetchPet = async (id) => {
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id}: Unable to fetch details of id ${id}`);
  }

  return apiRes.json();
};

export { fetchPet };
