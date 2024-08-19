import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
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
      question: "Apa itu Tailwind CSS?",
      answer: "Tailwind CSS adalah framework CSS utilitas untuk membangun desain kustom langsung di HTML."
    },
    {
      question: "Bagaimana cara menggunakan ReactJS?",
      answer: "ReactJS adalah library JavaScript untuk membangun user interface dengan komponen yang bisa digunakan kembali."
    },
    {
        question: "Apa itu Tailwind CSS?",
        answer: "Tailwind CSS adalah framework CSS utilitas untuk membangun desain kustom langsung di HTML."
      },
      {
        question: "Bagaimana cara menggunakan ReactJS?",
        answer: "ReactJS adalah library JavaScript untuk membangun user interface dengan komponen yang bisa digunakan kembali."
      },
      {
        question: "Apa itu Tailwind CSS?",
        answer: "Tailwind CSS adalah framework CSS utilitas untuk membangun desain kustom langsung di HTML."
      },
      {
        question: "Bagaimana cara menggunakan ReactJS?",
        answer: "ReactJS adalah library JavaScript untuk membangun user interface dengan komponen yang bisa digunakan kembali."
      },
      {
        question: "Apa itu Tailwind CSS?",
        answer: "Tailwind CSS adalah framework CSS utilitas untuk membangun desain kustom langsung di HTML."
      },
      {
        question: "Bagaimana cara menggunakan ReactJS?",
        answer: "ReactJS adalah library JavaScript untuk membangun user interface dengan komponen yang bisa digunakan kembali."
      },
    // Tambahkan lebih banyak pertanyaan dan jawaban di sini
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Faqitems;
