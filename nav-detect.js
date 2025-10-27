// detect if Font Awesome loaded by checking for a rendered pseudo-element
(function(){
    function faLoaded(){
        // create a temporary element with the fa class
        var i = document.createElement('i');
        i.className = 'fa-solid fa-bars';
        i.style.display = 'none';
        document.body.appendChild(i);
        var hasFont = false;
        try{
            var cs = window.getComputedStyle(i, null);
            var fontFamily = cs.getPropertyValue('font-family') || '';
            if(fontFamily.toLowerCase().indexOf('fontawesome') !== -1 || fontFamily.toLowerCase().indexOf('fa-') !== -1){
                hasFont = true;
            }
        }catch(e){}
        document.body.removeChild(i);
        return hasFont;
    }

    document.addEventListener('DOMContentLoaded', function(){
        var toggle = document.querySelector('.nav-toggle');
        if(!toggle) return;
        if(!faLoaded()){
            toggle.classList.add('no-fa');
        }
    });
})();
