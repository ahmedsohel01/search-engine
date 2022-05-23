// Selectors
const camIcon = document.querySelector(".cam-icon img");
const camWrapper = document.querySelector(".cam-wrapper");
const filterBtn = document.querySelector(".filter-btn");
const filterOptions = document.querySelector(".search-filter");
const nineDots = document.querySelector(".nine-dots");
const sidebar = document.querySelector(".sidebar");

// Sidebar
nineDots.addEventListener("click", function () {
  sidebar.classList.toggle("hidden");
  // console.log("nine dots click");
});

// Cam icon option
camIcon.addEventListener("click", function () {
  camWrapper.classList.toggle("hidden");
});
