
export interface testiObj  {
  id: number,
  name: string,
  title: string,
  quote: string,
  image : string
}

const testimonials:testiObj[]  = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Marketing Manager at Innovate Solutions",
    quote: "Using this service transformed our workflow. The efficiency gains were immediate and significant!",
    image: "https://randomuser.me/api/portraits/women/1.jpg" // Placeholder image URL
  },
  {
    id: 2,
    name: "David Garcia",
    title: "Founder of CreativeByte Studio",
    quote: "The support team is top-notch and the product quality exceeded our expectations. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/2.jpg" // Placeholder image URL
  },
  {
    id: 3,
    name: "Emily Davis",
    title: "Lead Developer at TechForward Co.",
    quote: "An indispensable tool for modern development. It seamlessly integrated into our stack and improved productivity.",
    image: "https://randomuser.me/api/portraits/women/3.jpg" // Placeholder image URL
  }
];

export default testimonials; // Or just declare it if not using modules