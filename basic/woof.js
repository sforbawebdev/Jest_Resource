function woof(str) {
    if(typeof str !== 'string') {
        return;
    }
    return str + " WOOF";
}

module.exports = woof;