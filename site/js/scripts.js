var transition = ()=>{
    document.documentElement.classList.add("transition");

    window.setTimeout(()=>{
        document.documentElement.classList.remove("transition");
    }, 1000);
}



document.getElementsByClassName("theme-button")[0].addEventListener('change', ()=>{
    const checkbox = document.getElementsByClassName("theme-button")[0];

    if(checkbox.checked){
        transition();
        document.documentElement.setAttribute('theme', 'dark');
    }else{
        transition();
        document.documentElement.setAttribute('theme', 'light');
    }
})

