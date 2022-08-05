var mount = document.getElementsByClassName('mount');
var sum = 0;
for(let item of mount){
    sum += parseInt(item.textContent.substring(1));
}
document.getElementsByClassName('sum')[0].textContent = '$' + sum;
