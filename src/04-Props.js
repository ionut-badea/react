export default function Hero(props) {
    return (
        <div className="card">
            <h1 className="title">Props</h1>
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
        </div>
    );
}
