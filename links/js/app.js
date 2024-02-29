document.addEventListener('DOMContentLoaded', (event) =>{

  const hamburguerButton = document.querySelector('.hamburger')
  const optionsMenu = document.querySelector('.optionsMenu')

  // optionsMenu starting with 0 height(mobile only)
  optionsMenu.style.height = 0

  hamburguerButton.addEventListener('click', (e) =>{
    // preveting page reload
    e.preventDefault()

    // starting hamburguer icon animation
    hamburguerButton.classList.toggle('is-active')

    // if hamburguer is active, increase the optionsMenu height, if it's not, set to 0 and handle classes
    if(hamburguerButton.classList.contains('is-active')){
      optionsMenu.style.height = 500 + 'px'
      optionsMenu.classList.toggle('mt-4')
      optionsMenu.classList.remove('translate-y-4')
    } else {
      optionsMenu.style.height = 0
      optionsMenu.classList.remove('mt-4')
      optionsMenu.classList.add('translate-y-4')
    }

    const toggleButton = document.querySelectorAll('.toggleButton')

    toggleButton.forEach((button) => {
      const optionsList = button.nextElementSibling;
     
      button.addEventListener('click', (e) =>{
        e.preventDefault()
        button.classList.toggle('active')
  
        if(button.classList.contains('active')){
          optionsMenu.style.height = 500 + 'px'
          optionsList.style.height = optionsList.scrollHeight + 'px'
        } else{
          optionsList.style.height = 0
        }
      })
    })
    

  })

  const toggleButtonDesktop = document.querySelectorAll('.toggleButtonDesktop')

  toggleButtonDesktop.forEach((button) => {
    const optionsList = button.nextElementSibling;
   
    button.addEventListener('click', (e) =>{
      e.preventDefault()
      button.classList.toggle('active')

      if(button.classList.contains('active')){
        optionsList.style.height = optionsList.scrollHeight + 'px'
      } else{
        optionsList.style.height = 0
      }
    })
  })  

  
  const themeButtonsDiv = document.querySelectorAll('.toggleThemeDiv')

  window.toggleTheme = function (id) {
    switch(id) {
      case 'dark':
        document.documentElement.classList.add('dark');
        if(document.documentElement.classList.contains('dark')){
          themeButtonsDiv.forEach(div => { div.classList.replace('light', 'dark')})
        }
        break;
      
      case 'light':
        document.documentElement.classList.remove('dark');
        if(!document.documentElement.classList.contains('dark')){
          themeButtonsDiv.forEach(div => { div.classList.replace('dark', 'light')})
        }
        break;
    }
  };

})