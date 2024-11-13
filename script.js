let questions = {};

// Fetch the questions from the JSON file
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questions = data;  // Store the data in the questions variable
    })
    .catch(error => console.error('Error loading questions:', error));

function showQuestions(topic, subtopic) {
    const questionsContainer = document.getElementById("questions");
    questionsContainer.innerHTML = "";  // Clear previous questions

    if (questions[topic] && questions[topic][subtopic]) {
        questions[topic][subtopic].forEach(q => {
            const questionDiv = document.createElement("div");
            questionDiv.classList.add("question-item", "p-3", "mb-3", "border", "rounded", "bg-light");

            // Question text
            const questionText = document.createElement("p");
            questionText.innerHTML = `<strong>Question:</strong> ${q.question}`;
            questionDiv.appendChild(questionText);

            // Command word and Marks
            const detailsText = document.createElement("p");
            detailsText.innerHTML = `<strong>Command Word:</strong> ${q.commandWord} | <strong>Marks:</strong> ${q.marks}`;
            questionDiv.appendChild(detailsText);

            // Show Mark Scheme button
            const revealButton = document.createElement("button");
            revealButton.classList.add("btn", "btn-primary", "mt-2");
            revealButton.textContent = "Show Mark Scheme";
            revealButton.onclick = () => {
                const markSchemeText = document.createElement("p");
                markSchemeText.innerHTML = `<strong>Mark Scheme:</strong> ${q.markScheme}`;
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
