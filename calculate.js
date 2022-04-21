function calculatePercentage(){
    var percent = document.getElementById("percent").value;
    var number = document.getElementById("number").value;
    
    if(percent=="" || number==""){
        alert("please enter both fields");
    }
    
    else{
    var result = number*percent/100;

    document.getElementById("result").innerHTML = result;

}

}