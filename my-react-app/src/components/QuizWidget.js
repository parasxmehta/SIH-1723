import React, { useState, useEffect } from 'react';
import { FaQuestion, FaTimes, FaChevronRight, FaChevronLeft, FaRedo, FaTrophy } from 'react-icons/fa';
import './QuizWidget.css';

const questions = [
  {
    question: "What is the typical casting temperature range for EC Grade Aluminium?",
    options: ["600°C - 650°C", "700°C - 730°C", "800°C - 850°C", "900°C - 950°C"],
    answer: 1,
    explanation: "EC Grade Aluminium is typically cast between 700°C and 730°C to ensure optimal flow and crystallization."
  },
  {
    question: "Which process is used to remove hydrogen gas and inclusions from molten aluminium?",
    options: ["Rolling", "Degassing & Filtration", "Coiling", "Annealing"],
    answer: 1,
    explanation: "Degassing (often with Argon/Nitrogen) and filtration (ceramic foam filters) remove impurities and hydrogen to prevent defects."
  },
  {
    question: "What does 'UTS' stand for in the context of wire rod mechanical properties?",
    options: ["Uniform Tensile Standard", "Ultimate Thermal Stability", "Ultimate Tensile Strength", "Unit Testing System"],
    answer: 2,
    explanation: "UTS (Ultimate Tensile Strength) measures the maximum stress a material can withstand while being stretched or pulled."
  },
  {
    question: "Which parameter is critical for controlling the grain structure during solidification?",
    options: ["Cooling Rate", "Ambient Humidity", "Conveyor Speed", "Lighting Conditions"],
    answer: 0,
    explanation: "The cooling rate directly influences the grain size and structure, which affects the mechanical properties of the rod."
  },
  {
    question: "In a continuous casting and rolling line, what is the function of the emulsion system?",
    options: ["To fuel the furnace", "To cool and lubricate the rolls", "To paint the rod", "To generate electricity"],
    answer: 1,
    explanation: "Emulsion (oil-water mix) lubricates the rolling gap and removes heat generated during the deformation process."
  },
  {
    question: "What is the primary electrical property monitored for EC grade aluminium rod?",
    options: ["Resistivity/Conductivity", "Capacitance", "Inductance", "Magnetism"],
    answer: 0,
    explanation: "Electrical Conductivity (often measured in %IACS) is the most critical quality parameter for electrical conductor grade aluminium."
  },
  {
    question: "Which factor most directly affects rolling load in a wire rod mill?",
    options: ["Ambient temperature", "Roll diameter and reduction", "Operator shift timing", "Warehouse humidity"],
    answer: 1,
    explanation: "Rolling load is primarily influenced by roll geometry and the percentage reduction applied to the material."
  },
  {
    question: "Typical finishing rolling speed range for aluminium wire rod is:",
    options: ["0.5–1.0 m/s", "2–5 m/s", "8–15 m/s", "25–40 m/s"],
    answer: 2,
    explanation: "Aluminium wire rod finishing stands commonly operate in the high-speed range of roughly 8–15 m/s."
  },
  {
    question: "Which cooling medium is commonly used after rolling to control properties?",
    options: ["Liquid nitrogen", "Air and water sprays", "Hydraulic oil", "Carbon dioxide gas"],
    answer: 1,
    explanation: "Controlled air and water spray cooling manages the cooling rate, affecting grain structure and mechanical properties."
  },
  {
    question: "For EC grade aluminium, conductivity is usually specified around:",
    options: ["30–40 %IACS", "40–50 %IACS", "55–60 %IACS", "≥ 61 %IACS"],
    answer: 3,
    explanation: "Electrical conductor grade aluminium typically targets conductivity at or above about 61 %IACS."
  }
];

const QuizWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    const savedStatus = localStorage.getItem('aluminiumQuizCompleted');
    if (savedStatus === 'true') {
      setQuizCompleted(true);
    }
  }, []);

  const handleOptionClick = (index) => {
    if (selectedOption !== null) return; // Prevent changing answer

    setSelectedOption(index);
    const correct = index === questions[currentQuestion].answer;
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowScore(true);
      setQuizCompleted(true);
      localStorage.setItem('aluminiumQuizCompleted', 'true');
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setIsCorrect(null);
    setQuizCompleted(false); // Optional: if retry allows earning the badge again or just practice
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="quiz-widget-container">
      {/* Floating Button */}
      <button 
        className={`quiz-floating-btn ${isOpen ? 'hidden' : ''}`} 
        onClick={toggleOpen}
        aria-label="Test Your Knowledge"
      >
        <div className="quiz-icon-wrapper">
          <FaQuestion className="quiz-icon" />
        </div>
        <span className="quiz-label">Test Your Knowledge</span>
      </button>

      {/* Quiz Modal Overlay */}
      <div className={`quiz-overlay ${isOpen ? 'open' : ''}`}>
        <div className="quiz-modal">
          <button className="quiz-close-btn" onClick={toggleOpen}>
            <FaTimes />
          </button>

          {!showScore ? (
            <div className="quiz-content">
              <div className="quiz-header">
                <h3>Aluminium Production Quiz</h3>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                  ></div>
                </div>
                <span className="question-count">Question {currentQuestion + 1} of {questions.length}</span>
              </div>

              <div className="question-section">
                <h4>{questions[currentQuestion].question}</h4>
                <div className="options-grid">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      className={`option-btn 
                        ${selectedOption === index 
                          ? (index === questions[currentQuestion].answer ? 'correct' : 'wrong') 
                          : ''}
                        ${selectedOption !== null && index === questions[currentQuestion].answer ? 'correct-highlight' : ''}
                      `}
                      onClick={() => handleOptionClick(index)}
                      disabled={selectedOption !== null}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {selectedOption !== null && (
                <div className="explanation-section">
                  <p>
                    {isCorrect ? 
                      <strong className="text-success">Correct! </strong> : 
                      <strong className="text-danger">Incorrect. </strong>
                    }
                    {questions[currentQuestion].explanation}
                  </p>
                  <button className="next-btn" onClick={handleNext}>
                    {currentQuestion === questions.length - 1 ? "See Results" : "Next Question"} <FaChevronRight />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="score-section">
              <div className="trophy-icon">
                <FaTrophy />
              </div>
              <h2>Quiz Completed!</h2>
              <p className="score-text">You scored {score} out of {questions.length}</p>
              
              <div className="score-message">
                {score === questions.length ? 
                  "Perfect! You're an aluminium expert!" :
                  score > questions.length / 2 ? 
                  "Great job! You have a good grasp of the basics." : 
                  "Good effort! Keep learning about aluminium production."}
              </div>

              <p className="feedback-text">
                This quiz helps you understand aluminium wire rod production fundamentals.
              </p>

              <button className="retry-btn" onClick={resetQuiz}>
                <FaRedo /> Retry Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizWidget;
