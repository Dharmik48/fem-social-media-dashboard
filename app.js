const themeToggle = document.getElementById('theme-toggle')
const body = document.querySelector('body')

themeToggle.addEventListener('change', (e) => {
  if(e.target.checked) {
    body.classList.remove('dark-theme')
    body.classList.add('light-theme')
  } else {
    body.classList.remove('light-theme')
    body.classList.add('dark-theme')
  }
})