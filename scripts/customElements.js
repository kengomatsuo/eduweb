let currentPath = window.location.pathname
currentPath = currentPath.slice(0, currentPath.lastIndexOf('/'))
currentPath = currentPath.slice(currentPath.lastIndexOf('/') + 1)
const checkHome = (currentPath === 'eduweb' || currentPath === '') ? 'id="current"' : 'href="../index.html"'
const checkSubs = (currentPath === 'subscription') ? 'id="current"' : (currentPath === 'eduweb') ? 'href="./subscription/index.html"' : 'href="../subscription/index.html"'
const checkRevi = (currentPath === 'testimony') ? 'id="current"' : (currentPath === 'eduweb') ? 'href="./testimony/index.html"' : 'href="../testimony/index.html"'
const checkLear = (currentPath === 'learning') ? 'id="current"' : (currentPath === 'eduweb') ? 'href="./learning/index.html"' : 'href="../learning/index.html"'
const checkSign = (currentPath === 'register') ? ' hidden"' : (currentPath === 'eduweb') ? '" href="./register/index.html"' : '" href="../register/index.html"'

class customHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="shaded-vertical">
        <a class="lusitana-regular logo"${(currentPath === 'eduweb' || currentPath === '') ? '' : ' href="../index.html"'}">JA</a>
        <nav>
          <a class="inter-regular navigation-button" ${checkHome}>Home</a>
          <a class="inter-regular navigation-button" ${checkSubs}>Products</a>
          <a class="inter-regular navigation-button" ${checkRevi}>Reviews</a>
          <a class="inter-regular navigation-button" ${checkLear}>Learn</a>
          <h3 class="inter-regular" id="username"></h3>
          <a class="inter-regular hidden toggle black-button${checkSign} id="toggle-horizontal"></a>
          <a id="burger-icon" onclick="toggleNav(this)">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </a>
          </nav>
          <div class="shaded-box toggleNavOff" id="vertical-navigation" tabindex="-1" onblur="navBlur(this)">
            <a class="inter-regular navigation-button-vertical" ${checkHome}>Home</a>
            <a class="inter-regular navigation-button-vertical" ${checkSubs}>Products</a>
            <a class="inter-regular navigation-button-vertical" ${checkRevi}>Reviews</a>
            <a class="inter-regular navigation-button-vertical" ${checkLear}>Learn</a>
            <a class="inter-regular hidden toggle${checkSign} id="toggle-vertical"></a>
          </div>
      </header>
    `
  }
}

function toggleNav(element) {
  const navMenu = document.getElementById('vertical-navigation')
  element.classList.toggle('change')
  navMenu.classList.toggle('toggleNavOff')
  navMenu.classList.toggle('toggleNav')
  const burger = document.getElementsByClassName('toggleNav')
  burger[0].focus()
}

function navBlur(element) {
  if (element.matches(':hover')) {
    return
  }
  document.getElementById('burger-icon').classList.toggle('change')
  element.classList.remove('toggleNav')
  element.classList.add('toggleNavOff')
}

class customFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div>
          <span class="lusitana-regular vertical-line logo">JA</span>
          <span class="inter-regular logo-name">JeniusAcademy</span>
        </div>
        <br>
        <div class="footer-hyperlinks">
          <a class="inter-regular" href="">Customer Service</a>
          <a class="inter-regular" href="">Account Management</a>
          <a class="inter-regular" href="">Subscription Status</a>
          <a class="inter-regular" href="">Refund Policy</a>
          <a class="inter-regular" href="">Privacy</a>
        </div>
        <br>
        <span class="inter-regular">© JeniusAcademy 2024</span>
      </footer>
    `
  }
}

customElements.define('custom-header', customHeader)
customElements.define('custom-footer', customFooter)

class customPlayer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/wUQuxUjCH3s?si=gCCyaXBzZs3NQFV7"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen></iframe>
    `
  }
}

customElements.define('main-player', customPlayer)