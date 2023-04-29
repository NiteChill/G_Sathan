import { useEffect, useState } from 'react';

export default function FollowCursor() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  const [circlePos, setCirclePos] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    function mouseMove(e) {
      setMousePos({ x: e.pageX - 10, y: e.pageY - 10 });
    }
    document.addEventListener('mousemove', mouseMove);
    return () => document.removeEventListener('mousemove', mouseMove);
  }, []);
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setCirclePos({
        x: mousePos.x,
        y: mousePos.y,
      });
    }, 1);
    return () => clearInterval(interval);
  }, [mousePos]);
  return (
    <div
      style={{
        position: 'absolute',
        width: '2rem',
        height: '2rem',
        borderRadius: '1rem',
        zIndex: '1000',
        top: `${circlePos.y}px`,
        left: `${circlePos.x}px`,
        pointerEvents: 'none'
      }}
      className='b-primary'
    ></div>
  );
}
