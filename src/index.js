//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.

import React from "react";
import ReactDOM from "react-dom";

function Header() {
    return <header><h1>Keeper</h1></header>;
}

function Note() {
    return <div className="note">
        <h1>This is a note title.</h1>
        <p>This is a note content.</p>
    </div>;
}

function Footer() {
    const date = new Date();
    const thisYear = date.getFullYear();

    return <footer>
        <p>copyright {thisYear}</p>
    </footer>;
}

ReactDOM.render(
    <div>
        <Header /><Note /><Footer />
    </div>,
    document.getElementById("root")
);
