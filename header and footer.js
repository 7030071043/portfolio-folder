window.addEventListener('DOMContentLoaded',()=>{

    fetch('footer main.html')
.then(res =>res.test())
.then(data =>document.getElementById('footer').innerHTML = data)

});