console.log('Hello');

const gameboard = document.getElementById('gameboard')
const playbtn = document.getElementById('play')
const stopbtn = document.getElementById('stop')

for (let count=1; count <= 100; count ++) {
    const square = document.createElement('div');
    square.setAttribute('id', `square${count}`)
    square.setAttribute('class', `square`)
    gameboard.appendChild(square);
};


let playing = true;
 let score = 0
console.log(score)

const stop = function() {
    score = 100
}

const play = function () {
    console.log('press play')

    const clicked = function(){
        target.style.backgroundColor = 'white'
        score += 1
        document.getElementById('score').innerHTML = `Score: ${score}`
        click = true
    }
    
    const getTarget = function() {
        let targetNum = Math.floor(Math.random() * (99)) + 1;
        let target = document.getElementById(`square${targetNum}`)
        target.style.backgroundColor = 'red'
        target.addEventListener('click', clicked)
        return target
    }
    
    const checkclick = function() {
        if (click === true) {
            target.removeEventListener('click', clicked)
        }
    }  

    while (score < 60) {
        getTarget()
        console.log(getTarget())
        console.log(playing)
        let click = false
        if (score >= 60) {
            break
        }


    }
}
playbtn.addEventListener('click', play)
stopbtn.addEventListener('click', stop)