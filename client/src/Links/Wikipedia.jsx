import { useEffect } from 'react';

const Wikipedia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  })
    return (
      <div><iframe
      src="https://en.wikipedia.org/wiki/Legislature" 
      style={{
        width: '100%', 
        height: '100vh', 
        border: 'none', 
      }}
      title="Embedded React App"
    /></div>
    )
  }
  
  export default Wikipedia