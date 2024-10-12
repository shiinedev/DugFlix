const faqs = [
    {
      question: "What is MovieApp?",
      answer:
        "MovieApp is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    },
    {
      question: "How much does MovieApp cost?",
      answer:
        "Watch MovieApp on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your MovieApp account to watch instantly on the web at movieapp.com from your personal computer or on any internet-connected device that offers the MovieApp app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    },
    {
      question: "How do I cancel?",
      answer:
        "MovieApp is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
  ];

  faqs.map((faq) =>{
    const accordion = document.querySelector(".accordion");
    const accordionItem = document.createElement("div");
    accordionItem.classList = "accordion-item";

    accordionItem.innerHTML = `
        <h3 class="accordion-question">${faq.question}</h3>
        <p class="accordion-answer">${faq.answer}</p>
            `;

            accordion.appendChild(accordionItem);
            const accordionAnswer = accordionItem.querySelector(".accordion-answer");
        accordionItem.addEventListener("click",() =>{ 
            accordionAnswer.classList.toggle("active")
        })
  })