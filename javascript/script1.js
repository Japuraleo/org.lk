document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const projects = document.querySelectorAll(".project");

    // Add click event listeners to the filter buttons
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove the 'active' class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));

        // Add 'active' class to the clicked button
        button.classList.add("active");

        // Get the filter value from the data attribute
        const filter = button.getAttribute("data-filter");

        // Show or hide projects based on the filter value
        projects.forEach((project) => {
          if (filter === "all" || project.classList.contains(filter)) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });
      });
    });
});