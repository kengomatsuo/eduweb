const firstName = document.getElementById('firstname')
const firstNameLabel = document.getElementById('firstnamelb')

function firstNameValidation() {
  if (!firstName.value.length) {
    firstName.classList.add('wrong-input')
    firstNameLabel.innerHTML = 'First name must be filled'
  } else {
    firstName.classList.remove('wrong-input')
    firstNameLabel.innerHTML = ''
  }
}

const lastName = document.getElementById('lastname')
const lastNameLabel = document.getElementById('lastnamelb')

function lastNameValidation() {
  if (!lastName.value.length) {
    lastName.classList.add('wrong-input')
    lastNameLabel.innerHTML = 'Last name must be filled'
  } else {
    lastName.classList.remove('wrong-input')
    lastNameLabel.innerHTML = ''
  }
}

const email = document.getElementById('email')
const emailLabel = document.getElementById('emaillb')

function emailValidation() {
  let errorMsg = ''

  if (!email.value.length) {
    errorMsg = 'Email must be filled'
  } else {
    let atIndex = email.value.indexOf('@')
    let dotIndex = email.value.indexOf('.')

    if (atIndex === -1) {
      errorMsg = 'Email must not contain \'@\''
    } else if (dotIndex === -1) {
      errorMsg = 'Email must not contain \'.\''
    } else {
      let atAmount = 0
      let i

      for (i = 0; i < email.value.length; i++) {
        if (email.value[i] === '@') {
          atAmount++
          continue
        }
      }

      if (atAmount > 1
        || atIndex === 0
        || dotIndex === 0
        || email.value[email.value.length - 1] === '@'
        || email.value[email.value.length - 1] === '.'
        || email.value[atIndex + 1] === '.'
        || i < email.value.length - 1) {
        errorMsg = 'Email is not in the correct format'
      }
    }
  }
  if (errorMsg.length) {
    email.classList.add('wrong-input')
    emailLabel.innerHTML = errorMsg
  } else {
    email.classList.remove('wrong-input')
    emailLabel.innerHTML = ''
  }
}

const password = document.getElementById('password')
const passwordLabel = document.getElementById('passwordlb')

function passwordValidation() {
  let errorMsg = ''

  if (!password.value.length) {
    errorMsg = 'Password must be filled'
  }
  else if (password.value.length < 8){
    errorMsg = 'Password must not be at least 8 characters long'
  }
  else {
    let lower = false
    let upper = false
    let number = false
    let special = false

    for (let i = 0; i < password.value.length; i++) {
      if (password.value[i] >= 'a' && password.value[i] <= 'z') {
        lower = true
      } else if (password.value[i] >= 'A' && password.value[i] <= 'Z') {
        upper = true
      } else if (password.value[i] >= '0' && password.value[i] <= '9') {
        number = true
      } else {
        special = true
      }
    }

    if (!lower) {
      errorMsg = 'Password must contain la ower-case letter'
    } else if (!upper) {
      errorMsg = 'Password must contain an upper-case letter'
    } else if (!number) {
      errorMsg = 'Password must contain a number'
    } else if (!special) {
      errorMsg = 'Password must contain a special character'
    }
  }
  if (errorMsg.length) {
    password.classList.add('wrong-input')
    passwordLabel.innerHTML = errorMsg
  } else {
    password.classList.remove('wrong-input')
    passwordLabel.innerHTML = ''
  }
}

confPassword = document.getElementById('confpassword')
confPasswordLabel = document.getElementById('confpasswordlb')

function confPasswordValidation() {
  if (confPassword.value !== password.value) {
    confPassword.classList.add('wrong-input')
    confPasswordLabel.innerHTML = 'Confirmation password must match password'
  } else {
    confPassword.classList.remove('wrong-input')
    confPasswordLabel.innerHTML = ''
  }
}

firstName.addEventListener('blur', firstNameValidation)
lastName.addEventListener('blur', lastNameValidation)
email.addEventListener('blur', emailValidation)
password.addEventListener('blur', passwordValidation)
confPassword.addEventListener('blur', confPasswordValidation)