const projectsGrid = document.getElementById("projects-grid");

const selectedCategory = document.querySelector("main").dataset.category;

const filteredProjects = projects.filter(project => {
    return project.categories.includes(selectedCategory);
});

filteredProjects.forEach(project => {

    const card = document.createElement("div");

    card.classList.add("project-card");

    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>

        <div class="project-info">

            <h3>${project.title}</h3>

            <p>${project.date}</p>

            <p>${project.details}</p>

            <h4>${project.feature}</h4>

        </div>
    `;

    card.addEventListener("click", () => {
        window.location.href = `project.html?project=${project.id}`;
    });

    projectsGrid.appendChild(card);
});