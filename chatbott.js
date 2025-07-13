document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("chatbot-toggle");
  const chatWindow = document.getElementById("chat-window");
  const chatInput = document.getElementById("chat-input");
  const chatSend = document.getElementById("chat-send");
  const chatBody = document.getElementById("chat-body");

  toggleBtn.addEventListener("click", () => {
    chatWindow.classList.toggle("d-none");
  });

  chatSend.addEventListener("click", () => {
    const userText = chatInput.value.trim();
    if (userText !== "") {
      appendMessage("user", userText);
      respond(userText);
      chatInput.value = "";
    }
  });

  function appendMessage(sender, text) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender);
    messageDiv.innerHTML = text;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function respond(input) {
    const lowerInput = input.toLowerCase();


    // Greetings

    const greetingKeywords = ["hi", "hello", "hey", "good morning", "good evening"];
    if (greetingKeywords.some(greet => lowerInput.includes(greet))) {
      appendMessage("bot", "Hello! 👋 I'm your CompSci Assistant. How can I help you today?");
      return;
    }

    // Keyword responses

    const responses = {


      // About 

      "courses": "We offer BSc in Computer Science with modules in programming, web development, data science, and AI.",
      "hod": "Prof. Anita Sharma is the Head of our Department.",
      "established": "The Department of CS was established in 2008.",
      "accredited": "Yes! The department is NAAC A+ accredited.",
      "university": "We are affiliated with Mumbai University.",
      "location": "XYZ College is located in Mumbai.",
      "department name": "We’re the Department of Computer Science at XYZ College.",
      "mission": "Our mission is to develop technically sound, ethically strong, and industry-ready graduates.",

      // Faculty

      "faculty": "We have a dedicated team of experienced and passionate professors guiding students in every domain.",
      "teachers": "Our faculty includes experts in AI, Web Development, Data Structures, and more.",

      // Gallery / Events
      "photos": "You can explore our department gallery in the 'Gallery' section of the website.",
      "events": "We host annual tech fests, workshops, and coding challenges. Check our gallery for highlights!",

      // Testimonials
      "students say": "Check the Testimonials section to see what our students think about us!",
      "reviews": "Visit the Testimonials section for student feedback.",

      // Contact
      "contact": "You can reach us via email at dept.cs@xyzcollege.edu or call +91 98765 43210.",
      "email": "Sure! Email us at dept.cs@xyzcollege.edu",
      "phone": "You can call us at +91 98765 43210.",
      "address": "XYZ College, Mumbai – Department of CS.",

      // Thank you
      "thank": "You're welcome! 😊"
    };

    // Find a match by checking if any key's keyword is in the input
    const matchedKey = Object.keys(responses).find(key => lowerInput.includes(key));

    if (matchedKey) {
      appendMessage("bot", responses[matchedKey]);
    } else {
      appendMessage("bot", `
        Hmm... I’m not sure how to respond to that. 🤔<br>
        You can try asking things like:
        <div class="faq-buttons mt-2">
          <button class="btn btn-sm btn-outline-light mb-1">What courses are offered?</button>
          <button class="btn btn-sm btn-outline-light mb-1">Who is the HOD?</button>
          <button class="btn btn-sm btn-outline-light mb-1">How to contact?</button>
          <button class="btn btn-sm btn-outline-light mb-1">Is the dept accredited?</button>
        </div>
        Or just email us at <strong>dept.cs@xyzcollege.edu</strong>
      `);

      setTimeout(() => {
        document.querySelectorAll(".faq-buttons button").forEach(btn => {
          btn.addEventListener("click", () => {
            const text = btn.textContent.trim();
            appendMessage("user", text);
            respond(text);
          });
        });
      }, 100);
    }
  }
});
