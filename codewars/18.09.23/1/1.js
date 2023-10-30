function printerError(s) {
    let errors = s.match(/[n-z]/gi)

    if (!errors) {
        return `0/${s.length}`
    }
    return `${errors.length}/${s.length}`
}