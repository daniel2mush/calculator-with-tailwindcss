interface accordionType {
  id: number,
  title: string, 
  content : string
 }

export const accordionItems : accordionType [] = [
  {
    id: 1,
    title: "What is the main benefit of using this product?",
    content: "The main benefit is increased efficiency, saving you valuable time and resources on your daily tasks."
  },
  {
    id: 2,
    title: "How do I get started?",
    content: "Getting started is easy! Simply sign up for a free trial on our homepage and follow the quick setup guide."
  },
  {
    id: 3,
    title: "Is there a mobile app available?",
    content: "Yes, we offer a fully functional mobile app for both iOS and Android devices, available for download on the App Store and Google Play Store."
  },
  {
    id: 4,
    title: "What kind of support do you offer?",
    content: "We provide comprehensive support including a detailed knowledge base, email support, and live chat during business hours."
  }
];

export default accordionItems; // Or just declare it if not using modules