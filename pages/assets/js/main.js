//----------------loading--------------------------------
const loaderContainer = document.querySelector('.loading');
let inicio = new Date;

window.addEventListener('load', () => {
    
    let fin = new Date;
    let segundos = (fin-inicio);
    
    if(segundos < 2000){
        setTimeout(() => {
            loaderContainer.style.display = 'none';}, 2000);}else{loaderContainer.style.display = 'none';
        }console.log(segundos)
    
});
//--------------------------------------------------------