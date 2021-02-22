
/*
*       Artika Web App
*
*       Filename:   index.ts
*       Pathname:   ./index.ts
*       Language:   TypeScript
*       Content:    Entry point for app
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

import { App } from "./app";
import { execRuntime } from "./fromwork";

const htmlTagName = 'artika-app';
const htmlAppTag = document.getElementsByTagName(htmlTagName)[0];

if(htmlAppTag != null) {

    // starts app
    htmlAppTag.innerHTML = App();

    execRuntime();

} else {

    // styled log
    console.log(`%c<${htmlTagName}></${htmlTagName}>%c declaration not found!`,
    'color: white; background-color: blue; font-size: 1.2em', 'color: red; font-size: 1.2em');

    // best practise to throw error
    throw new Error(`<${htmlTagName}> NOT FOUND!`)

}




