let questions = {};
let currentTopic = null;
let currentSubtopic = null;

// Fetch the questions from the JSON file
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questions = data;  // Store the data in the questions variable
    })
    .catch(error => console.error('Error loading questions:', error));

// Function to show questions for the selected topic and subtopic
function showQuestions(topic, subtopic) {
    currentTopic = topic;
    currentSubtopic = subtopic;
    const questionsContainer = document.getElementById("questions");
    questionsContainer.innerHTML = "";  // Clear previous questions

    // Retrieve the questions for the topic and subtopic
    let selectedQuestions = questions[topic] && questions[topic][subtopic] ? questions[topic][subtopic] : [];

    // Apply the command word filter if one is selected
    const commandFilter = document.getElementById('commandFilter').value;
    if (commandFilter && commandFilter !== "All") {
        selectedQuestions = selectedQuestions.filter(q => q.commandWord === commandFilter);
    }

    // Display the questions
    if (selectedQuestions.length > 0) {
        selectedQuestions.forEach(q => {
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

// Function to filter questions by command word
function filterByCommandWord() {
    // Re-run the showQuestions function to apply the filter
    showQuestions(currentTopic, currentSubtopic);  // Re-display the current topic/subtopic with applied filter
}
