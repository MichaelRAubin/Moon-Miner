let cheese = -1
//let jeep = 0
let axeModifier = 0
let jeepModifier = 0
let collectionInterval
let cheeseCountElem = document.querySelector("#cheese-count")
let axeCountElem = document.querySelector("#axe-avail")
let jeepCountElem = document.querySelector("#jeep-avail")
let axeCurrentPriceElem = document.querySelector("#axe-current-price")
let jeepCurrentPriceElem = document.querySelector("#jeep-current-price")

let clickUpgrades = {
    pickaxes: {
        price: 20,
        quantity: 0,
        multiplier: 1
    }
};
let automaticUpgrades = {
    jeeps: {
        price: 100,
        quantity: 0,
        multipler: 20
    }
}

function mine() {
    cheese += (1 + axeModifier)
    updateCheese()
}

function updateCheese() {
    cheeseCountElem.textContent = cheese.toString()
}

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

function axeUpg() {
    for (let pickaxes in clickUpgrades) {
        if (clickUpgrades.hasOwnProperty(pickaxes)) {
            let axes = clickUpgrades[pickaxes];
            if (cheese < axes.price) {
                axes.quantity += 0
            } else {
                axes.quantity += 1
                axeCountElem.textContent = axes.quantity.toString()
                cheese -= axes.price
                axeModifier += axes.multiplier * axes.quantity
                updateCheese()
            } return
        }
        //use price modifiers 
    }
}

function jeepUpg() {
    for (let jeeps in automaticUpgrades) {
        if (automaticUpgrades.hasOwnProperty(jeeps)) {
            let jeep = automaticUpgrades[jeeps];
            if (cheese < jeep.price) {
                jeep.quantity += 0
            } else {
                jeep.quantity += 1
                jeepCountElem.textContent = jeep.quantity.toString()
                cheese -= jeep.price
                updateCheese()
                jeepModifier += jeep.multiplier * jeep.quantity
                startInterval()
            }
        }
    }
}

function collectAutoUpgrades() {
    cheese += jeepModifier
    updateCheese()
}

mine()
