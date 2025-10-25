// jpura-chat.js
(function () {
  console.log("Chatbot loaded");

  const TOGGLE = document.getElementById('jpuraChat-toggle');
  const CONTAINER = document.getElementById('jpuraChat-container');
  const CLOSE = document.getElementById('jpuraChat-close');
  const FORM = document.getElementById('jpuraChat-form');
  const INPUT = document.getElementById('jpuraChat-input');
  const MESSAGES = document.getElementById('jpuraChat-messages');

  // 🗂️ Predefined questions and answers
  const qaPairs = [
    {
      keywords: ["what is leo", "who are leo", "about leo","leo?"],
      answer:
        "LEO stands for Leadership, Experience, and Opportunity.\n\n It is an internationally recognized organization dedicated to social service and skill development, with active chapters in many countries around the world.",
    },
    {
      keywords: ["describe your club", "about your club", "your club", "club details"],
      answer:
        "The Leo Club of District 306 D7 at the University of Sri Jayewardenepura, established in 2019, empowers Sri Lankan youth through service and leadership. By engaging in social initiatives and community projects, members build essential skills and values that go beyond academics.",
    },
    {
      keywords: ["join", "become member", "register", "how to join", "membership"],
      answer:
        "Fill the following Google Form to join us as a new member:<br><br>" +
        '<a href="https://docs.google.com/forms/d/e/1FAIpQLScGjGj-vrZjXrJkcKW9HliRa7vD3n6E2YS9IhsDo6Y5uOrnKA/viewform" target="_blank" style="color:#0f3bd6; text-decoration:underline;">Join Now</a>',
    },
    {
      keywords: ["contact", "get more details", "more info", "reach you", "email", "fb page"],
      answer:
        "Here are our contact details:<br><br>" +
        "📧 Email: <a href='mailto:japura306c2leos@gmail.com' style='color:#0f3bd6; text-decoration:underline;'>japura306c2leos@gmail.com</a><br>" +
        "📘 Facebook: <a href='https://www.facebook.com/share/17aAVGiPvM/' target='_blank' style='color:#0f3bd6; text-decoration:underline;'>Leo Club of District 306 D7 University of Sri Jayewardenepura</a>",
    },
  ];

  // 💬 Default welcome message
  appendMessage("Hello! 👋 I'm the J'pura D7 Leos Chatbot. You can ask things like:\n\n• What is Leo?\n• Describe about your club\n• How to join?\n• How to get more details?", "bot");

  // Toggle open/close
  TOGGLE.addEventListener("click", () => {
    CONTAINER.classList.toggle("jpuraChat-hidden");
  });
  CLOSE.addEventListener("click", () => {
    CONTAINER.classList.add("jpuraChat-hidden");
  });

  // Handle form submission
  FORM.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = INPUT.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    INPUT.value = "";

    // Simulate bot typing delay
    setTimeout(() => {
      const response = getAnswer(text);
      appendMessage(response, "bot");
    }, 600);
  });

  // 🧩 Function: Add message to chat window
  function appendMessage(text, sender = "bot") {
    const wrap = document.createElement("div");
    const bubble = document.createElement("div");
    bubble.classList.add("jpuraChat-msg", sender === "user" ? "jpuraChat-msg--user" : "jpuraChat-msg--bot");

    // Preserve line breaks
    bubble.innerHTML = text.replace(/\n/g, "<br>");
    wrap.appendChild(bubble);
    MESSAGES.appendChild(wrap);
    MESSAGES.scrollTop = MESSAGES.scrollHeight;
  }

  // 🧠 Function: Find best-matching answer
  function getAnswer(userInput) {
    const lower = userInput.toLowerCase();

    // Try to match each question pattern
    for (const qa of qaPairs) {
      for (const keyword of qa.keywords) {
        if (lower.includes(keyword)) {
          return qa.answer;
        }
      }
    }

    // Default fallback if no match
    return "I'm not sure I understood that 🤔. Try asking things like 'What is Leo?', 'How to join?', or 'Describe your club'.";
  }
})();
