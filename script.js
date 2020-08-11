//Using fetch API to load JSON data and data validate...

async function loginDataValid(e){
    var name = document.getElementById("name").value;
    var passw = document.getElementById('passw').value;
    var loginfailed = "<b>Please check your username and password and try again..<b>";
    const res = await fetch("../users.json");
    const users = await res.json();
    
	e.preventDefault();
    for(var i=0;i < users.length;i++){
        if (name == users[i].name && passw == users[i].password){
            window.location.replace("homepage.html");
            
        }
        else{
            document.getElementById("loginfailed").innerHTML = loginfailed;
        }
    }
}

document.getElementById('login').addEventListener('click',loginDataValid);


//Homepage events...
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


