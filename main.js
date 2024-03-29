let cheese = -1
let axeModifier = 0
let drillModifier = 0
let dynamiteModifier = 0
let dozerModifier = 0
let collectionInterval = 0
let cheeseCountElem = document.querySelector("#cheese-count")
let axeCountElem = document.querySelector("#axe-avail")
let drillCountElem = document.querySelector("#drill-avail")
let dynamiteCountElem = document.querySelector("#dynamite-avail")
let dozerCountElem = document.querySelector("#dozer-avail")
let axeCurrentPriceElem = document.querySelector("#axe-current-price")
let drillCurrentPriceElem = document.querySelector("#drill-current-price")
let dynamiteCurrentPriceElem = document.querySelector("#dynamite-current-price")
let dozerCurrentPriceElem = document.querySelector("#dozer-current-price")

let axeUpgrades = {
    pickaxes: {
        price: 10,
        quantity: 0,
        multiplier: 1
    }
}

let drillUpgrades = {
    drills: {
        price: 20,
        quantity: 0,
        multiplier: 5
    }
}

let dynamiteUpgrades = {
    dynamite: {
        price: 30,
        quantity: 0,
        multiplier: 10
    }
}

let autoUpgrades = {
    dozers: {
        price: 50,
        quantity: 0,
        multiplier: 20
    }
}

function mine() {
    cheese += (1 + axeModifier + drillModifier + dynamiteModifier + dozerModifier)
    updateCheese()
}

function updateCheese() {
    cheeseCountElem.textContent = cheese.toString()
}

function axeUpg() {
    for (let pickaxes in axeUpgrades) {
        if (axeUpgrades.hasOwnProperty(pickaxes)) {
            let axes = axeUpgrades[pickaxes];
            if (cheese < axes.price) {
                return
            } else {
                axes.quantity += 1
                axeCountElem.textContent = axes.quantity.toString()
                cheese -= axes.price
                axeModifier += (axes.multiplier * axes.quantity)
                axes.price *= 2
                axeCurrentPriceElem.textContent = axes.price.toString()
                updateCheese()
            }
        }

    }
}

function drillUpg() {
    for (let drills in drillUpgrades) {
        if (drillUpgrades.hasOwnProperty(drills)) {
            let drill = drillUpgrades[drills];
            if (cheese < drill.price) {
                return
            } else {
                drill.quantity += 1
                drillCountElem.textContent = drill.quantity.toString()
                cheese -= drill.price
                drillModifier += (drill.multiplier * drill.quantity)
                drill.price *= 2
                drillCurrentPriceElem.textContent = drill.price.toString()
                updateCheese()
            }
        }
    }
}

function dynamiteUpg() {
    for (let dynamite in dynamiteUpgrades) {
        if (dynamiteUpgrades.hasOwnProperty(dynamite)) {
            let blast = dynamiteUpgrades[dynamite];
            if (cheese < blast.price) {
                return
            } else {
                blast.quantity += 1
                dynamiteCountElem.textContent = blast.quantity.toString()
                cheese -= blast.price
                dynamiteModifier += (blast.multiplier * blast.quantity)
                blast.price *= 2
                dynamiteCurrentPriceElem.textContent = blast.price.toString()
                updateCheese()
            }
        }
    }
}

function dozerUpg() {
    for (let dozers in autoUpgrades) {
        if (autoUpgrades.hasOwnProperty(dozers)) {
            let dozer = autoUpgrades[dozers];
            if (cheese < dozer.price) {
                return
            } else {
                dozer.quantity += 1
                dozerCountElem.textContent = dozer.quantity.toString()
                cheese -= dozer.price
                dozerModifier += (dozer.multiplier * dozer.quantity)
                dozer.price *= 2
                dozerCurrentPriceElem.textContent = dozer.price.toString()
                updateCheese()
            } return
        }
    }
}

function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

function collectAutoUpgrades() {
    for (let dozers in autoUpgrades) {
        if (autoUpgrades.hasOwnProperty(dozers)) {
            let dozer = autoUpgrades[dozers];
            if (dozer.quantity == 0) {
                return
            } else {
                cheese += (dozer.multiplier * dozer.quantity)
                updateCheese()
            } return
        }
    }
}
mine()
startInterval()