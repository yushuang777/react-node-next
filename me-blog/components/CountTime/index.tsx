import React, { useEffect, useState } from 'react';

interface Props {
  time: number;
  onEnd: Function;
}

function CountTime(props: Props) {
  const { time, onEnd } = props;
  const [countTime, setCountTime] = useState(time || 5);

  useEffect(() => {
    const id = setInterval(() => {
      setCountTime((prevCountTime) => {
        if (prevCountTime === 0) {
          clearInterval(id);
          onEnd && onEnd();
          return prevCountTime;
        }
        return prevCountTime - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [time, onEnd]);

  return <div>{countTime}</div>;
}

export default CountTime;
