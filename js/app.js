
//show active navbar
const sections = document.querySelectorAll('section');
const activeNav = document.querySelector('.activenav');
const gradients = [
    "rgb(9, 7, 83)",
    "rgb(41, 103, 161)",
    "rgb(11, 129, 138)"
];
const Options ={threshold: 1};
let observer = new IntersectionObserver(navCheck, Option);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if(entry.isIntersecting){
            activeNav.style.setProperty("left", `${directions.left}px`);
            activeNav.style.setProperty("top", `${directions.top}px`);
            activeNav.style.setProperty("width", `${directions.width}px`);
            activeNav.style.setProperty("height", `${directions.height}px`);
            activeNav.style.background = gradients[gradientIndex];
        }else{
            activeNav.style.background = ("none");
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});

// show active menu when scrolling
const activeSection = () =>{
    const activeClass = document.querySelector(".your-active-class");
    const homeSection = document.querySelector("#home");
    const aboutSection = document.querySelector("#about");
    const servicesSection = document.querySelector("#services");
    const signupSection = document.querySelector("#sign-up");
    let scrollpos = window.scrollY;

    //adds "active-section"
    if(window.innerWidth > 200 && scrollpos < 650){
        homeSection.classList.add("your-active-class");
        aboutSection.classList.remove("your-active-class");
        return
    }else if (window.innerWidth > 200 && scrollpos < 1400){
        aboutSection.classList.add("your-active-class");
        homeSection.classList.remove("your-active-class");
        servicesSection.classList.remove("your-active-class");
        return
    }else if (window.innerWidth > 200 && scrollpos < 2345){
        servicesSection.classList.add("your-active-class");
        aboutSection.classList.remove("your-active-class");
        signupSection.classList.remove("your-active-class")
        return
    }else{
        signupSection.classList.add("your-active-class")
        servicesSection.classList.remove("your-active-class");
    }
}
window.addEventListener('scroll', activeSection);
window.addEventListener('click', activeSection);

//function Section sign up
const labels = document.querySelectorAll('.form-control label')


labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map ((letter, idx) => `<Span style="transition-delay:${idx * 50}ms">${letter}</Span>`)
    .join('')
})