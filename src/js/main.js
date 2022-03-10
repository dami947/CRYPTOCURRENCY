const navBtn = document.querySelector('.nav-bars');
const navMobile = document.querySelector('.nav-mobile');
const navAllLink = document.querySelectorAll('.nav-link');
const footerYear = document.querySelector('.footer-year');
const servicesMenuAllLink = document.querySelectorAll('.btn-menu');
const sectionServicesAll = document.querySelectorAll('.box-right');
const sectionBitcoin = document.querySelector('.box-right-bitcoin');
const sectionLitecoin = document.querySelector('.box-right-litecoin');
const sectionMonero = document.querySelector('.box-right-monero');
const sectionExchange = document.querySelector('.box-right-exchange');
const sectionUnion = document.querySelector('.box-right-union');
const sectionDigital = document.querySelector('.box-right-digital');
const sectionCash = document.querySelector('.box-right-cash');
const accordion = document.querySelector('.accordion');
const accordionBtns = document.querySelectorAll('.accordion-btn');





const handleNav = () => {
    document.body.classList.toggle('sticky-body')
    navMobile.classList.toggle('nav-mobile-active')
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();


window.onload = function () {

    const pagesLink = document.querySelector('.dropbtn')
    const dropdownMenu = document.getElementById('myDropdown')

    const handleDropdownMenu = () => {
        dropdownMenu.classList.toggle('show');
    }

    pagesLink.addEventListener('click', handleDropdownMenu);
}

servicesMenuAllLink.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.classList.contains('bitcoin')) {

            servicesMenuAllLink.forEach(item => {
                item.classList.remove('active')
            })

            sectionServicesAll.forEach(item => {
                item.classList.remove('show')
            })

            sectionBitcoin.classList.add('show')
            e.target.classList.add('active')

        } else if (e.target.classList.contains('litecoin')) {

            servicesMenuAllLink.forEach(item => {
                item.classList.remove('active')
            })

            sectionServicesAll.forEach(item => {
                item.classList.remove('show')
            })

            sectionLitecoin.classList.add('show')
            e.target.classList.add('active')
        } else if (e.target.classList.contains('monero')) {

            servicesMenuAllLink.forEach(item => {
                item.classList.remove('active')
            })

            sectionServicesAll.forEach(item => {
                item.classList.remove('show')
            })

            sectionMonero.classList.add('show')
            e.target.classList.add('active')
        } else if (e.target.classList.contains('exchange')) {

            servicesMenuAllLink.forEach(item => {
                item.classList.remove('active')
            })

            sectionServicesAll.forEach(item => {
                item.classList.remove('show')
            })

            sectionExchange.classList.add('show')
            e.target.classList.add('active')
        } else if (e.target.classList.contains('union')) {

            servicesMenuAllLink.forEach(item => {
                item.classList.remove('active')
            })

            sectionServicesAll.forEach(item => {
                item.classList.remove('show')
            })

            sectionUnion.classList.add('show')
            e.target.classList.add('active')
        } else if (e.target.classList.contains('digital')) {

            servicesMenuAllLink.forEach(item => {
                item.classList.remove('active')
            })

            sectionServicesAll.forEach(item => {
                item.classList.remove('show')
            })

            sectionDigital.classList.add('show')
            e.target.classList.add('active')
        } else if (e.target.classList.contains('cash')) {

            servicesMenuAllLink.forEach(item => {
                item.classList.remove('active')
            })

            sectionServicesAll.forEach(item => {
                item.classList.remove('show')
            })

            sectionCash.classList.add('show')
            e.target.classList.add('active')
        }
    })
})

function openAccordionitems() {

    if (this.nextElementSibling.classList.contains('active-accordion')) {
        this.nextElementSibling.classList.remove('active-accordion');
        accordionBtns.forEach(item => item.classList.remove('active-icon'));
    } else {
        closeAccordionItem();
        this.nextElementSibling.classList.toggle('active-accordion');
        this.classList.toggle('active-icon');

    }
}

const closeAccordionItem = () => {
    const allActiveItems = document.querySelectorAll('.accordion-info');
    allActiveItems.forEach(item => item.classList.remove('active-accordion'));
    accordionBtns.forEach(item => item.classList.remove('active-icon'));
}

const clickOutsideAccordion = e => {
    if (
        e.target.classList.contains('accordion-btn') ||
        e.target.classList.contains('accordion-info')
    ) {
        return
    }

    closeAccordionItem();

}

navBtn.addEventListener('click', handleNav);
accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionitems));
window.addEventListener('click', clickOutsideAccordion);