function cal(){
    ringtext = Number(document.getElementById('txtring').value);
    printtext = ringtext;
    document.getElementById('print').innerHTML = "Mod " + printtext + " will be generated.";
}

function calTwisted(){
    twisted = Number(document.getElementById('twisted').value);
    printtwisted = 2*twisted;
    document.getElementById('printtwisted').innerHTML = "Mod " + printtwisted + " will be generated.";
}