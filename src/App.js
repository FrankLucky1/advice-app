
import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css'

const App = () => {

    const [advice, setAdvice] = useState("=")

    const fetchAdvice = async()=>{
        try{
           const response = await axios.get('https://api.adviceslip.com/advice');
                const myAdvice = response.data.slip.advice;
                setAdvice(myAdvice)
                } catch (error) {
                    console.log(error)
                    };
    } 

    useEffect(()=>{
        fetchAdvice();
    },[])

    const HandleClick = ()=>{
        fetchAdvice();
    }

  return (
    <div className='App'>
        <div className='card'>
            <h1>{advice}</h1>
            <button onClick={HandleClick}>Next advice</button>    
        </div>
    </div>
  )
}

export default App