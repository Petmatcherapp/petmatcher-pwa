import { useState, useEffect } from "react"
import {randomNum} from "../../lib/functions"

export default function LoadingText() {
    const phraseList = ["getting coffee", "oh no. wait nvm : )", "fetching cuteness", "getting more coffee", "more cuteness", "farting... excuse me", "traversing galaxies"]
    const [dynamicText, setDynamicText] = useState(phraseList[0])

    useEffect(() => {
        const timer = setInterval(() => {
            setDynamicText(phraseList[randomNum(0, phraseList.length)])
        }, 5500)

        return () => clearInterval(timer);
    });

    return (
        <small>
            {dynamicText}...
        </small>
    )
}