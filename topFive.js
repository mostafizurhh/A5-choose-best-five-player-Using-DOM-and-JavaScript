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

/*********************************** Bugget Part ********************************/

/*-----------------*** Function For Converting InputField Value ***----------------*/
function inputFieldValueConverter(fieldId) {
    const inputField = document.getElementById(fieldId);
    const fieldStringValue = inputField.value;
    const fieldNumberValue = parseFloat(fieldStringValue);
    inputField.value = fieldNumberValue;
    // if (isNaN(inputField)) {
    //     inputField.value = '';
    //     return alert('Please enter only number')
    // }
    // else if (inputField < 0) {
    //     inputField.value = '';
    //     return alert('Please enter only valid positive number')
    // }
    return fieldNumberValue;
}

/*---------------------*** Function For Players Cost ***-------------------------*/

function playersCost() {
    const orderdList = document.getElementById('appendPlayers');
    const orderedListLength = orderdList.children.length;
    const perPlayerCost = inputFieldValueConverter('perPlayerPrice');
    const playersExpense = document.getElementById('playersCost');
    const playersExpenseStringValue = playersExpense.value;
    const playersExpenseNumberValue = parseFloat(playersExpenseStringValue);
    const playersTotalExpense = orderedListLength * perPlayerCost;
    playersExpense.value = playersTotalExpense;
    return playersTotalExpense;
}

/*-----------------------*** Calculate Players Cost ***---------------------------*/

document.getElementById('calculate').addEventListener('click', function () {
    playersCost();
})

/*-----------------------*** Calculate Total Cost ***----------------------------*/

document.getElementById('calculateTotal').addEventListener('click', function () {
    const playersTotalExpense = playersCost();
    const expenseForManager = inputFieldValueConverter('manager');
    const expenseForCoach = inputFieldValueConverter('coach');
    const totalCost = playersTotalExpense + expenseForManager + expenseForCoach;

    const finalCost = document.getElementById('totalCost');
    finalCost.value = totalCost;
})