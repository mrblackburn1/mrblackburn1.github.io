const questions = {
    programming: [
        { question: "Write a function to reverse a string in Python.", markScheme: "Use slicing or a loop." },
        { question: "Explain the difference between a variable and a constant.", markScheme: "A variable changes, a constant does not." }
    ],
    data_structures: [
        { question: "Describe a linked list and its advantages.", markScheme: "A linked list is a linear data structure..." }
    ],
    algorithms: [
        { question: "Explain binary search and provide a code example.", markScheme: "Binary search divides the sorted array..." }
    ]
};

function showTopic(topic) {
    const questionsContainer = document.getElementById("questions");
    questionsContainer.innerHTML = "";  // Clear previous questions

    if (questions[topic]) {
        questions[topic].forEach(q => {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question-item");

            const questionText = document.createElement("p");
            questionText.textContent = q.question;
            questionDiv.appendChild(questionText);

            const revealButton = document.createElement("button");
            revealButton.classList.add("btn", "btn-primary", "mt-2");
            revealButton.textContent = "Show Mark Scheme";
            revealButton.onclick = () => {
                const markSchemeText = document.createElement("p");
                markSchemeText.textContent = `Mark Scheme: ${q.markScheme}`;
                questionDiv.appendChild(markSchemeText);
                revealButton.remove();
            };
            questionDiv.appendChild(revealButton);

            questionsContainer.appendChild(questionDiv);
        });
    } else {
        questionsContainer.textContent = "No questions available for this topic.";
    }
}
