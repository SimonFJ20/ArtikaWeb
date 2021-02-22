
/*
*       Artika Web App
*
*       Filename:   fromwork.ts
*       Pathname:   ./fromwork.ts
*       Language:   TypeScript
*       Content:    Fromwork main library file
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




/* General HTML utilities */

// For general
export class DOM {
    public static setTitle = (title: string): void => {
        document.title = title;
    };

    /**Specify CSS import, file MUST be in `dist/` folder */
    public static setCssImport = (url: string): void => {
        const newLinkElement = document.createElement("link");
        newLinkElement.rel = "stylesheet";
        //newLinkElement.href = "./style/" + url;
        newLinkElement.href = url;
        document.head.appendChild(newLinkElement);
    };

    public static id = (id: string) => {
        return <HTMLElement>document.getElementById(id);
    };

    public static q = (elementQuery: string) => {
        return <Element>document.querySelector(elementQuery);
    };
}

export type Component = string;


// removes whitespace etc
export const html = (html: string): Component => html.replace(/\r?\n|\r|\s{4}/g, "");

const runtimeCallbacks: Array<() => void> = [];
export const setRuntime = (...callbacks: Array<() => void>): void => {
    callbacks.forEach((callback) => {
        runtimeCallbacks.push(callback);
    });
};
export const execRuntime = (): void => {
    runtimeCallbacks.forEach((callback) => {
        callback();
    });
};

/* Ajax + JQuery */
/*
 *   Allthough i think it would be better to do without jquery, im lazy
 */

/*
export const get = (url: string, callback: (response: object) => void) => {
    const settings = {
        "url": url,
        "method": "GET",
        "timeout": 0,
    };
    $.ajax(settings).done(callback);
};

export const post = (url: string, data: object, callback: (response: object) => void) => {
    const settings = {
        url: url,
        method: "POST",
        timeout: 0,
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
    };
    $.ajax(settings).done(callback);
};

*/

/* Miscellaneous utilities */

export const makeid = (length: number): string => {
    let id = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
};