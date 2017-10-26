async function getPlaces() {
  const res = await fetch('http://localhost:7070/places')
  const something = await res.json();
  console.log(something);

  return something;
}

export default getPlaces
