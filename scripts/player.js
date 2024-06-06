document.getElementById('play-button').addEventListener('click', () => {
  document.getElementById('hideonplay').style.display = 'none'
  mainSection = document.getElementById('learn-main')
  mainSection.appendChild(document.createElement('main-player'))
  mainSection.style.minHeight = 0
})