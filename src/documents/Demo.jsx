import React, { useEffect } from 'react'

function Demo({ intialTime, endTime }) {
    intialTime = Number(intialTime)
    endTime = Number(endTime);
    const [count, setCount] = React.useState(intialTime);


    React.useEffect(() => {
        console.log("inside useeffect")
      const id = setInterval(() => {
        console.log("inside set interval");
        setCount((prevState) => {
          if (prevState === endTime) {
            clearTimeout(id);
            return prevState;
          }
          return prevState - 1;
        });
      }, 1000);
    return () => {
         console.log("cleaning the set interval");
         clearInterval(id);
    }
}, [])

    // React.useEffect(() => {
    //     const id = setInterval(() => {
    //         console.log('inside set interval')
    //         setCount(prevState => {
    //              if (prevState === 0) {
    //                  clearTimeout(id);
    //                  return prevState
    //         } 
    //             return prevState - 1;
    //             });
          
    //     }, 1000)
        
    //     //clean up
    //     return () => {
    //         console.log("cleaning the set interval")
    //         clearInterval(id);
    //     }
    // }, [])
  
    return (
      <div>
            <h1> Count: {count}</h1>
            {/* <button onClick={() => setCount(count+1)}>Click</button> */}
      </div>
    );
}
export {Demo}