
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

import { Component, DOM, get, html, setRuntime } from "../fromwork";


class Props {

    titleText: string = '';

}



export const Samplepage = (props: Props): Component => {

    setRuntime(() => {

        DOM.id('title').innerText += props.titleText;
        DOM.id('alertButton').addEventListener('click', () => alert('Hello there'));

        get('http://localhost:4000/', (res, err) => {
            if(err === false) {
                console.log('error', res);
                return;
            }
            console.log(res);
        })

    });

    // 
    return html(/*html*/`

        <button id="alertButton">Press Me</button>
        <h1 id="title">Example page with text:&nbsp</h1>

    `)

}
