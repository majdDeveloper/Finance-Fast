// deClear variables
let sectionsNavBar = document.querySelector(".navbar .sections");
let barIcon = document.querySelector(".navbar .bars");
let colorThem = document.querySelector(':root');
let questions = document.querySelectorAll(".questions .container .ques .card .card-body");
let btnScrollTop = document.querySelector(".btn-scroll-top i");
let imgContinuation = document.querySelectorAll(".continuation .container .images img");
let coverSection = document.querySelectorAll("section .container .cover-section");
let imgContainer = document.querySelectorAll("section .container.container-img");
let btnDark = document.querySelector(".toggle-switch .checkbox");

window.addEventListener("scroll", () => {
    
    // show btnScrollTop if scroll > 700
    if (window.scrollY > 700) {
        btnScrollTop.classList.add("show");
    } else {
        btnScrollTop.classList.remove("show");
    }
    // observerSection animation if scroll
    function addClassOnIntersection(target,className) {
        
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.isIntersecting ? entry.target.classList.add(className) : "";
            })
        },{
            rootMargin: "-50px",
        })        
        target.forEach(img => {
            observer.observe(img)
        })
    }

    // callback function addClassOnIntersection
    addClassOnIntersection(imgContinuation,"show-img-animation");
    addClassOnIntersection(coverSection,"show-cover-animation");
    addClassOnIntersection(imgContainer,"show-container-animation");
})

// if click btnScrollTop
btnScrollTop.addEventListener("click",() => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
})

// btn show bar
window.addEventListener("click", (t) => {
    if(t.target == barIcon) {
        sectionsNavBar.classList.toggle("show");
    } else if(t.target != sectionsNavBar) {
        sectionsNavBar.classList.remove("show");
    }
})

// change color them
btnDark.addEventListener("change",() => {
    if(btnDark.checked) {
        colorThem.style.setProperty('--txt-color','#f1f1f1');
        colorThem.style.setProperty('--bg-color','rgba(24, 26, 27)');
        colorThem.style.setProperty('--bg-color-opacity','rgba(24, 26, 27, 0.1)');
        colorThem.style.setProperty('--bg-color-shadow-org-0','rgba(35, 38, 40, 0)');
        colorThem.style.setProperty('--bg-color-shadow-org-1','rgba(35, 38, 40)');
        colorThem.style.setProperty('--bg-color-shadow-blog-0','rgba(24, 26, 27, 0)');
        colorThem.style.setProperty('--bg-color-shadow-blog-1','rgba(24, 26, 27, 0.9)');
        colorThem.style.setProperty('--bg-color-card-blog','rgba(255, 255, 255, 0.1)');
    } else {
        colorThem.style.setProperty('--txt-color','#3A3A3A');
        colorThem.style.setProperty('--bg-color','#F9F9F9');
        colorThem.style.setProperty('--bg-color-opacity','#E5DBFB');
        colorThem.style.setProperty('--bg-color-shadow-org-0','rgba(229,219,251,0');
        colorThem.style.setProperty('--bg-color-shadow-org-1','rgba(229,219,251,1');
        colorThem.style.setProperty('--bg-color-shadow-blog-0','rgba(255,255,255,0)');
        colorThem.style.setProperty('--bg-color-shadow-blog-1','rgba(255,255,255,0.9)');
        colorThem.style.setProperty('--bg-color-card-blog','rgba(234, 231, 255, 0.7');
        }
})

// input with country number
let phoneInput = document.querySelector("#phone");
window.intlTelInput(phoneInput,{});

// questions section open and close question
questions.forEach((ques) => {
    ques.addEventListener("click", () => {
        if(ques.parentElement.classList.contains("show")) {
            ques.parentElement.classList.remove("show");
        } else {            
            questions.forEach((q) => {
                q.parentElement.classList.remove("show");
            })
            ques.parentElement.classList.add("show");
        }
    })
})