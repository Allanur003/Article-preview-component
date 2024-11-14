const facebook = document.getElementById('facebook')
const twitter = document.getElementById('twitter')
const pinterest=document.getElementById('pinterest')
const shareButton = document.getElementById('change')
const openContainer = document.getElementById('hidden')

//Open the close
shareButton.addEventListener('click', () => {
    openContainer.style.display="flex"
})


//When the touch this button share container hidden
facebook.addEventListener('click', () => {
    openContainer.style.display="none"
})

twitter.addEventListener('click', () => {
    openContainer.style.display="none"
})

pinterest.addEventListener('click', () => {
    openContainer.style.display="none"
})
















shareButton.addEventListener('click', openCont)
function openCont() {
    openContainer.style.display = "flex"
}



