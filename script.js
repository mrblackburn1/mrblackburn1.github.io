const questions = {
    programming: {
        functions: [
            { question: "Write a Python function to reverse a string.", markScheme: "Use slicing or a loop." },
            { question: "Explain the use of recursion in functions.", markScheme: "Recursion calls a function within itself." }
        ],
        loops: [
            { question: "Explain the difference between a for loop and a while loop.", markScheme: "A for loop iterates a set number of times; a while loop continues until a condition is met." }
        ]
    },
    data_structures: {
        linked_lists: [
            { question: "Describe the structure of a singly linked list.", markScheme: "A singly linked list contains nodes with data and a reference to the next node." }
        ],
        trees: [
            { question: "What is a binary tree and its use?", markScheme: "A binary tree has nodes with up to two children. It's used in searching and sorting data." }
        ]
    }
    // Add more topics and subtopics as needed
};

function showQuestions(topic, subtopic) {
    const questionsContainer = document.getElementById("questions");
    questionsContainer.innerHTML = "";  // Clear previous questions

    if (questions[topic] && questions[topic][subtopic]) {
        questions[topic][subtopic].forEach(q => {
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
        questionsContainer.textContent = "No questions available for this subtopic.";
    }
}
