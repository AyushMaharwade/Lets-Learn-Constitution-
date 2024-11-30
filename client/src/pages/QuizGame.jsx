import { useEffect } from 'react';

const Quizgame = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div><iframe
    src="https://quiz-game-eta-seven.vercel.app/" // Replace with the deployed URL
    style={{
      width: '100%', // Set to desired width (e.g., '600px' or '100%')
      height: '100vh', // Set to desired height (e.g., '400px' or '100vh')
      border: 'none', // Optional: Remove iframe border
    }}
    title="Embedded React App"
  /></div>
  )
}

export default Quizgame