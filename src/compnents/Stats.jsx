import React from 'react'
import Graph from './Graph'


const Stats = ({wpm, resetTest, accuracy, correctChars, incorrectChars, missedChars, extraChars,graphData}) => {

    var timeSet = new Set();  

    
    const newGraph = graphData.filter((i)=>{
        if(!timeSet.has(i[0])){
            timeSet.add(i[0]);
            return i;
        }
    });





    // console.log(graphData,newGraph);
  return (
    <div  style={{cursor:"default"}} className=" stats-box">
        <div className="left-stats">
            <div className="title">WPM</div>
            <div className="subtitle">{wpm}</div>
            <div className="title">Accuracy</div>
            <div className="subtitle">{accuracy}%</div>
            <div className="title">Characters</div>
            <div className="subtitle">{correctChars}/{incorrectChars}/{missedChars}/{extraChars}</div>
            <div  style={{cursor:"pointer"}} className='subtitle' onClick={resetTest}>Restart</div>
        </div>
        <div className="right-stats">
            {/* graph comp will go here */}
            <Graph graphData={newGraph}/>
        </div>
    </div>
  )
}

export default Stats