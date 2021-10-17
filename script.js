//selections
const whiteSvg = document.getElementById('Opaque_Ring')
const btn1 = document.getElementById('Dots1')
const btn2 = document.getElementById('Dots2')
const btn3 = document.getElementById('Dots3')
const btn4 = document.getElementById('Dots4')
const btn5 = document.getElementById('Dots5')
const btn6 = document.getElementById('Dots6')
const btn7 = document.getElementById('Dots7')
const navDots = document.querySelectorAll('.nav-btn')
const leftSide = document.querySelector('.left-side-content')
const rightDivs = document.querySelectorAll('.right-div ')
const mobileContent = document.querySelectorAll('.content')
const title = document.querySelector('.title')
const headingCenter = document.querySelector('.heading-center')
const headingTop = document.querySelector('.heading-top')
const description = document.querySelector('.desc')
const headingBottom = document.querySelector('.heading-bottom')
const additionalBtn = document.querySelector('.button')
const award = document.querySelector('.award')
const trigger_actions = "restart none restart none";
let bgColor = ['#5704aa', "#4818c4", '#100f37', "#16253a", '#1963e0', "#05278b", '#0b934b'];
let scrollColor = ['#cbcbcd', "#19005c", '#151345', "#0e1319", '#31dfe6', '#d2cfca', "#0fcd69"];
const additionalButton = ['View Case Study', 'Coming Soon', 'Coming Soon', 'View Case Study', 'View Case Study', 'View Case Study ','Coming Soon']
const additionalDesc = ['We are the best web development company in the world', 'We are the best web development company in the world', 'We are the best web development company in the world', 'We are the best web development company in the world', 'We are the best web development company in the world', 'Best since 2017 We offer wide range of web development and app development', 'We are the best web development company in the world']
const headingsCenter = ['25M + Downloads', 'Blockchain','', 'UX Strategy', 'Text Headline', 'Text Headline', 'East Asia']
const additionalTitle = ['ABC 123', 'ABC 234', 'ABC 345', 'ABC 567', 'ABC 678', 'ABC 789', 'ABC 22471'];
const headingsTop = ['', 'The Next Big', 'Powered by advance', 'Redefining', 'Text Headline', 'Developing ERP Solution for', 'Biggest Classifieds']
const headingsBottom = ['on appstore & google playstore','Revolution', 'algorithms', 'and UI design', 'Text Headline', 'in furniture industry', 'Countries']
document.documentElement.style.setProperty(`--nexg-bg-left`, `${bgColor[0]}`)

// swiper 
const swiper = new Swiper('.swiper', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    speed: 100,
    spaceBetween:0,
});

// nav scroll btn carousel
navDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const id = e.target.dataset.nav
        document.querySelector(`[data-mobile=${id}]`).scrollIntoView({ behavior: 'smooth' })
    })
})

//  draw svg on scroll 

const svgLength = whiteSvg.getTotalLength()
whiteSvg.style.strokeDasharray = svgLength
whiteSvg.style.strokeDashoffset = svgLength

window.addEventListener('scroll', () => {
    let scrolled = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    let draw = svgLength * scrolled
    whiteSvg.style.strokeDashoffset = svgLength - draw;
})
// intersection observer for bg color change

let options = {
    threshold: 0.9
}
let option1 = {
    threshold:0.8
}
let option2 = {
    threshold: 0.4
}
let option3 = {
    threshold: 1
}
let option4 = {
    threshold:0.1
}
const checkbg = (entries) => {
    entries.forEach(entry => {
        const index = entry.target.getAttribute('data-index');
        if (entry.isIntersecting) {
            document.documentElement.style.setProperty(`--nexg-bg-left`, `${bgColor[index]}`)
            document.documentElement.style.setProperty(`--scroll-bg-color`, `${scrollColor[index]}`)

        }
    });
}
const checkLeftSide = (entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('data-id')
        const index = entry.target.getAttribute('data-index')

        if (entry.isIntersecting) {
            if (index === '2') {
                headingCenter.innerHTML = `<img class='nasa-logo' src="./Assets/nasa-mobile-app.png" alt="nasa-logo">`
            } else {
                headingCenter.innerText = headingsCenter[index]
            }
            headingBottom.innerText = headingsBottom[index]
            headingTop.innerText = headingsTop[index]
            description.innerText = additionalDesc[index]
            additionalBtn.innerText = additionalButton[index]
            if (index === '0') {
                award.innerHTML = `
                <img width='190' class="award-img" src="./Assets/world-communication-awards-for-best-digital-experience.png" alt="app">
                `
            } else if (index === '6') {
                award.innerHTML = `
                <img width='190' src="./Assets/mobile-app-of-the-year-by-entrepreneur.png" alt="app">
                `
            } else {
                award.innerHTML = `
                    <div class="award-dummy"></div>
                `
            }
            document.querySelector(`[data-desc=${id}]`).scrollIntoView({ behavior: 'smooth' })
            document.querySelector(`[data-btn=${id}]`).scrollIntoView({ behavior: 'smooth' })
            
        }
    })
}
const changeData = (entries) => {
    entries.forEach(entry => {
        const index = entry.target.getAttribute('data-index')
        const id = entry.target.getAttribute('data-id')
        if (entry.intersectionRatio >= 0) {
            if (id === 'nexg') {
                title.style.animation = `textAnim 2s ease`
                description.style.animation = `textAnim 2s ease`
                additionalBtn.style.animation = `textAnim 2s ease`
                headingCenter.style.animation = `textAnim 2s ease`
                headingBottom.style.animation = `textAnim 2s ease`
                headingTop.style.animation = `textAnim 2s ease`
            } else if (id === 'blockchain') {
                title.style.animation = `textAnim1 2s ease`
                description.style.animation = `textAnim1 2s ease`
                additionalBtn.style.animation = `textAnim1 2s ease`
                headingCenter.style.animation = `textAnim1 2s ease`
                 headingBottom.style.animation = `textAnim1 2s ease`
                headingTop.style.animation = `textAnim1 2s ease`
            } else if (id === 'nasa') {
                title.style.animation = `textAnim2 2s ease`
                description.style.animation = `textAnim2 2s ease`
                additionalBtn.style.animation = `textAnim2 2s ease`
                headingCenter.style.animation = `textAnim2 2s ease`
                 headingBottom.style.animation = `textAnim2 2s ease`
                headingTop.style.animation = `textAnim2 2s ease`
            }
            else if (id === 'domino') {
                title.style.animation = `textAnim3 2s ease`
                description.style.animation = `textAnim3 2s ease`
                additionalBtn.style.animation = `textAnim3 2s ease`
                headingCenter.style.animation = `textAnim3 2s ease`
                 headingBottom.style.animation = `textAnim3 2s ease`
                headingTop.style.animation = `textAnim3 2s ease`
            }
            else if (id === 'social') {
                title.style.animation = `textAnim4 2s ease`
                description.style.animation = `textAnim4 2s ease`
                additionalBtn.style.animation = `textAnim4 2s ease`
                headingCenter.style.animation = `textAnim4 2s ease`
                headingBottom.style.animation = `textAnim4 2s ease`
                headingTop.style.animation = `textAnim4 2s ease`
            }
            else if (id === 'furniture') {
                title.style.animation = `textAnim5 2s ease`
                description.style.animation = `textAnim5 2s ease`
                additionalBtn.style.animation = `textAnim5 2s ease`
                headingCenter.style.animation = `textAnim5 2s ease`
                 headingBottom.style.animation = `textAnim5 2s ease`
                headingTop.style.animation = `textAnim5 2s ease`
            }
            else if (id === 'asia') {
                title.style.animation = `textAnim6 2s ease`
                description.style.animation = `textAnim6 2s ease`
                additionalBtn.style.animation = `textAnim6 2s ease`
                headingCenter.style.animation = `textAnim6 2s ease`
                headingBottom.style.animation = `textAnim6 2s ease`
                headingTop.style.animation = `textAnim6 2s ease`
            } else {
                title.style.animation = 'none'
                description.style.animation = 'none'
                headingCenter.style.animation = 'none'
                additionalBtn.style.animation = 'none'
                headingBottom.style.animation = 'none'
                headingTop.style.animation = 'none'
            }
        } else {
            title.style.animation = 'none'
            description.style.animation = 'none'
            headingCenter.style.animation = 'none'
            additionalBtn.style.animation = 'none'
            headingBottom.style.animation = 'none'
            headingTop.style.animation = 'none'
        }
        if (entry.isIntersecting) {
            title.innerText = additionalTitle[index]
        }
    })
}

const checkRightSide = (entries) => {
    entries.forEach(entry => {
        let id = entry.target.getAttribute('data-id')
        if (entry.intersectionRatio > 0) {                
            document.querySelector(`[data-id=${id}]`).scrollIntoView({behavior:'smooth'})
        }
    })
}


let observer = new IntersectionObserver(checkbg, options)
let observerLeft = new IntersectionObserver(checkLeftSide, option1)
let observerChange = new IntersectionObserver(changeData, option3)
let observerRight = new IntersectionObserver(checkRightSide, option4)


rightDivs.forEach(div => {
    observer.observe(div)
    observerLeft.observe(div)
    observerChange.observe(div)
    observerRight.observe(div)
})

// animations

// pinning right side



gsap.from('.nexg-1', {
    scrollTrigger: {
        trigger: '.image-container-nex',
        toggleActions: "restart none restart none",
    },
    duration: 1.5,
    y: '50%',
    ease: 'back'
})
gsap.from('.nexg-2', {
    scrollTrigger: {
        trigger: '.image-container-nex',
        toggleActions: "restart none restart none"
    },
    duration: 2,
    y: "103%",
    ease: 'expo'
})
gsap.from('.block-1', {
    scrollTrigger: {
        trigger: '.image-container-block',
        toggleActions: "restart restart restart none"
    },
    duration: 1.5,
    y: "180%",
    ease: 'sine'

})
gsap.from('.block-2', {
    scrollTrigger: {
        trigger: '.image-container-block',
        toggleActions: "restart restart restart none"
    },
    duration: 1.5,
    y: "-180%",
    ease: 'sine'
})
gsap.from('.nasa-1', {
    scrollTrigger: {
        trigger: '.image-container-nasa',
        toggleActions: "restart none restart none"
    },
    duration: 1.5,
    y: "180%",
    ease: 'sine'

})
gsap.from('.nasa-2', {
    scrollTrigger: {
        trigger: '.image-container-nasa',
        toggleActions: "restart none restart none"
    },
    duration: 1.5,
    y: "-180%",
    ease: 'sine'

})
gsap.from('.pizza-1', {
    scrollTrigger: {
        trigger: '.image-container-pizza',
        toggleActions: trigger_actions
    },
    duration: 1.5,
    y: '-300px',
    x: '-200px',
    ease: 'sine'
})
gsap.from('.pizza-2', {
    scrollTrigger: {
        trigger: '.image-container-pizza',
        toggleActions: trigger_actions
    },
    duration: 1.5,
    y: '130%',
    ease: 'sine'
})
gsap.from('.pizza-3', {
    scrollTrigger: {
        trigger: '.image-container-pizza',
        toggleActions: trigger_actions
    },
    duration: 2,
    y: '-100%',
    ease: 'back'
})
gsap.from('.pizza-4', {
    scrollTrigger: {
        trigger: '.image-container-pizza',
        toggleActions: trigger_actions
    },
    duration: 1.5,
    x: '150px',
    ease: 'sine'
})
gsap.from('.pizza-5', {
    scrollTrigger: {
        trigger: '.image-container-pizza',
        toggleActions: trigger_actions
    },
    duration: 1.5,
    x: '200px',
    y: '-260px',
    ease: 'sine'
})
gsap.from('.pizza-6', {
    scrollTrigger: {
        trigger: '.image-container-pizza',
        toggleActions: trigger_actions
    },
    duration: 1.5,
    y: '300px',
    x: '100px',
    ease: 'expo'
})
gsap.from('.social-1', {
    scrollTrigger: {
        trigger: '.image-container-social',
        toggleActions: trigger_actions
    },
    duration: 1.5,
    y: '-150px',
    ease: 'sine'
})
gsap.from('.social-2', {
    scrollTrigger: {
        trigger: '.image-container-social',
        toggleActions: trigger_actions
    },
    duration: 2,
    y: '-450px',
    ease: 'expo'
})
gsap.from('.social-3', {
    scrollTrigger: {
        trigger: '.image-container-social',
        toggleActions: trigger_actions
    },
    duration: 1.7,
    x: '300px',
    ease: 'sine'
})
gsap.from('.social-4', {
    scrollTrigger: {
        trigger: '.image-container-social',
        toggleActions: trigger_actions
    },
    duration: 1.5,
    y: '350px',
    ease: 'sine'
})
gsap.from('.social-5', {
    scrollTrigger: {
        trigger: '.image-container-social',
        toggleActions: trigger_actions
    },
    duration: 1.5,
    y: '350px',
    ease: 'sine'
})
gsap.from('.furniture-1', {
    scrollTrigger: {
        trigger: '.image-container-furniture',
        toggleActions: trigger_actions
    },
    duration: 2,
    y: '1000px',
    ease: 'sine'
})
gsap.from('.asia-1', {
    scrollTrigger: {
        trigger: '.image-container-asia',
        toggleActions: 'restart none none none'
    },
    duration: 1.5,
    y: '400px',
    ease: 'sine'
})
gsap.from('.asia-2', {
    scrollTrigger: {
        trigger: '.image-container-asia',
        toggleActions: 'restart none none none'
    },
    duration: 1.5,
    y: '400px',
    ease: 'power1'
})


// text animations 
let headCenter = gsap.utils.toArray('.heading-center')
const divs = gsap.utils.toArray('.right-div')
    gsap.from(headCenter[0], {
        scrollTrigger: {
            trigger: '.right-div',
            toggleActions:'restart none none none'
        },
        duration: 2,
        y: '50px',
        ease: 'sine'
    })


// additional container animations 
let awards = gsap.utils.toArray('.award')
awards.forEach(award => {
    gsap.from(award, {
        scrollTrigger: {
            triggerElement: '.right-div',
            toggleActions: trigger_actions
        },
        duration: 2,
        ease: 'power1',
        y:'50px'
    })

})


const scrollAnimation = () => {
    let controller = new ScrollMagic.Controller()
    new ScrollMagic.Scene({
        duration: '600%',
        triggerElement: '.right-side-content',
        triggerHook: 0
    })
        .setPin('.left-side-content')
        .addTo(controller)
}

scrollAnimation();

// button click svg progress and to the section
btn1.addEventListener('click', () => {
    document.querySelector('[data-id = nexg]').scrollIntoView({ behavior: "smooth" })
})
btn2.addEventListener('click', () => {
    document.querySelector('[data-id = blockchain]').scrollIntoView({ behavior: "smooth" })
})
btn3.addEventListener('click', () => {
    document.querySelector('[data-id = nasa]').scrollIntoView({ behavior: "smooth" })
})
btn4.addEventListener('click', () => {
    document.querySelector('[data-id = domino]').scrollIntoView({ behavior: "smooth" })
})
btn5.addEventListener('click', () => {
    document.querySelector('[data-id = social]').scrollIntoView({ behavior: "smooth" })
})
btn6.addEventListener('click', () => {
    document.querySelector('[data-id = furniture]').scrollIntoView({ behavior: "smooth" })
})
btn7.addEventListener('click', () => {
    document.querySelector('[data-id = asia]').scrollIntoView({ behavior: "smooth" })
})

