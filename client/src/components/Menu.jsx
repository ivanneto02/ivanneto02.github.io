import React, { Component, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../styles/Menu.css";

const Menu = () => {
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);
    const [active4, setActive4] = useState(false);

    return (
        <nav id="menu">
            <header className="major">
                <h2>Menu</h2>
            </header>
            <ul>
                <li><a href="/">Homepage</a></li>
                <li>
                    <span
                        className={`opener ${active1 ? "active" : ""}`}
                        onClick={() => setActive1(!active1)}
                    >Minecraft</span>
                    <ul>
                        <li><a href="/manacube">Manacube</a></li>
                        <li><a href="/hypixel">Hypixel</a></li>
                        <li><a href="/modsclients">Mods/Clients</a></li>
                        <li><a href="/plugins">Plugins/Servers</a></li>
                        <li><a href="/visuals">Visuals</a></li>
                    </ul>
                </li>
                <li>
                    <span
                        className={`opener ${active2 ? "active" : ""}`}
                        onClick={() => setActive2(!active2)}
                    >Freelance Work</span>
                    <ul>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/clientstories">Client Stories</a></li>
                        <li><a href="/tipsandtricks">Tips and Tricks</a></li>
                        <li><a href="/monetaryanalysis">Monetary Analysis</a></li>
                    </ul>
                </li>
                <li>
                    <span
                        className={`opener ${active3 ? "active" : ""}`}
                        onClick={() => setActive3(!active3)}
                    >Personal Blog</span>
                    <ul>
                        <li><a href="/briefentries">Brief entries</a></li>
                        <li><a href="/longentries">Long entries</a></li>
                        <li><a href="/thoughtsideas">Thoughts/Ideas</a></li>
                        <li><a href="/travel">Travel</a></li>
                        <li><a href="/pets">Pets</a></li>
                    </ul>
                </li>
                <li>
                    <span
                        className={`opener ${active4 ? "active" : ""}`}
                        onClick={() => setActive4(!active4)}
                    >Miscellaneous</span>
                    <ul>
                        <li><a href="#">I don't know yet :)</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
