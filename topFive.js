/****************************** Append Children Function***************************/
function appendChildren(selectPlayer) {
    const player = document.getElementById(selectPlayer);
    const playerName = player.innerText;
    const orderdList = document.getElementById('appendPlayers');
    const newItem = document.createElement('li');
    newItem.innerText = playerName;
    /*************** warning condition for more than 5 players ******************/
    if (orderdList.children.length >= 5) {
        return alert('You can not select more than 5 players')
    };
    orderdList.appendChild(newItem);
}

/*************************** Button Disabler Function*****************************/
function buttonDisabler(buttonId) {
    const button = document.getElementById(buttonId);
    button.disabled = true;
}

/************************ Player Selector Event Handler***************************/
document.getElementById('selectMessi').addEventListener('click', function () {
    appendChildren('messi');
    buttonDisabler('selectMessi');
})
document.getElementById('selectNeymar').addEventListener('click', function () {
    appendChildren('neymar');
    buttonDisabler('selectNeymar');
})
document.getElementById('selectMbappe').addEventListener('click', function () {
    appendChildren('mbappe');
    buttonDisabler('selectMbappe');
})
document.getElementById('selectVictor').addEventListener('click', function () {
    appendChildren('victor');
    buttonDisabler('selectVictor');
})
document.getElementById('selectRamos').addEventListener('click', function () {
    appendChildren('ramos');
    buttonDisabler('selectRamos');
})
document.getElementById('selectRenato').addEventListener('click', function () {
    appendChildren('renato');
    buttonDisabler('selectRenato');
})
