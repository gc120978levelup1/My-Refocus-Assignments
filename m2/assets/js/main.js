document.onreadystatechange = () => {
    if (document.readyState === 'complete'){
        setTimeout(()=>{
            window.scrollTo(0,0);
        },1000);
        const els = document.querySelectorAll("*");
        for (const el of els){
            //console.log(el.tagName);
            if (   !(el.tagName === 'HTML'  )
                && !(el.tagName === 'HEAD'  )
                && !(el.tagName === 'META'  )
                && !(el.tagName === 'TITLE' )
                && !(el.tagName === 'LINK'  )
                && !(el.tagName === 'SCRIPT')
                && !(el.tagName === 'BODY'  )
                && !(el.tagName === 'SECTION'  )
            ){
                el.classList.add('hide-all');
                const observer = new IntersectionObserver((entries, observer) => {
                    // Loop over the entries
                    entries.forEach(entry => {
                        // If the element is visible
                        if (entry.isIntersecting) {
                            // Add the animation class
                            entry.target.classList.remove('hide-all');
                            entry.target.classList.add('animate-start');
                        }
                    });
                });
                observer.observe(el);
            }
        }
    }
}