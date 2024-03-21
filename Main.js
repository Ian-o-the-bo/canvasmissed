let import1 = await import("https://ian-o-the-bo.github.io/canvasmissed/parser.js");
let import2 = await import("https://ian-o-the-bo.github.io/canvasmissed/runandconf.js")
let subParser=import1.subParser;
let editConf=import2.editConf;
debugger;
let main = async function (showBody,max) {
    document.body.innerHTML = null;
    //later on, missingSubs stores the missing assignments.
    let missingSubs;
    await fetch(`https://uview.instructure.com/api/v1/users/self/missing_submissions?include[]=course&filter[]=submittable&per_page=${max}`, {
        "headers": {
            "accept": "application/json, text/javascript, application/json+canvas-string-ids, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9,es;q=0.8",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-csrf-token": "rr+YtvlKLjWe+ilDD1IqQvHLYQg1eptJPNV6jP13k2Hg6OnbrBocDMepeS9BYWEag4FZI1kV3AEL7DXNzS/bLA=="
        },
        "referrer": "https://uview.instructure.com/",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    }).then(result => result.json().then(resBody => missingSubs = resBody));
    //num is used to count the number of missing assignments
    let num;
    num = subParser(missingSubs, showBody);
    //numEl is a line of text that displays the number of missing assignments
    let numEl = document.createElement("strong");
    numEl.innerText = `you have ${num} missing assignments`;
    document.body.appendChild(numEl);
};
//wrapper for runner function. This is needed so that the runner function can be stored separately
let runner=function(max=null,showBody=null,int=null,saveConfig=false){
    import2.runner(max,showBody,int,saveConfig,main);
}