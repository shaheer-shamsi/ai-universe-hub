// Common Loader util

const toggleLoader = (isloading) => {
  const loader = document.getElementById("loader");
  if (isloading) {
    loader.classList.remove("d-none");
  } else {
    loader.classList.add("d-none");
  }
};