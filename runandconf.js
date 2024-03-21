//runner runs the main function, and if it there is no saved configuration, asks for the settings
function runner(max = null,showBody=null,int=null,saveConfig=false,main) {
    if(max==null) {
        let tempMax = parseInt(prompt("max to list", "1-100"));
        max = tempMax || 100;
    }
    showBody = showBody || confirm("do you want the body of the assignment to be shown? (if you select cancel, only the assignment title will be shown)");
    main(showBody,max);
    int= int||((parseFloat(prompt("how long between updates in min", "2"))) * 60000)
    let nmh = setInterval(main, int);
    if(saveConfig) {
        localStorage["conf"]=JSON.stringify({"max":max,"showBody":showBody,"int":int})
    }
}
//editConf only edits the config without running main. also, it puts the current values as default values
function editConf(max = null,showBody=null,int=null){
    let tempMax = parseInt(prompt("max to list", max||"1-100"));
    max = tempMax || 100;
    showBody = confirm(`do you want the body of the assignment to be shown? (if you select cancel, only the assignment title will be shown). Currently, you ${showBody ? "are" : "aren't"} showing the .`);
    int= ((parseFloat(prompt("how long between updates in min", int/60000||"2"))) * 60000)
    localStorage["conf"]=JSON.stringify({"max":max,"showBody":showBody,"int":int})
}
export {runner,editConf}