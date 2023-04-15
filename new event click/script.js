let path0 = ''
let extension0 = ''
let jumpPage0 = 1
let numberPage0 = 1

const path = (x = prompt(`${path0}`)) => {
    if (x === null) {

    } else {
        path0 = x
        document.getElementById('image').src = `${path0}${numberPage0}${extension0}`
    }
}

const extension = (x = prompt(`Extension ex: (.jpg)`)) => {
    if (x === null) {

    } else {
        extension0 = x
        document.getElementById('image').src = `${path0}${numberPage0}${extension0}`
    }
}

const jumpPage = (x = prompt(`${jumpPage0}`)) => {
    if (x === null) {

    } else {
        jumpPage0 = Number(x)
    }
}

const numberPage = (x = prompt(`Jump to Page ${numberPage0}`)) => {
    if (x === null) {

    } else {
        numberPage0 = Number(x)
        document.getElementById('image').src = `${path0}${numberPage0}${extension0}`
    }
}

const kiri = () => {
    if (numberPage0 >= 2) {
        numberPage0 -= jumpPage0
    } else if (numberPage <= 1) {

    }
    document.getElementById('image').src = `${path0}${numberPage0}${extension0}`
}

const kanan = () => {
    numberPage0 += jumpPage0
    document.getElementById('image').src = `${path0}${numberPage0}${extension0}`
}
