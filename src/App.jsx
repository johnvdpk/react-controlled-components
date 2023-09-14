import React, {useState} from 'react';
import './App.css';

function App() {

    const[nameValue, setNameValue] = useState('');
    const[ageValue, setAgeValue] = useState('');
    const [termsCondi, toggleTerms] =useState(false);

    return (
        <>
            <form>
                <label>Naam:
                <input

                    type="text"
                    id="form-message"
                    name="message"
                    placeholder="Wat is je naam?"
                    value={nameValue}
                    onChange={(e)=>setNameValue(e.target.value)}

                />
                </label>
                <label>Leeftijd:
                <input
                    type=""
                    id="form-message"
                    name="leeftijd"
                    placeholder="wat is je leeftijd"
                    value={ageValue}
                    onChange={(e)=>setAgeValue(e.target.value)}
                    />
                </label>
                <label>checkbox
                    <input
                        type='checkbox'
                        name='checkbox'
                        checked={termsCondi}
                        onChange={()=> toggleTerms(!termsCondi)}
                        />
                    <p>Ik ga akkoord</p>
                </label>


            </form>
        </>
    );
}

export default App;
