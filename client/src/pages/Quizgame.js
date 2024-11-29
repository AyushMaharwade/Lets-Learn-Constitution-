
const Quizgame = () => {
//   1: [
//     { question: "Who is the head of state in India?", options: ["President", "Prime Minister", "Chief Justice", "Governor"], answer: "President" },
//     { question: "What is the tenure of the President of India?", options: ["4 years", "5 years", "6 years", "7 years"], answer: "5 years" },
//     { question: "Who appoints the Chief Justice of India?", options: ["President", "Prime Minister", "Law Minister", "Governor"], answer: "President" },
//     { question: "In which year was the Constitution of India adopted?", options: ["1947", "1948", "1949", "1950"], answer: "1949" },
//     { question: "How many articles are there in the Indian Constitution?", options: ["395", "444", "448", "450"], answer: "448" },
//   ],
//   2: [
//     { question: "Which article of the Constitution deals with the President?", options: ["Article 51", "Article 52", "Article 53", "Article 54"], answer: "Article 52" },
//     { question: "Who can initiate the process of impeachment of the President?", options: ["Lok Sabha", "Rajya Sabha", "Supreme Court", "Prime Minister"], answer: "Lok Sabha" },
//     { question: "Which article is related to the Prime Minister?", options: ["Article 74", "Article 75", "Article 76", "Article 77"], answer: "Article 75" },
//     { question: "Which article is related to the Vice President?", options: ["Article 63", "Article 64", "Article 65", "Article 66"], answer: "Article 63" },
//     { question: "Which article is related to the Attorney General?", options: ["Article 75", "Article 76", "Article 77", "Article 78"], answer: "Article 76" },
//   ],
//   3: [
//     { question: "Who is responsible for the administration of Union Territories?", options: ["President", "Prime Minister", "Home Minister", "Governor"], answer: "President" },
//     { question: "Which article empowers the Parliament to amend the Constitution?", options: ["Article 360", "Article 368", "Article 370", "Article 371"], answer: "Article 368" },
//     { question: "How many members can the President nominate to the Rajya Sabha?", options: ["10", "12", "14", "16"], answer: "12" },
//     { question: "Which article deals with the financial emergency?", options: ["Article 352", "Article 356", "Article 360", "Article 370"], answer: "Article 360" },
//     { question: "Which article deals with the Supreme Court?", options: ["Article 124", "Article 125", "Article 126", "Article 127"], answer: "Article 124" },
//   ],
//   4: [
//     { question: "Which article of the Constitution deals with the Union Judiciary?", options: ["Article 121", "Article 122", "Article 123", "Article 124"], answer: "Article 124" },
//     { question: "Who presides over the joint session of the Parliament?", options: ["President", "Vice President", "Speaker of Lok Sabha", "Prime Minister"], answer: "Speaker of Lok Sabha" },
//     { question: "Which article deals with the amendment procedure?", options: ["Article 366", "Article 367", "Article 368", "Article 369"], answer: "Article 368" },
//     { question: "Who has the power to proclaim a financial emergency?", options: ["Prime Minister", "Finance Minister", "President", "Chief Justice"], answer: "President" },
//     { question: "Which article deals with the Governor of a state?", options: ["Article 150", "Article 153", "Article 155", "Article 156"], answer: "Article 153" },
//   ],
//   5: [
//     { question: "Which article deals with the powers of the President?", options: ["Article 52", "Article 53", "Article 54", "Article 55"], answer: "Article 53" },
//     { question: "Who has the final say in interpreting the Constitution?", options: ["President", "Supreme Court", "Parliament", "Law Minister"], answer: "Supreme Court" },
//     { question: "Which article of the Constitution deals with the election of the President?", options: ["Article 54", "Article 55", "Article 56", "Article 57"], answer: "Article 54" },
//     { question: "Which article deals with the Council of Ministers?", options: ["Article 74", "Article 75", "Article 76", "Article 77"], answer: "Article 74" },
//     { question: "Which article empowers the President to grant pardons?", options: ["Article 72", "Article 73", "Article 74", "Article 75"], answer: "Article 72" },
//   ],
// };

// function App() {
//   const [currentLevel, setCurrentLevel] = useState(1);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [points, setPoints] = useState(0);
//   const [highestScore, setHighestScore] = useState(0);
//   const [isGameOver, setIsGameOver] = useState(false);
//   const [unlockedLevels, setUnlockedLevels] = useState([1]);

//   useEffect(() => {
//     if (points > highestScore) {
//       setHighestScore(points);
//     }
//   }, [points, highestScore]);

//   const getPointsForLevel = (level) => {
//     switch (level) {
//       case 1: return 2;
//       case 2: return 3;
//       case 3: return 4;
//       case 4: return 5;
//       case 5: return 5;
//       default: return 0;
//     }
//   };

//   const handleAnswer = (isCorrect) => {
//     if (isCorrect) {
//       setPoints(prevPoints => prevPoints + getPointsForLevel(currentLevel));
//     } else if (currentLevel === 5) {
//       setPoints(prevPoints => prevPoints - 2);
//     }

//     if (currentQuestionIndex + 1 < questions[currentLevel].length) {
//       setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//     } else {
//       checkLevelUnlock();
//     }
//   };

//   const checkLevelUnlock = () => {
//     const requiredPoints = getRequiredPointsForNextLevel(currentLevel);
//     if (points >= requiredPoints) {
//       if (currentLevel < 5) {
//         setUnlockedLevels(prevLevels => [...prevLevels, currentLevel + 1]);
//         setCurrentLevel(prevLevel => prevLevel + 1);
//         setCurrentQuestionIndex(0);
//       } else {
//         setIsGameOver(true);
//       }
//     } else {
//       setIsGameOver(true);
//     }
//   };

//   const getRequiredPointsForNextLevel = (level) => {
//     switch (level) {
//       case 1: return 6;
//       case 2: return 20;
//       case 3: return 30;
//       case 4: return 50;
//       case 5: return 70;
//       default: return 0;
//     }
//   };

//   const handleRestart = () => {
//     setCurrentLevel(1);
//     setCurrentQuestionIndex(0);
//     setPoints(0);
//     setIsGameOver(false);
//     setUnlockedLevels([1]);
//   };


//   return (
//     <div className="container">
//       <Sidebar points={points} highestScore={highestScore} unlockedLevels={unlockedLevels} />
//       {isGameOver ? (
//         <div className="game-over">
//           <h2>{points >= getRequiredPointsForNextLevel(currentLevel) ? 'Congratulations! You won the game!' : 'Better luck next time!'}</h2>
//           <button onClick={handleRestart} className="restart-button">Restart Game</button>
//         </div>
//       ) : (
//         <Level
//           level={currentLevel}
//           question={questions[currentLevel][currentQuestionIndex]}
//           onAnswer={handleAnswer}
//         />
//       )}
//     </div>
//   )
}

export default Quizgame