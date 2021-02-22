
/*
*       Artika Web App
*
*       Filename:   app.ts
*       Pathname:   ./app.ts
*       Language:   TypeScript
*       Content:    Main file for app
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

import { Component, DOM, html } from "./fromwork";
import { Samplepage } from "./routes/samplepage";



export const App = (): Component => {

    DOM.setCssImport('global.css');

    // if router is omitted
    //return html(/*html*/`${Samplepage({titleText: `fromwork is terriblen't`})}`);

    // router, can be omitted
    switch(window.location.pathname) {

        case '/':
            return html(/*html*/`${Samplepage({titleText: `fromwork is terriblen't`})}`);

        default:
            return html(/*html*/`<h1>${window.location.pathname} not found! 404</h1>`);

    }

}

