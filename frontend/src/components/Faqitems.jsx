import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
    className="border-b"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    
  >
    <button
      className="w-full text-left py-5 px-2 flex justify-between items-center"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="text-lg font-inter">{question}</span>
      <svg
        className={`w-6 h-6 transform ${isOpen ? "rotate-180" : "rotate-0"} transition-transform`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
    {isOpen && (
      <div className="px-2 py-2 text-[.9rem] text-gray-600">
        {answer}
      </div>
    )}
  </div>
  );
};

const Faqitems = () => {
  const faqs = [
    {
      question: "What is website development?",
      answer: "Website development is the process of designing and creating a website, which involves visual design, functionality development, and content organization to meet business needs or individual goals."
    },
    {
      question: "How long does it take to build a website?",
      answer: "The time required to build a website varies depending on the complexity of the project. For a simple website, it usually takes 4-7 days, while more complex or e-commerce websites can take 2-4 weeks."
    },
    {
      question: "Can I manage my website myself after it is completed?",
      answer: "Yes, we can provide training or documentation on how to manage and update your website. Additionally, we can implement a content management system (CMS) that makes it easy to manage content without technical knowledge."
    },
    {
      question: "Can the website design be customized to match my brand?",
      answer: "Absolutely! We work with you to understand your brand identity and ensure that the website design reflects your brand's style and message. We offer customization options tailored to your specific needs."
    },
    {
      question: "What is SEO and why is it important for my website?",
      answer: "SEO (Search Engine Optimization) is the process of optimizing your website to be more easily found on search engines like Google. SEO is important because it helps improve your website's visibility and ranking, attracting more visitors and potential customers."
    },
    {
      question: "Do you provide website maintenance services after launch?",
      answer: "Yes, we offer website maintenance services that include software updates, bug fixes, and technical support to ensure your website remains functional and secure."
    },
    {
      question: "How is the cost of website development determined?",
      answer: "The cost of website development depends on various factors such as design complexity, number of pages, required functionalities, and project duration. We provide a clear and transparent quote after discussing your project needs and goals."
    },
    {
      question: "Do you also offer graphic design services?",
      answer: "Yes, we provide graphic design services including logo creation, brochures, marketing materials, and UI/UX design. We ensure that all your graphic design elements are consistent with your brand identity."
    },
    {
      question: "What is responsive design?",
      answer: "Responsive design is a web design approach that ensures your website looks and functions well across various devices and screen sizes, including desktops, tablets, and smartphones."
    },
    {
      question: "How do I start a website development project with you?",
      answer: "To start a project, you can contact us for an initial consultation. We will discuss your needs and goals, provide a price quote, and then begin designing and developing your website according to the agreed plan."
    }
];


  return (
    <div className="max-w-2xl mx-auto">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} data-aos-delay={`${index * 100}`} />
      ))}
    </div>
  );
};

export default Faqitems;
