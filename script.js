
/*let i, j, a = [7], k, l; //3,5,7,1,10,2,0 ,5,3,7,1,10,0 = 7,3,5,1,10,0=same,10,3,5,1,7,0

for (i = 0; i < 7; i++) {
    a[i] = prompt("Enter a number: ");
}
for (j = 0; j < 7; j++) {
    for (k = j + 1; k < a.length; k++) {
        //1,2,3,4
        if (a[j] < a[k]) {
            //3<5 true,5<7 true,7<1 false,7<10 true,10<2 false,10<0false
            l = a[j]; //l=3,5,7
            a[j] = a[k]; //a[j]=5,7,10
            a[k] = l; // a[k]=3,5,7
        }
        // firstly:10 3 5 1 7 0
    }

}
for (l = 0; l < 7; l++) { console.log(a[l]); }


function suii() {
    document.prolis.getElementById("thalaa") = document.prolis.getElementById("");
}

let m = prompt("enter a number: ");
let s = 1, n = 0;
while (n != 0) {
    s = m % 10;
    n = n * 10 + s;
    m = m / 10;
}
console.log(n);
*/

function suii() {
    let hope = document.getElementById("aud");

    let ans = document.getElementById("seesh").value;

    if (ans == 7 || ans == "Thala" || ans == "thala" || ans == "seven" || ans == "sui") {

        hope.play();
        document.body.getElementsByClassName("img")[0].style.visibility = "visible";


    }
}
