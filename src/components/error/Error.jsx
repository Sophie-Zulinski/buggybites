'use client';
import { useEffect, useState } from 'react';
import styles from './error.module.css';

export default function Error({ message, setError }) {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(true);
      setError('');
    }, 2500);
  }, []);

  return <p className={isHidden ? styles.hidden : styles.error}>{message}</p>;
}
