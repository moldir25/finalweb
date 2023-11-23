document.addEventListener("DOMContentLoaded", function () {
    const flowers = {
        flower1: {
            name: "roze",
            color: "red",
            size: "small"
        },
        flower2: {
            name: "lily",
            color: "white",
            size: "small"
        },
        flower3: {
            name: "chamomile",
            color: "white",
            size: "small"
        },
        flower4: {
            name: "ranunculus",
            color: "white",
            size: "small"
        },
        flower5: {
            name: "ranunculus",
            color: "yellow",
            size: "small"
        },
        flower6: {
            name: "ranunculus",
            color: "pink",
            size: "small"
        },
    };

    
    const flowerImages = document.querySelectorAll("#flowers img");
    flowerImages.forEach(img => {
        img.addEventListener("mouseover", () => {
            showToolTip(img);
            playSound();
        });
        img.addEventListener("mouseout", () => {
            hideToolTip();
        });
    });

    flowerImages.forEach(img => {
        img.addEventListener("click", () => {
            alert(`you add ${flowers[img.id].color} ${flowers[img.id].name} in card!`);
        });
    });

    function playSound() {
        const audio = document.getElementById("audio");
        audio.play();
    }

    // Tooltips
    let tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    document.body.appendChild(tooltip);

    function showToolTip(img) {
        tooltip.innerHTML = `${flowers[img.id].color} ${flowers[img.id].name}`;
        tooltip.style.display = "block";
        tooltip.style.top = `${img.offsetTop - 30}px`;
        tooltip.style.left = `${img.offsetLeft + img.offsetWidth / 2}px`;
    }

    function hideToolTip() {
        tooltip.style.display = "none";
    }


    const heading = document.getElementById('heading');

    function animateHeading() {
        let fontSize = 24;
        let interval = setInterval(() => {
            fontSize += 1;
            heading.style.fontSize = fontSize + 'px';
            if (fontSize >= 30) {
                clearInterval(interval);
                setTimeout(() => {
                    resetHeading();
                }, 1000);
            }
        }, 50);
    }

    function resetHeading() {
        let fontSize = 30;
        let interval = setInterval(() => {
            fontSize -= 1;
            heading.style.fontSize = fontSize + 'px';
            if (fontSize <= 24) {
                clearInterval(interval);
            }
        }, 50);
    }

    heading.addEventListener('mouseover', animateHeading);

    const questions = [
        {
            question: "What color is a typical rose?",
            answers: ["Red", "Blue", "Yellow"],
            correctAnswer: "Red"
        },
        {
            question: "Which flower is commonly associated with love and affection?",
            answers: ["Tulip", "Daisy", "Rose"],
            correctAnswer: "Rose"
        },
        {
            question: "What is the birth flower for the month of January?",
            answers: ["Carnation", "Daffodil", "Snowdrop"],
            correctAnswer: "Carnation"
        },
        {
            question: "Which flower symbolizes purity and virtue?",
            answers: ["Lily", "Orchid", "Sunflower"],
            correctAnswer: "Lily"
        },
        {
            question: "What is the national flower of Japan?",
            answers: ["Cherry Blossom", "Lotus", "Rose"],
            correctAnswer: "Cherry Blossom"
        },
        {
            question: "What flower is often associated with funerals and memorial services?",
            answers: ["Daisy", "Lily", "Carnation"],
            correctAnswer: "Lily"
        },
        {
            question: "Which flower is known as the 'Queen of the Night' and blooms at night?",
            answers: ["Night-Blooming Cereus", "Moonflower", "Night Jasmine"],
            correctAnswer: "Night-Blooming Cereus"
        },
        {
            question: "What is the largest flower in the world?",
            answers: ["Sunflower", "Titan Arum (Corpse Flower)", "Rafflesia"],
            correctAnswer: "Rafflesia"
        },
        {
            question: "Which flower is the national symbol of the Netherlands?",
            answers: ["Tulip", "Daffodil", "Crocus"],
            correctAnswer: "Tulip"
        },
        {
            question: "What flower is often associated with gratitude and Thanksgiving?",
            answers: ["Poinsettia", "Daisy", "Marigold"],
            correctAnswer: "Marigold"
        }
    ];
    

    let currentQuestionIndex = 0;
    const questionElement = document.getElementById("question");
    const options = document.querySelectorAll(".option");
    const result = document.getElementById("result");

    displayQuestion();

    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

        options.forEach((option, index) => {
            option.textContent = currentQuestion.answers[index];
            option.addEventListener("click", checkAnswer);
        });
    }

    function checkAnswer() {
        const selectedAnswer = this.textContent;
        const currentQuestion = questions[currentQuestionIndex];

        if (selectedAnswer === currentQuestion.correctAnswer) {
            result.textContent = "Correct! Well done!";
            result.style.color = "green";
            audioCorrect.play();
        } else {
            result.textContent = "Incorrect! Please try again.";
            result.style.color = "red";
            audioIncorrect.play();
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(displayQuestion, 1500);
        } else {
            questionElement.textContent = "Quiz complete!";
            options.forEach((option) => {
                option.removeEventListener("click", checkAnswer);
                option.style.display = "none";
            });
        }
    }

    const ctx = document.getElementById('flowerChart').getContext('2d');
    const flowerChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Rose', 'Lily', 'Chamomile', 'Ranunculus'],
            datasets: [{
                label: 'Popularity Level',
                data: [80, 60, 50, 70],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
