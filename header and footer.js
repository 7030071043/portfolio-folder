document.addEventListener('DOMContentLoaded', async () => {
  
    const res = await fetch('navbar.html');
  const html = await res.text();
 
  document.getElementById('navbar').innerHTML = html;
});


document.addEventListener('DOMContentLoaded', async () => {
  
    const res = await fetch('footer.html');
  const html = await res.text();
 
  document.getElementById('footer').innerHTML = html;
});


