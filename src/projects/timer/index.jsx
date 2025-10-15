import { useEffect, useRef, useState } from 'react';
import './index.css'

function Timer() {
    const [isCounting, setIsCounting] = useState(false);
    const [time, setTime] = useState(0);
    const startTimeRef = useRef(0);
    const animationFrameRef = useRef(null);

    const runTimer = (timestamp) => {
        if(!startTimeRef.current) {
            startTimeRef.current = timestamp;
        }

        const timeSince = timestamp - startTimeRef.current;
        setTime(timeSince);
        animationFrameRef.current = requestAnimationFrame(runTimer);
    }

    useEffect(() => {
        if(isCounting) {
            animationFrameRef.current = requestAnimationFrame(runTimer);
        } else {
            cancelAnimationFrame(animationFrameRef.current);
        }
        return () => cancelAnimationFrame(animationFrameRef.current);
    }, [isCounting]);

    const handlePlayClick = () => {
        setIsCounting(prev => !prev);
    }

    const handleResetClick = () => {
        setIsCounting(false);
        setTime(0);
        startTimeRef.current = 0;
    }

    const padTime = (num) => {
        return String(num).padStart(2, '0');
    }

    const formatSecs = (time) => {
        const sec = Math.floor((time / 1000) % 60);
        return `${padTime(sec)}`;
    }

    const formatMins = (time) => {
        const min = Math.floor((time / (1000 * 60)) % 60);
        return `${padTime(min)}`;
    }

    const formatMili = (time) => {
        const mili = String(Math.floor(time)).slice(-3, -1);
        return `${padTime(mili)}`;
    }

    return (
    <section id="timer" className="timer">
        <div className="count">
            <span className='big-time'>{formatMins(time)}</span>:<span className='big-time'>{formatSecs(time)}</span><span className='miliseconds'>{formatMili(time)}</span>
        </div>
        <div className="timer-actions">
            <button onClick={handlePlayClick}>{isCounting ? '⏸️' : '▶️'}</button>
            <button onClick={handleResetClick}>🔁</button>
        </div>
    </section>
    );
};

export default Timer;