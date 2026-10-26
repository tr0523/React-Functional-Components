const React = required('react');
const { createRoot } = require('react-dom/client');


const Credits = () => {
    return <p>Made in IGME 430</p>;
}


const HelloWorld = () => {
    return(
        <div class = "greeting">
            <h1>Hello World</h1>
            <p>2 + 2 = {2+2}</p>

            <Credits />
        </div>
    );
}

const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(<HelloWorld />);
}

window.onload = init;