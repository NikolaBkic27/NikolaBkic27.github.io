
// let niz = [2,3,5,6,7,1];
// let remove = 5;
// console.log("Niz");
// console.log(niz);
// let index = niz.indexOf(remove);
// console.log("Index za uklanjanje");
// console.log(index);
// if(index>-1){
//     niz.splice(index, 1);
//     console.log("Novi niz");
//     console.log(niz);
// }

function removeFromCart(id){
    let niz = localStorage.getItem('productIdArray');
    let index = niz.indexOf(id);
    if(index>-1){
        niz.splice(index, 1);
    }
    localStorage.setItem('productIdArray', niz);
}

document.querySelector("#btnRemoveSort").addEventListener('click', removeSort);
function removeSort(){
    localStorage.removeItem('vrednostSortiranja');
}