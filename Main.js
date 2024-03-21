let ok = async function () {
    document.body.innerHTML = null;
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

    //numEl is a line of text that displays the number of missing assignments
    let numEl = document.createElement("strong");
    numEl.innerText = `you have "${num}" missing assignments`;
    document.body.appendChild(numEl);
};
let nmh = setInterval(ok, ((parseFloat(prompt("how long between updates in min", "2"))) * 60000));
tempMax = parseInt(prompt("max to list", "1-100"))
let max = tempMax || 100;
let showBody=confirm("do you want the body of the assignment to be shown? (if you select cancel, only the assignment title will be shown)")