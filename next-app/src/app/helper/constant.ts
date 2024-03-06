// Theme colors
const themeColor={
  black:"#000",
  white:'#fff',
  gray:'rgb(69 76 95 / 92%)',
  yellow:"#ffff00",
  blueGreen:"#2ea1a7",
}
// Navigation content

const navData = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "CAKE",
    path: "/cake",
  },
  {
    title: "ABOUT",
    path: "/about",
  },
  {
    title: "BLOG",
    path: "/blog",
  },
  {
    title: "CONTACT",
    path: "/Contact",
  },
];

// Blog data
const blogData = [
  {
    image: "/images/blog1.jpg",
    title: "Fruit Pastries",
    date: "Jne 26, 2019",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elit dui.",
  },
  {
    image: "/images/blog2.jpg",
    title: "New Cakes",
    date: "Jne 26, 2019",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elit dui.",
  },
  {
    image: "/images/blog3.jpg",
    title: "choclate cake",
    date: "Jne 26, 2019",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut elit dui.",
  },
];

const userData=[{
  email:"dee@gmail.com",
  password:"Hello@12345"
}]

const cakeData=[
  {
  img:"https://preview.colorlib.com/theme/cakes/assets/img/gallery/items2.png.webp"
},
  {
  img:"https://preview.colorlib.com/theme/cakes/assets/img/gallery/items1.png.webp"
},
  {
  img:"https://preview.colorlib.com/theme/cakes/assets/img/gallery/items3.png.webp"
},
]


export { themeColor,navData, blogData ,userData,cakeData};
