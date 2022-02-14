import React, { useState } from "react";
import styled from "styled-components";
import History1981 from './Historys/2004_1981';
import History2005 from './Historys/2015_2005';
import History2016 from './Historys/2019_2016';


const Years = styled.div`
    display: flex;
    justify-content:space-around;
    margin: 2% 0;
`;

const Year = styled.div`
    font-size:1.5vw;
    font-weight:bold;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
        font-size:4vw;
    }
`;



const History = function () {
    const [history, setHistory] = useState('3');

    function historyHandler(e) {

        function colorChanged() {
            const years = document.querySelectorAll('.year');
            for (let i of years) {
                i.style.color = 'black';
            }
        }
        // eslint-disable-next-line default-case
        switch (e.target.innerHTML) {
            case '2004~1981':
                colorChanged()
                e.target.style.color = 'rgb(18, 95, 163)';
                setHistory('1');
                break;
            case '2015~2005':
                colorChanged()
                e.target.style.color = 'rgb(18, 95, 163)';
                setHistory('2');
                break;
            case '2019~2016':
                colorChanged()
                e.target.style.color = 'rgb(18, 95, 163)';
                setHistory('3');
                break;
        }
    }
    return (
        <>
            <Years onClick={historyHandler} >
                <Year className='year' style={{ color: 'rgb(18, 95, 163)' }}>2019~2016</Year>
                <Year className='year'>2015~2005</Year>
                <Year className='year'>2004~1981</Year>
            </Years>
            {history === '1' ? <History1981 /> : history === '2' ? <History2005 /> : history === '3' && <History2016 />}
        </>
    )
}
export default History