
function square(s) {
    if ( (typeof s) == "string"){
        return s.length * s.length
    } else {
        return -1
    }
}

module.exports = square;