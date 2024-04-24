import { useEffect, useState } from 'react';

export default function EffectExample() {
  const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //   console.log(`%cRunning Effect without Dep Array -> after rendering`, 'color: green; font-size: 1rem');
  // });

  useEffect(() => {
    console.log('%cRunning after MOUNT', 'color: orangered;font-size: 1rem');

    return () => console.log('%cCLEANUP without Dep array', 'color:limegreen;font-size:1rem;');
  }, []);

  useEffect(() => {
    if (toggle) {
      console.log('%cRunning after STATE CHANGE', 'color:blue;font-size:1rem');
    }
  }, [toggle]);

  console.log('Hello from the Example');

  return (
    <div className='card'>
      <button onClick={() => setToggle((previousVal) => !previousVal)}>Effect Example</button>
    </div>
  );
}
