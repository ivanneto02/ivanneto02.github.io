import React, { Component } from "react"

import MiniPosts from "./MiniPosts"

class CoolStuff extends Component {
    render() {
        return (
            <section>
                <header className="major">
                    <h2>Cool Stuff</h2>
                </header>
                <MiniPosts />
                <ul className="actions">
                    <li><a href="/" className="button" target="_blank">More</a></li>
                </ul>
            </section>
        );
    }
}

export default CoolStuff;
