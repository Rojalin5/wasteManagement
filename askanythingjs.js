const faqs = [
    { question: "What is waste segregation?", answer: "Waste segregation is the process of separating wet and dry waste for effective disposal." },
    { question: "How to dispose of hazardous waste?", answer: "Hazardous waste should be handed over to authorized disposal facilities." },
    { question: "What are the benefits of recycling?", answer: "Recycling reduces waste in landfills, conserves resources, and saves energy." },
    { question: "What types of waste should be composted?", answer: "Organic waste such as fruit peels, vegetable scraps, and garden waste can be composted." },
    { question: "How can I reduce plastic waste?", answer: "You can reduce plastic waste by using reusable bags, bottles, and containers instead of single-use plastics." },
    { question: "What is e-waste and how should it be disposed of?", answer: "E-waste includes old electronics like phones and computers. It should be disposed of at authorized e-waste collection centers." },
];

const faqSection = document.getElementById("faq-section");

faqs.forEach(({ question, answer }) => {
    const faqItem = document.createElement("div");
    faqItem.className = "faq-item";

    const questionElement = document.createElement("h3");
    questionElement.textContent = question;

    const answerElement = document.createElement("p");
    answerElement.textContent = answer;

    // Adding margin and padding to the answer
    answerElement.style.margin = "10px";
    answerElement.style.padding = "3px";

    faqItem.appendChild(questionElement);
    faqItem.appendChild(answerElement);
    faqSection.appendChild(faqItem);
});

// Function for handling "Ask Anything" submissions
function handleAskAnything() {
    const questionInput = document.getElementById("question-input");
    const response = document.getElementById("response");

    if (questionInput.value.trim() === "") {
        response.textContent = "Please enter a valid question.";
        response.style.color = "red";
    } else {
        response.textContent = "Thank you for your question! We'll get back to you soon.";
        response.style.color = "green";
    }

    // Clear the input field after submission
    questionInput.value = "";
}
