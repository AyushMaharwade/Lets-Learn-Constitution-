import { useEffect } from 'react';
const Wikipedia2 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      })
    return (
      <div><iframe
      src="https://en.wikipedia.org/wiki/Executive_(government)" 
      style={{
        width: '100%', 
        height: '100vh', 
        border: 'none', 
      }}
      title="Embedded React App"
    /></div>
    )
  }
  
  export default Wikipedia2