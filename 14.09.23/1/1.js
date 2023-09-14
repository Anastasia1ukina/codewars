function maskify(cc) {
    return cc.replace(/.(?=.{4})/g, "#");
}

function maskify(cc) {
    if (cc.length < 4) {
        return cc;
    } else {
        let str = cc.slice(0, cc.length - 4)
        return str.replace(/[^#]/g, '#') + cc.slice(cc.length - 4, cc.length + 1)
    }
}