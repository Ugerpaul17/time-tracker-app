import React, { useState, useEffect } from 'react';
import styles from '../styles/DateTime.module.css';
import { Button } from "react-bootstrap";



export const DateTime = () => {
    
    const [date, setDate] = useState(new Date());

  
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return function cleanup() {
            clearInterval(timer)
        }
    },[]);

    return (
      <div className={styles.dateTime}>
        <p className={styles.time}> {date.toLocaleTimeString()}</p>
        <p className={styles.date}> {date.toLocaleDateString()}</p>
        <Button>Clock In</Button>
      </div>
    );
}

export default DateTime