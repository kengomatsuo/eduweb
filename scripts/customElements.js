console.log(window.location.pathname)
const currentPath = window.location.pathname
const checkHome = (currentPath === '/index.html') ? 'id="current"' : ''
const checkSubs = (currentPath === '/subscription/index.html') ? 'id="current"' : ''
const checkRevi = (currentPath === '/testimony/index.html') ?'id="current"' : ''
const checkLear = (currentPath === '/learning/index.html') ? 'id="current"' : ''
const checkSign = (currentPath === '/register/index.html') ? 'hidden' : ''

class customHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="shaded-vertical">
        <a class="lusitana-regular logo">JA</a>
        <nav>
          <a class="inter-regular navigation-button" ${checkHome} href="/index.html">Home</a>
          <a class="inter-regular navigation-button" ${checkSubs} href="/subscription/index.html">Products</a>
          <a class="inter-regular navigation-button" ${checkRevi} href="/testimony/index.html">Reviews</a>
          <a class="inter-regular navigation-button" ${checkLear} href="/learning/index.html">Learn</a>
          <a class="inter-regular black-button signup ${checkSign}" href="/register/index.html">Sign up</a>
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