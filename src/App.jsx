import React, { useState } from 'react';
import './App.css';

function App() {
    // initialiseer één state variabele met daarin een object aan form-waardes
    // let op: de namen van de keys moeten overeenkomen met de name-attributen van de velden
const [formState, setFormState] = useState({
    name: '',
    age: 0,
    comments: '',
    newsletter: false,
} );

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // handleFormChange wordt afgevuurd bij elke verandering en zorgt dan dat het huidige state object wordt gekopieerd
    // alleen de object key van het bijbehorende inputveld wordt overschreven met een nieuwe waarde
    function handleFormChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,

        });
        console.log(`The value of input ${e.target.name} has just been set to ${e.target.value}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Gegevens</legend>

                <label htmlFor="details-name">
                    Naam:
                    <input
                        type="text"
                        name="name"
                        id="details-name"
                        value={formState.name}
                        onChange={handleFormChange}
                    />
                </label>

                <label htmlFor="details-age">
                    Leeftijd:
                    <input
                        type="number"
                        name="age"
                        id="details-age"
                        value={formState.age}
                        onChange={handleFormChange}
                    />
                </label>
            </fieldset>

            <fieldset>
                <legend>Jouw review</legend>

                <label htmlFor="recipe-comments">
                    Opmerkingen:
                    <textarea
                        name="comments"
                        id="recipe-comments"
                        rows="4"
                        cols="40"
                        placeholder="Wat vond je van het recept?"
                        value={formState.comments}
                        onChange={handleFormChange}
                    >
          </textarea>
                </label>

                <label htmlFor="recipe-newsletter">
                    <input
                        type="checkbox"
                        name="newsletter"
                        checked={formState.newsletter}
                        onChange={handleFormChange}
                    />
                    Ik schrijf me in voor de nieuwsbrief
                </label>

                <button type="submit">
                    Versturen
                </button>
            </fieldset>
        </form>
    );
}

export default App;