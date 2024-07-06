// HOME_WORK 1 (PART 1)
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp =/^[a-zA-Z0-9._%+-]+@gmail\.com$/
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'ok'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'Not ok'
        gmailResult.style.color = 'red'
    }
}

// HOME_WORK 1 (PART 2)

const animatedBlock = document.getElementById('animated_block')

let currentPosition = 0
let currentPosition_2 = 0

const maxWidthParentBlock = 449 //449
const minWidthParentBlock = 0

function moveBlock() {
    // animatedBlock.style.left = currentPosition + 'px'
    // animatedBlock.style.top = currentPosition_2 + 'px'

    if (currentPosition <= maxWidthParentBlock && currentPosition_2 === 0) {
        currentPosition++
        animatedBlock.style.left = `${currentPosition}px`
        // requestAnimationFrame(moveBlock)
    }
    else if(currentPosition >= maxWidthParentBlock && currentPosition_2 === maxWidthParentBlock){
        currentPosition_2++
        animatedBlock.style.top = `${currentPosition_2}px`
        // requestAnimationFrame(moveBlock)
    }
    requestAnimationFrame(moveBlock)
}
moveBlock()