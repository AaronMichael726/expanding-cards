// bring in all panels into js file // stored in node list
const panels = document.querySelectorAll('.panel')

// console.log(panels[0]) - grabs the first panel notice how this is similar to array
// grab all panels and addeventlistener
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

// remove the active class on other items
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}