let emoji = ["😁", "😁", "😒", "😒", "😍", "😍", "🤣", "🤣", "😘", "😘", "😂", "😂", "🤦‍♂️", "🤦‍♂️", "😎", "😎"];

let shuf_emoji = emoji.sort(() => (Math.random() > 0.5) ? 2 : -1);
let move = 0;

for (let i = 0; i < emoji.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emoji[i];

    box.onclick = function () {
        this.classList.add('boxOpen');
        move++; 
        document.getElementById('move-count').innerText = `Moves: ${move}`;

        setTimeout(function() {
            if (document.querySelectorAll('.boxOpen').length > 1) {

                if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                    if (document.querySelectorAll('.boxMatch').length == emoji.length) {
                        alert("Game Over !")
                        window.location.reload()
                    }
                }
                else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                }
            }
        }, 500);
    };

    document.querySelector('.game').appendChild(box);
}

let moveCountDisplay = document.createElement('div');
moveCountDisplay.id = 'move-count';
moveCountDisplay.innerText = `Moves: ${move}`;
document.querySelector('.container').appendChild(moveCountDisplay);