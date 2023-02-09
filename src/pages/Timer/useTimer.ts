import {useEffect, useState} from 'react';

export default () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setMilliseconds(milliseconds + 1);
        if (milliseconds === 99) {
          setMilliseconds(0);
          setSeconds(seconds + 1);
        }
        if (seconds === 59) {
          setSeconds(0);
          setMinutes(minutes + 1);
        }
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, milliseconds]);

  const handlePress = () => {
    setIsRunning(!isRunning);
  };

  return {
    timer: {minutes, seconds, milliseconds},
    isRunning,
    handlePress,
  };
};
