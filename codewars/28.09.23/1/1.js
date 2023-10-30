function alphabetPosition(text) {
    let regStr = text.toLowerCase().match(/[a-z]/gi)
    if (regStr === null) {
        return ''
    }
    let newStr = regStr.map(a => a.charCodeAt(0) - 96)
    return newStr.join(' ');
}