function drop_down(){
    const nav = document.getElementById('navigation');
    if(!nav) return;
    nav.classList.toggle('open');
}

// Close nav when clicking outside (mobile)
document.addEventListener('click', function(e){
    const nav = document.getElementById('navigation');
    if(!nav) return;
    if(nav.classList.contains('open')){
        const toggle = nav.querySelector('.nav-toggle');
        if(toggle && !nav.contains(e.target) && e.target !== toggle){
            nav.classList.remove('open');
        }
    }
});
