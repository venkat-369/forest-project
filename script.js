const data = [
  {
    name: "Tiger",
    img: "https://source.unsplash.com/400x300/?tiger",
    desc: "The tiger is the largest wild cat known for its power and stripes."
  },
  {
    name: "Elephant",
    img: "https://source.unsplash.com/400x300/?elephant",
    desc: "Elephants are the biggest land animals with strong memory."
  },
  {
    name: "Peacock",
    img: "https://source.unsplash.com/400x300/?peacock",
    desc: "Peacock is famous for its colorful feathers."
  },
  {
    name: "Forest Trees",
    img: "https://source.unsplash.com/400x300/?forest,trees",
    desc: "Trees are the lungs of the earth and support wildlife."
  },
  {
    name: "Deer",
    img: "https://source.unsplash.com/400x300/?deer",
    desc: "Deer are gentle herbivores commonly found in forests."
  },
  {
    name: "Parrot",
    img: "https://source.unsplash.com/400x300/?parrot",
    desc: "Parrots are intelligent birds known for mimicking sounds."
  }
];

const container = document.getElementById("cards");

data.forEach(item => {
  container.innerHTML += `
    <div class="card">
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
    </div>
  `;
});
