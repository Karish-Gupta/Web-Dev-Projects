function compute() {
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var interest = (p * y * r) / 100; 
    var amount = parseInt(p) + parseFloat(interest);

    document.getElementById("result").innerText = interest;
    document.getElementById("result2").innerText = amount;
    
    var currYear = new Date().getFullYear();
    var futureYear = currYear + parseInt(y);

    document.getElementById("future_year").innerText = futureYear;

}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

function validate() { 
    var p = document.getElementById("principal").value;

    if (p <= 0 ) { 
        alert("please enter a value above 0");
        document.getElementById("principal").focus();
    }
    else { 
        compute();
    }
}