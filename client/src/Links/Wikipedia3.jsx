import { useEffect } from 'react';
const Wikipedia3 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      })
    return (
      <div><iframe
      src="https://en.wikipedia.org/wiki/Judiciary_of_India" 
      style={{
        width: '100%', 
        height: '100vh', 
        border: 'none', 
      }}
      title="Embedded React App"
    /></div>
    )
  }
  
  export default Wikipedia3