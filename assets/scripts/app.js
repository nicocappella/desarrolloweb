let close = document.querySelectorAll('.close');

close.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault();

        let content = document.querySelector('.content');

        content.classList.remove('animate__animated');
        content.classList.remove('animate__fadeInRight');

        content.classList.add('animate__animated');
        content.classList.add('animate__fadeOutUp');

        setTimeout(function(){
            location.href = '/';
        }, 1000);
        
        
    })

});