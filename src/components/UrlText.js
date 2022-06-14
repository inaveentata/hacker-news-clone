import React from "react";

function UrlText({ url }) {
    if (url) {
        
        let firstIndex;
        let lastIndex;
        if (url.slice(0, 7) === "http://") {
            firstIndex = 7;
        } else {
          firstIndex = 8;
        }
        for (let i = 8; i < url.length; i++) {
          if (url[i] === "/") {
            lastIndex = i;
            break;
          }
        }
        const domain = url.slice(firstIndex, lastIndex);
        return <a href={`https://news.ycombinator.com/from?site=${domain}`} rel="noreferrer" target='_blank'>{ domain}</a>
        
    }
    return;
}

export default UrlText;

/* 
https://news.ycombinator.com/from?site=${domain}
*/