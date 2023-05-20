import { useEffect, useRef } from 'react';

import styles from './FollowCursor.module.scss';

export default function FollowCursor() {
  const followRef = useRef(null);
  useEffect(() => {
    function handleMove(e) {
      followRef.current.animate(
        {
          left: `${e.clientX - 50}px`,
          top: `${e.clientY - 50}px`,
        },
        { duration: 800, fill: 'forwards' }
      );
    }
    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);
  return <div className={styles.follow_cursor} ref={followRef}></div>;
}
