var ok;var nmh;(function(){ok=async function() {
    document.body.innerHTML=null;
    await fetch(`https://uview.instructure.com/api/v1/users/self/missing_submissions?include[]=course&filter[]=submittable&per_page={max}`, {
        "headers": {
            "accept": "application/json, text/javascript, application/json+canvas-string-ids, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9,es;q=0.8",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-csrf-token": "rr+YtvlKLjWe+ilDD1IqQvHLYQg1eptJPNV6jP13k2Hg6OnbrBocDMepeS9BYWEag4FZI1kV3AEL7DXNzS/bLA==",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://uview.instructure.com/",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    }).then(vc=>vc.json().then(vcd=>n=vcd));
    var num=0;
    n.forEach(function(entry) {
        if((entry.locked_for_user===false)&&(entry.omit_from_final_grade===false)) {
            num++
            var nm=document.createElement("a");
            nm.href=entry.html_url;
            nm.innerText=entry.name;
            nm.target="_blank";
            var m=(document.createElement("div"));
            var nn=document.createElement("div")
            nn.appendChild(nm);
            nn.appendChild(m);
            tar=nn;
            nn.style.borderColor="black";
            nn.style.borderStyle="solid";
            nn.style.borderBottomStyle="none";
            document.body.appendChild(nn);
        }
    });
    var mnm=document.createElement("strong");
    mnm.innerText="you have ("+num+") missing assignments";
    document.body.appendChild(mnm);
};
    nmh=setInterval(ok,((parseFloat(prompt("how long between updates in min","2")))*60000));
    var tempmax=parseInt(prompt("max to list","1-100"))
    let max=tempmax || 100})()