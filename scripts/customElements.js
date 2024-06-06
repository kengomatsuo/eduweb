console.log(window.location.pathname)
let currentPath = window.location.pathname
currentPath = currentPath.slice(0, currentPath.lastIndexOf('/'))
currentPath = currentPath.slice(currentPath.lastIndexOf('/') + 1)
console.log(currentPath);
const checkHome = (currentPath === 'eduweb') ? 'id="current"' : 'href="../index.html"'
const checkSubs = (currentPath === 'subscription') ? 'id="current"' : (currentPath === 'eduweb') ? 'href="./subscription/index.html"' : 'href="../subscription/index.html"'
const checkRevi = (currentPath === 'testimony') ? 'id="current"' : (currentPath === 'eduweb') ? 'href="./testimony/index.html"' : 'href="../testimony/index.html"'
const checkLear = (currentPath === 'learning') ? 'id="current"' : (currentPath === 'eduweb') ? 'href="./learning/index.html"' : 'href="../learning/index.html"'
const checkSign = (currentPath === 'register') ? ' hidden"' : (currentPath === 'eduweb') ? '" href="./register/index.html"' : '" href="../register/index.html"'

class customHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="shaded-vertical">
        <a class="lusitana-regular logo">JA</a>
        <nav>
          <a class="inter-regular navigation-button" ${checkHome}>Home</a>
          <a class="inter-regular navigation-button" ${checkSubs}>Products</a>
          <a class="inter-regular navigation-button" ${checkRevi}>Reviews</a>
          <a class="inter-regular navigation-button" ${checkLear}>Learn</a>
          <h3 class="inter-regular" id="username"></h3>
          <a class="inter-regular black-button${checkSign} id="toggle"></a>
        </nav>
      </header>
    `
  }
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
      <iframe src="https://www.youtube.com/embed/FgKE9U4Tyd8?autoplay=1"
        frameborder="0"
        allow="autoplay"
        referrerpolicy="strict-origin-when-cross-origin">
      </iframe>
    `
  }
}

customElements.define('main-player', customPlayer)