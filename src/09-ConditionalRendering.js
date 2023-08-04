import { useEffect, useRef, useState } from "react";

export default function Hero(props) {
    const [name, setName] = useState("Superman");

    useEffect(() => {
        console.log("Mounted updates");
    }, []);

    useEffect(() => {
        console.log("Name updates", name);
    }, [name]);

    useEffect(() => {
        console.log("Any updates");
        console.log("REF", nameRef.current.innerText);
    });

    const nameRef = useRef();

    const [isDisplayed, setIsDisplayed] = useState(false);

    const toggle = () => {
        setIsDisplayed(previous => !previous);
    };

    const toggleText = isDisplayed ? "Hide Secret" : "Show Secret";

    return (
        <div className="card">
            <h1 className="title">Conditional Rendering</h1>
            <div className="section">
                <h2 className="subtitle">Props:</h2>

                <div className="row">
                    <p className="content">
                        Name: <span>{props.heroName}</span>
                    </p>
                    <p className="content">
                        Description: <span>{props.children}</span>
                    </p>
                </div>
            </div>

            <div className="section">
                <h2 className="subtitle">State:</h2>

                <p className="content" ref={nameRef}>
                    Name: <span>{name}</span>
                </p>

                <div className="row">
                    <button className="button" onClick={() => setName("Superman")}>
                        Switch to Superman
                    </button>
                    <button className="button" onClick={() => setName("Batman")}>
                        Switch to Batman
                    </button>
                </div>
            </div>

            <div className="section">
                <h2 className="subtitle">Lists and Keys:</h2>

                <ul className="list">
                    {props.friends.map(friend => (
                        <li className="item" key={friend}>
                            {friend}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="section">
                <h2 className="subtitle">Conditional Rendering:</h2>

                <div className="row">
                    <button className="button secret" onClick={toggle}>
                        {toggleText}
                    </button>
                    {isDisplayed && (
                        <p className="content secret">
                            <span>Superhero secrets</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
