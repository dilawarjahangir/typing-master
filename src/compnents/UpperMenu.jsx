import React from 'react';
import { useTestMode } from '../Context/TestModeContext';

const UpperMenu = ({ countDown, currWordIndex }) => {
  const {
    setTestSeconds,
    setTestMode,
    testSeconds,
    testMode,
    setTestWords,
    testWords,
  } = useTestMode();

  const updateTime = (e) => {
    const newTime = parseInt(e.target.id, 10);
    setTestSeconds(newTime);
  };

  const updateWord = (e) => {
    const newWordCount = parseInt(e.target.id, 10);
    setTestWords(newWordCount);
  };

  const updateMode = (e) => {
    setTestMode(e.target.id);
  };

  return (
    <div className="upper-menu">
      {testMode === 'time' ? (
        <div className="counter">{countDown}</div>
      ) : (
        <div className="counter">
          {currWordIndex}/{testWords}
        </div>
      )}

      <div className="modes">
        <span>Mode - </span>
        <span
          className={testMode === 'time' ? 'active mode' : 'mode'}
          id="time"
          onClick={updateMode}
        >
          Time
        </span>
        <span
          className={testMode === 'word' ? 'active mode' : 'mode'}
          id="word"
          onClick={updateMode}
        >
          Word
        </span>
      </div>

      {testMode === 'time' ? (
        <div className="time-modes">
          {[15, 30, 60].map((time) => (
            <div
              key={time}
              className={`time ${testSeconds === time ? 'active-value' : ''}`}
              id={time.toString()}
              onClick={updateTime}
            >
              {time}s
            </div>
          ))}
        </div>
      ) : (
        <div className="word-modes">
          {[10, 20, 30].map((words) => (
            <div
              key={words}
              className={`no-of-word ${
                testWords === words ? 'active-value' : ''
              }`}
              id={words.toString()}
              onClick={updateWord}
            >
              {words}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpperMenu;
