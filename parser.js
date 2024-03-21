function subParser(missingSubs, showBody) {
    let count;
    count = 0;
    missingSubs.forEach(
        function (missingSub) {
            if ((missingSub.locked_for_user === false) && (missingSub.omit_from_final_grade === false)) {
                count++
                //assTitle displays the name of the missing assignment, and also the link to the assignment
                let assTitle = document.createElement("a");
                assTitle.href = missingSub.html_url;
                assTitle.innerText = missingSub.name;
                assTitle.target = "_blank";
                //containerEl holds the title of the assignment and the body of the assignment
                let containerEl = document.createElement("div")
                containerEl.appendChild(assTitle);
                if(showBody) {
                    //assBody contains the "description" of the assignment, which is the body of the assignment
                    let assBody = document.createElement("div");
                    assBody.innerHTML = missingSub.description;
                    containerEl.appendChild(assBody);
                }
                containerEl.style.borderColor = "black";
                containerEl.style.borderStyle = "solid";
                containerEl.style.borderBottomStyle = "none";
                document.body.appendChild(containerEl);
            }
        });
    return count;
}
export {subParser};