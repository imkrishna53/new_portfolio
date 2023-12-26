const select = (el, all = false) => {
    el = el.trim()
    console.log(el);
    console.log(all);
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }

  }
  
const removeMobileNav = () => {
    let navbar = select('#navbar')
    if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.add('bi-list')
        navbarToggle.classList.remove('bi-x')
    }
}
export default removeMobileNav;