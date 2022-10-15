import React from "react";

function Footer() {
    const date = new Date();
    const thisYear = date.getFullYear();

    return <footer>
        <p>copyright {thisYear}</p>
    </footer>;
}

export default Footer;