import React, { useState, useRef } from "react";

const ThemeContext = React.createContext()

export function ThemeProvider({ children }) {
    {/** create hooks */}
    const [backColor, setBackColor] = useState('#00358a');
    const [textColor, setTextColor] = useState('#FFFFFF');
    const [revChoiceB, setRevChoiceB] = useState('none');
    const [revChoiceT, setRevChoiceT] = useState('none');

    {/** prep inline styling */}
    const resStyle ={
        backgroundColor: backColor,
        color: textColor
    }

    //set up initial useRef values
    const lastback = useRef('#00358a');
    const lastText = useRef('#FFFFFF');

    const showButtonB = {
        display: revChoiceB,
        backgroundColor: lastback.current,
        color: lastText.current
    }
  
    const showButtonT = {
        display: revChoiceT,
        backgroundColor: lastback.current,
        color: lastText.current
    }

    {/** Respond to event listeners */}
    function changeBackColor(props) {
        lastback.current = backColor;
        setBackColor(props.target.value);
        setRevChoiceB('inline');
    }
  
    function revertBack() {
        setBackColor(lastback.current);
        setRevChoiceB('none');
    }
    
    function changeFontColor(props) {
        lastText.current = textColor;
        setTextColor(props.target.value);
        setRevChoiceT('inline');
    }
  
    function revertText() {
        setTextColor(lastText.current);
        setRevChoiceT('none');
    }

    return(
        <ThemeContext.Provider>
            <div id ='jumpField' style={resStyle}>
                {children}
                <div id='colorPicks'>
                    <div id='bColorPick'>
                        <button id='revText' style ={ showButtonB }onClick={revertBack}>Last Background Color</button>
                        <label htmlFor='#backgroundColor'>Background Color:</label>
                        <input type='color' id='backgroundColor' value={backColor} onChange={changeBackColor} />
                    </div>
                    <div id='tColorPick'>
                        <button id='revText' style={ showButtonT } onClick={revertText}>Last Text Color</button>
                        <label htmlFor='#fontColor'>Text Color:</label>
                        <input type='color' id='fontColor' value={textColor} onChange={changeFontColor} />
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    )
}