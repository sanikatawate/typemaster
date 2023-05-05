// import React, { useState, useEffect } from "react";

//   const Timer = ({ state, time, index}) => {
//   const delayResend = time
//   const [delay, setDelay] = useState(+delayResend);
//   const minutes = Math.floor(delay / 60);
//   const seconds = Math.floor(delay % 60);
//   useEffect(() => {
//     if(state==='active'){
//       console.log('after')
//     const timer = setInterval(() => {
//       setDelay(delay - 1);
//     }, 1000);

//     // if (delay === 0) {
//     //   clearInterval(timer);
//     // }

//     return () => {
//       clearInterval(timer);
//     };}
//   }, [state]);

//   return (
//     <>
//       <span>
//         {minutes}:{seconds}
//       </span>
//     </>
//   );
// };

// export default Timer;

import React, { useState, useEffect } from "react";

  const Timer = () => {
  const delayResend = 30
  const [delay, setDelay] = useState(+delayResend);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  useEffect( () => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    // if (delay === 0) {
    //   clearInterval(timer);
    // }

    return () => {
      clearInterval(timer);
    };}
  );

  return (
    <>
      <span>
        {minutes}:{seconds}
      </span>
    </>
  );
};

export default Timer;