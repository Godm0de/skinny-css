document.getElementsByClassName("theme-button")[0].addEventListener('change', ()=>{
    const checkbox = document.getElementsByClassName("theme-button")[0];

    if(checkbox.checked){
        document.documentElement.setAttribute('theme', 'dark');
    }else{
        document.documentElement.setAttribute('theme', 'light');
    }
})