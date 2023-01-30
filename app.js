/* HEADER BURGER RESPONSIVE TOGGLE */
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

/* SEARCH MAGNIFYING AND X TOGGLE AND REMOVE */
document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

/* ADD TO BASKET BUTTON INCREMENT */
const addToBasket = document.getElementsByClassName("btn");
const changeNumber = document.querySelector(".number");

let count = 0;

for (let i = 0; i < addToBasket.length; i++)
  addToBasket[i].addEventListener("click", () => {
    count++;
    changeNumber.classList.add("increment");
    changeNumber.innerText = count;
  });

/* SWIPER HOME SECTION */
var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

/* SWIPER REVIEW SECTION */
const testimonials = [
  {
    name: "Irina L.",
    photoUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, error unde! Cum, officiis accusamus. Dolor commodi cumque dicta, adipisci explicabo aperiam quo sunt excepturi, labore alias officia nulla. Nobis, numquam?",
  },
  {
    name: "David M.",
    photoUrl:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, error unde! Cum, officiis accusamus.",
  },
  {
    name: "Karena R.",
    photoUrl:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, error unde! Cum, officiis accusamus. Dolor commodi cumque dicta, adipisci explicabo aperiam quo sunt excepturi, labore alias officia nulla. Nobis, numquam?",
  },
  {
    name: "Jack R.",
    photoUrl:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, error unde! Cum, officiis accusamus.",
  },
];

const imgEl = document.querySelector(".testimonial-img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".username");

let currentPerson = 0;

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[currentPerson];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  nameEl.innerText = name;
  currentPerson++;

  if (currentPerson === testimonials.length) {
    currentPerson = 0;
  }

  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}

updateTestimonial();
