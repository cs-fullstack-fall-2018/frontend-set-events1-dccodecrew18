var theButton = document.getElementById("button1");
var total = document.getElementById("theTotal");

theButton.addEventListener("click", sumClick);
var sum = 0;

function sumClick(){
    total.innerHTML +=1;
    sum +=1;
    total.innerHTML = sum;

}

sumClick();

/*

Step 1 isn't working. It looks like it's because your button ID has a space in it.

From Kenn
*/