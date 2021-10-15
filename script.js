// crazy selections

const whiteSvg = document.getElementById('Opaque_Ring')
const btn1 = document.getElementById('Dots1')
const btn2 = document.getElementById('Dots2')
const btn3 = document.getElementById('Dots3')
const btn4 = document.getElementById('Dots4')
const btn5 = document.getElementById('Dots5')
const btn6 = document.getElementById('Dots6')
const btn7 = document.getElementById('Dots7')
const dot1 = document.querySelector('.dotsfill1')
const dot2 = document.querySelector('.dotsfill2')
const dot3 = document.querySelector('.dotsfill3')
const dot4 = document.querySelector('.dotsfill4')
const dot5 = document.querySelector('.dotsfill5')
const dot6 = document.querySelector('.dotsfill6')
const dot7 = document.querySelector('.dotsfill7')
const leftSide = document.querySelector('.left-side-content')
const rightDivs = document.querySelectorAll('.right-div ')
const trigger_actions = "restart none restart none"
let bgColor = ['#5704aa', "#4818c4", '#100f37', "#16253a", '#1963e0', "#05278b", '#0b934b'];
document.documentElement.style.setProperty(`--nexg-bg-left`, `${bgColor[0]}`)

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

const checkbg = (entries) => {
    entries.forEach(entry => {
        const index = entry.target.getAttribute('data-index');

        if (entry.isIntersecting) {
            document.documentElement.style.setProperty(`--nexg-bg-left`, `${bgColor[index]}`)

        }
    });
}
const checkLeftSide = (entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('data-id')
        if (entry.isIntersecting) {
            document.querySelector(`[data-div=${id}]`).scrollIntoView({ behavior: 'smooth' })
            document.querySelector(`[data-title=${id}]`).scrollIntoView({ behavior: 'smooth' })
            document.querySelector(`[data-desc=${id}]`).scrollIntoView({ behavior: 'smooth' })
            document.querySelector(`[data-btn=${id}]`).scrollIntoView({behavior:'smooth'})
            // document.querySelector(`[data-award=${id}]`).scrollIntoView({ behavior: 'smooth' })
        }
    })
}
let observer = new IntersectionObserver(checkbg, options)
let observerLeft = new IntersectionObserver(checkLeftSide, option1)

rightDivs.forEach(div => {
    observer.observe(div)
    observerLeft.observe(div)
})

// animations

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
        toggleActions: "restart none restart none",

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

gsap.from('.headings-nexg', {
    scrollTrigger: {
        trigger: '.image-container-nex',
        toggleActions: trigger_actions
    },
    duration: 2,
    y:'-120px',
    ease: 'sine'
})
gsap.to('.headings.blockchain', {
    scrollTrigger: {
        trigger: '.image-container-blockchain',
        toggleActions: trigger_actions
    },
    duration: 1.5,
    y: '22px',
    ease: 'back'
})

gsap.from('.headings.nasa', {
    scrollTrigger: {
        trigger: '.image-container-nasa',
        toggleActions: "restart"
    },
    duration: 2,
    y: '-100px',
    ease: 'sine'
})


const scrollAnimation = () => {
    const controller = new ScrollMagic.Controller()
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
    document.querySelector('[data-div = nexg]').scrollIntoView({ behavior: "smooth" })
})
btn2.addEventListener('click', () => {
    document.querySelector('[data-id = blockchain]').scrollIntoView({ behavior: "smooth" })
    document.querySelector('[data-div = blockchain]').scrollIntoView({ behavior: "smooth" })
})
btn3.addEventListener('click', () => {
    document.querySelector('[data-id = nasa]').scrollIntoView({ behavior: "smooth" })
    document.querySelector('[data-div = nasa]').scrollIntoView({ behavior: "smooth" })
})
btn4.addEventListener('click', () => {
    document.querySelector('[data-id = domino]').scrollIntoView({ behavior: "smooth" })
    document.querySelector('[data-div = domino]').scrollIntoView({ behavior: "smooth" })
})
btn5.addEventListener('click', () => {
    document.querySelector('[data-id = social]').scrollIntoView({ behavior: "smooth" })
    document.querySelector('[data-div = social]').scrollIntoView({ behavior: "smooth" })
})
btn6.addEventListener('click', () => {
    document.querySelector('[data-id = furniture]').scrollIntoView({ behavior: "smooth" })
    document.querySelector('[data-div = furniture]').scrollIntoView({ behavior: "smooth" })
})
btn7.addEventListener('click', () => {
    document.querySelector('[data-id = asia]').scrollIntoView({ behavior: "smooth" })
    document.querySelector('[data-div = asia]').scrollIntoView({ behavior: "smooth" })
})