let toggleButton = document.getElementById('signup')
let userName = document.getElementById('username')

window.onload = () => {
  if (localStorage.getItem('auth') == 'true') {
    toggleButton.innerHTML = 'Log out'
    toggleButton.id = 'logout'
    userName.innerHTML = localStorage.getItem('name')

    toggleButton.addEventListener('click', () => {
      localStorage.setItem('auth', false)
      localStorage.removeItem('name')
    })
  }
}

