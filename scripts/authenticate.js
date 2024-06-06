let toggleButton = document.getElementsByClassName('toggle')
let userName = document.getElementById('username')

window.onload = () => {
  if (localStorage.getItem('auth') == 'true') {
    toggleButton[0].innerHTML = 'Log out'
    toggleButton[1].innerHTML = 'Log out'
    toggleButton.href = ''
    userName.innerHTML = localStorage.getItem('name')

    toggleButton.addEventListener('click', () => {
      localStorage.setItem('auth', false)
      localStorage.removeItem('name')
    })
  } else {
    toggleButton[0].innerHTML = 'Sign up'
    toggleButton[1].innerHTML = 'Sign up'
  }
  toggleButton[0].classList.remove('hidden')
  toggleButton[1].classList.remove('hidden')
}

