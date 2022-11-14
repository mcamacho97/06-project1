const SaveLocalStorage = (movie) => {
  // Get elements from local storage
  let elements = JSON.parse(localStorage.getItem("movies"));

  // Condition to know if the elements is an array
  if (Array.isArray(elements)) {
    elements.push(movie);
  } else {
    elements = [movie];
  }

  // Save the elements in local storage
  localStorage.setItem("movies", JSON.stringify(elements));
  return movie;
};

export default SaveLocalStorage;
