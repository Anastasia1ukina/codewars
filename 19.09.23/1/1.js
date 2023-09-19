function validatePIN(pin) {
    if (pin === "") {
        return false
    }
    let pinDigit = pin.match(/[0-9]/g)
    return (pinDigit.length === 6 && pin.length === 6) || (pinDigit.length === 4 && pin.length === 4)
}