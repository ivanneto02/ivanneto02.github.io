import React, { Component } from "react";

import Header from "@components/Header";

class BriefEntries extends Component {
    render() {
        return (
            <div id="main">
                <Header />
                <section>
                    <header className="content">
                        <h1>BriefEntries</h1>
                    </header>
                </section>
            </div>
        );
    }
}

export default BriefEntries;
