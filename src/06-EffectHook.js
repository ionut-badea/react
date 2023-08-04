import { useEffect, useState } from "react";

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
    });

    return (
        <div className="card">
            <h1 className="title">Effect Hook</h1>
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

                <p className="content">
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
        </div>
    );
}
