
// Anim.js



// Anim.js


let btnOpen = document.querySelector('.btnOpen')
let aside = document.querySelector('aside')
let btnClose = aside.querySelector('.btnClose')
let _top = aside.querySelector('.top')
let _bottom = aside.querySelector('.bottom')
let _left = aside.querySelector('.left')
let _right = aside.querySelector('.right')
let inner = aside.querySelector('.inner')


btnOpen.addEventListener("click",(e)=>{
    e.preventDefault();
    btnOpen.classList.add("on");
    aside.style.display = "block";
    new Anim(_top, {
        prop: "width",
        value: "100%",
        duration: 500,
        callback: () => {
            new Anim(_right, {
                prop: "height",
                value: "100%",
                duration: 500,
                callback: () => {
                    new Anim(_bottom, {
                        prop: "width",
                        value: "100%",
                        duration: 500,
                        callback:() => {
                            new Anim(_left, {
                                prop: "height",
                                value: "100%",
                                duration: 500,
                                callback: () => {
                                    new Anim(inner, {
                                        prop: "opacity",
                                        value: '1',
                                        duration: 500
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})

btnClose.addEventListener("click",(e) => {
    e.preventDefault();
    new Anim(inner, {
        prop: "opacity",
        value: 0,
        duration: 500,
        callback:() => {
            new Anim(_top, {
                prop: "width",
                value: '0%',
                duration: 500,
            })
            new Anim(_right, {
                prop: "height",
                value: '0%',
                duration: 500,
            })
            new Anim(_bottom, {
                prop: "width",
                value: '0%',
                duration: 500,
            })
            new Anim(_left, {
                prop: "height",
                value: '0%',
                duration: 500,
                callback:() => {
                    aside.style.display= "none";
                    btnOpen.classList.remove("on");
                }
            })
        }
    })
})
