export const PROJECTS = [
  {
    id: "1",
    title: "Movie Trailer APP",
    description:
      "The Movie Trailer App aims to provide a friendly and seamless experience to users, transforming the movie-watching experience by offering a personalized approach. It allows users to watch previews or trailers of upcoming or recently released films, giving them a glimpse of the movie's content, style, and appeal before deciding to watch it in theaters or stream it online. The app includes features like recommendations and trending sections, helping users discover movies they might not have otherwise come across. This can introduce users to a diverse range of films they may enjoy.",
    image: "movieTrailerApp.png",
    functionalities: [
      "Register and Login",
      " Show the recommend movies",
      " Search a movie",
      "Can add favourites and Watch-later movies in the user profiles",
      " Seamless playback of movie trailers within the app.",
      "Enable users to bookmark trailers for later viewing",
    ],
    technologies: [
      " SpringBoot and Spring Cloud, Angular, MySql & MongoDB, RabbitMQ ,  Docker",
    ],
    github: "https://github.com/sangtikonyak/Movie-trailer-app",
  },
  {
    id: "2",
    title: "Myntra Clone",
    description:
      "The Myntra Clone homepage is a replica of the original Myntra website's homepage, featuring a similar layout and design. It includes sections for featured products, trending styles, new arrivals, and special offers, all populated with data fetched from an external API. Additionally, the Myntra Clone homepage includes functionality to add products to the shopping cart directly from the homepage. Users can also remove products from the cart using the 'Delete from Cart' feature, providing a seamless shopping experience similar to the original Myntra website.",
    image: "myntra-c2.png",
    functionalities: [
      "Extract Data from External API",
      "Display the Datas",
      "Add to Cart",
      "Remove From Cart",
    ],
    technologies: ["React js"],
    github: "https://github.com/sangtikonyak/myntra-clone-using-react-js",
  },
  {
    id: "3",
    description:
      "The Amazon Clone is a replica of the Amazon APP, offering a similar layout and functionality. It fetches product data from an external API to display up-to-date listings. Users can view products, read reviews, add items to their cart, and proceed to checkout. The clone includes user authentication for account management, aiming to replicate the core shopping experience of the original Amazon APP.",
    title: "Amazon Clone",
    image: "amazon.jpg",
    functionalities: [
      "Signin and SignUp",
      "JWT Auth",
      "Display the Products",
      "Carousel for Homepage",
      "Add To Cart",
      "Remove From Cart",
      "Increase or decrease the total Number pf product from cart",
      "CheckOut Page",
      "Add Addresses",
      "Edit Addresses",
    ],
    technologies: ["React Native,Node js, MongoDB"],
    github:
      "https://github.com/sangtikonyak/Amazon-clone-using-react-native-and-node-js",
  },
  {
    id: "4",
    title: "Random Quote Generator",
    description:
      "The Random Quote Generator is a web application that uses an API to fetch and display random quotes. Users can click a button to generate a new quote, which is dynamically updated on the page. The app provides a simple and engaging way for users to discover and share inspiring or thought-provoking quotes.",
    image: "quote.png",
    functionalities: [
      "Fetch Random quote from an API on Click",
      "Display the Quote",
    ],
    technologies: ["HTML, CSS, Javascript"],
    github: "https://github.com/sangtikonyak/Random-quote-js",
  },
  {
    id: "5",
    title: "Text to Speech Converter",
    description:
      "The Text-to-Speech (TTS) application using JavaScript is a tool that converts written text into spoken words. It utilizes the Web Speech API, which allows browsers to convert text into speech. Users can enter text into a text box, and the application will use the browser's speech synthesis capabilities to read the text aloud. This application can be useful for accessibility purposes, language learning, or creating audio content from written text.",
    image: "txtToSpeech.png",
    functionalities: ["Convert Text To Speech"],
    technologies: ["HTML, CSS, Javascript"],
    github: "https://github.com/sangtikonyak/text-to-speech-js",
  },
];
