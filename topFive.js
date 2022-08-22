function appendChildren(selectPlayer) {
    const player = document.getElementById(selectPlayer);
    const playerName = player.innerText;
    const orderdList = document.getElementById('appendPlayers');
    const newItem = document.createElement('li');
    newItem.innerText = playerName;
    orderdList.appendChild(newItem);
    const button = document.getElementById('selectMessi');
    button.disabled = true;
    // console.log(OL.children.length);
}

document.getElementById('selectMessi').addEventListener('click', function () {
    appendChildren('messi');
})
