let toggleButton = document.getElementById('toggle')
let userName = document.getElementById('username')

window.onload = () => {
  if (localStorage.getItem('auth') == 'true') {
    toggleButton.innerHTML = 'Log out'
    toggleButton.href = ''
    userName.innerHTML = localStorage.getItem('name')

    toggleButton.addEventListener('click', () => {
      localStorage.setItem('auth', false)
      localStorage.removeItem('name')
    })
  } else {
    toggleButton.innerHTML = 'Sign up'
  }
  toggleButton.style.display = 'block'
}

