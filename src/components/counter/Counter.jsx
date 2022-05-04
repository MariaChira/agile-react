import { useState } from "react"
export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <output>{count}</output>
            <div>
                <button onClick={() => setCount(count-1)}>-</button>
                <button onClick={() => setCount(count+1)}>+</button>
            </div>
        </div>
    )
}