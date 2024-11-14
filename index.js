
function generator() {
    var x= Math.floor((Math.random()*5)+1);
    console.log(x);
    document.getElementById('divImage').innerHTML=`
        <img src="img/char${x}.png" style="width:500px;" >
    `;
}