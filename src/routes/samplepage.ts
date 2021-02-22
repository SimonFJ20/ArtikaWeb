
/*
*       Artika Web App
*
*       Filename:   samplepage.ts
*       Pathname:   ./routes/samplepage.ts
*       Language:   TypeScript
*       Content:    Example page for route
*
*       License:    GPL-2.0
*
*       Authors:
*       Simon From Jakobsen
*           Email:      simonfromjakobsen@gmail.com
*           GitHub:     SimonFJ20
*
*       Created:    22-02-2021
*       Last Edit:  22-02-2021
*/

import { Component, DOM, html, setRuntime } from "../fromwork";


class Props {

    titleText: string = '';

}



export const Samplepage = (props: Props): Component => {

    setRuntime(() => {

        DOM.id('title').innerText += props.titleText;

    });

    // 
    return html(/*html*/`

        <button></button>
        <h1 id="title">Example page with text:&nbsp</h1>

    `)

}
