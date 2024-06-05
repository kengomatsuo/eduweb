let checkFirstName = false
let checkLastName = false
let checkEmail = false
let checkPhone = false
let checkPassword = false
let checkConfPassword = false

const registerForm = document.getElementById('register-form')
const firstName = document.getElementById('firstname')
const firstNameLabel = document.getElementById('firstnamelb')
const lastName = document.getElementById('lastname')
const lastNameLabel = document.getElementById('lastnamelb')
const email = document.getElementById('email')
const emailLabel = document.getElementById('emaillb')
const phone = document.getElementById('phone')
const phoneLabel = document.getElementById('phonelb')
const password = document.getElementById('password')
const passwordLabel = document.getElementById('passwordlb')
const confPassword = document.getElementById('confpassword')
const confPasswordLabel = document.getElementById('confpasswordlb')
const submitButton = document.getElementById('submitbutton')

window.onload = checkAll()

function checkAll() {
  if (firstName.value.length) firstNameValidation()
  if (lastName.value.length) lastNameValidation()
  if (email.value.length) emailValidation()
  if (phone.value.length) phoneValidation()
  if (password.value.length) passwordValidation()
  if (confPassword.value.length) confPasswordValidation()
  console.log(checkFirstName, checkLastName, checkPhone, checkEmail, checkPassword, checkConfPassword)
  if (submitButton.disabled) {
    return false
  } else {
    return true
  }
}

function validateButton() {
  if (checkFirstName && checkLastName && checkEmail && checkPhone && checkPassword && checkConfPassword) {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true
  }
}

function firstNameValidation() {
  if (!firstName.value.length) {
    firstName.classList.add('wrong-input')
    firstNameLabel.innerHTML = 'First name must be filled'
    checkFirstName = false
  } else {
    firstName.classList.remove('wrong-input')
    firstNameLabel.innerHTML = ''
    checkFirstName = true
  }
  validateButton()
}

function lastNameValidation() {
  if (!lastName.value.length) {
    lastName.classList.add('wrong-input')
    lastNameLabel.innerHTML = 'Last name must be filled'
    checkLastName = false
  } else {
    lastName.classList.remove('wrong-input')
    lastNameLabel.innerHTML = ''
    checkLastName = true
  }
  validateButton()
}

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
    checkEmail = false
  } else {
    email.classList.remove('wrong-input')
    checkEmail = true
  }
  emailLabel.innerHTML = errorMsg
  validateButton()
}

function phoneValidation() {
  let errorMsg = ''
  if (!phone.value.length) {
    errorMsg = 'Phone number must be filled'
  } else if (isNaN(phone.value)) {
    errorMsg = 'Phone number must be number'
  } else if (phone.value.length < 7 || phone.value.length > 15) {
    errorMsg = 'Phone number must be between 7 and 15 numbers long'
  }

  if (errorMsg.length) {
    phone.classList.add('wrong-input')
    checkPhone = false
  } else {
    phone.classList.remove('wrong-input')
    checkPhone = true
  }
  phoneLabel.innerHTML = errorMsg
  validateButton()
}

function passwordValidation() {
  let errorMsg = ''

  if (!password.value.length) {
    errorMsg = 'Password must be filled'
  }
  else if (password.value.length < 8) {
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
    checkPassword = false
  } else {
    password.classList.remove('wrong-input')
    checkPassword = true
  }
  passwordLabel.innerHTML = errorMsg
  if(confPassword.value.length) confPasswordValidation()
  validateButton()
}

function confPasswordValidation() {
  if (!confPassword.value.length && !password.value.length) {
    confPassword.classList.add('wrong-input')
    confPasswordLabel.innerHTML = 'Fill in password first'
  } else if (confPassword.value !== password.value) {
    confPassword.classList.add('wrong-input')
    confPasswordLabel.innerHTML = 'Confirmation password must match password'
    checkConfPassword = false
  } else {
    confPassword.classList.remove('wrong-input')
    confPasswordLabel.innerHTML = ''
    checkConfPassword = true
  }
  validateButton()
}

firstName.addEventListener('input', checkAll)
lastName.addEventListener('input', checkAll)
email.addEventListener('input', checkAll)
phone.addEventListener('input', checkAll)
password.addEventListener('input', checkAll)
confPassword.addEventListener('input', checkAll)

firstName.addEventListener('blur', firstNameValidation)
lastName.addEventListener('blur', lastNameValidation)
email.addEventListener('blur', emailValidation)
phone.addEventListener('blur', phoneValidation)
password.addEventListener('blur', passwordValidation)
confPassword.addEventListener('blur', confPasswordValidation)

registerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (checkAll()) {
    localStorage.setItem('auth', true)
    localStorage.setItem('name', firstName.value + ' ' + lastName.value)
    location.href = '/index.html'
  }
})