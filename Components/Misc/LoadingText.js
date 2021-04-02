import { useState, useEffect } from "react"

export default function LoadingText() {
    const phraseList = ["overhauling", "getting coffee", "setting codes", "oh no... wait nvm : )", "fetching cuteness", "getting more coffee", "more overhauling", "overhauling", "more overhauling", "more cuteness", "new buttons", "new backend", "removing shadows", "farting... excuse me", "game-ifying", "more content"]
    const [dynamicText, setDynamicText] = useState(phraseList[0])

    useEffect(() => {
        const randomPhraseIndex = Math.floor(Math.random() * phraseList.length)
        const timer = setInterval(() => {
            setDynamicText(phraseList[randomPhraseIndex])
        }, 7500)

        return () => clearInterval(timer);
    });

    return (
        <small>
            {dynamicText}...
        </small>
    )
}