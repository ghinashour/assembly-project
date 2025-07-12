import React from "react"
import { languages } from "../languages"


export default function AssemblyEndgame() {
  const [currentWord, setCurrentWord] = React.useState("react")

    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const alphabetLetters = alphabet.split("").map((letter,index) =>(
      <button className="alphabet"  key={index}>{letter}</button>
    ))

    const languageElements = languages.map(lang => {
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        return (
            <span 
                className="chip" 
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )

    })

     const letterElements = currentWord.split("").map((letter, index) => (
        <span key={index}>{letter.toUpperCase()}</span>
    ))

    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
            </header>
            <section className="game-status">
                <h2>You win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <section className="language-chips">
                {languageElements}
            </section>
            <section className="word">{letterElements}</section>
            <section className="alphabet-buttons">
                {alphabetLetters}
            </section>
        </main>
    )
}
