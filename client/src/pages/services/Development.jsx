import React, { Component } from "react";

import Header from "@components/Header";

import "@styles/Pricing.css";
import "@styles/main.css";

import { MarkdownSection } from "@components";

import MDXContent from "./Development.mdx";

class Development extends Component {
    render() {
        return (
            <div id="main">
                <Header />
                <MarkdownSection MDXContent={MDXContent} />
            </div>
        );
    }
}

export default Development;
