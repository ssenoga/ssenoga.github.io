const data = [
  {
    id: 1,
    name: "Project Name",
    image: "image.jpg",
    description:
      "This project is mainly focused on the way how people interact",
    link: "link.php",
  },
];

const projectsContainer = document.querySelector(".projects__container");

fetch("js/data.json")
  .then((response) => response.json())
  .then((data) => {
    data.map(({ id, name, image, desc, link }) => {
      projectsContainer.innerHTML += `
           <div class="projects__container__card ${
             id % 2 === 0 ? "flex-reverse" : null
           }">
              <div class="card__header">
                  <img src="https://ssenoga.github.io/portfolio/${image}" alt="${name}" />
              </div>
              <div class="card__body">
                  <h3>${name}</h3>
                  <p>
                  ${desc}
                  </p>
                  <a href="${link}">Read More</a>
              </div>
              </div>
          `;
    });
  });
