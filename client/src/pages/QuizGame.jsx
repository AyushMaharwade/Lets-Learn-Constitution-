import { useEffect } from 'react';

const Quizgame = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div><iframe
    src="https://quiz-game-eta-seven.vercel.app/" 
    style={{
      width: '100%', 
      height: '100vh', 
      border: 'none', 
    }}
    title="Embedded React App"
  /></div>
  )
}

export default Quizgame