export const isValidReqBody = function (value) {
    if (Object.keys(value).length == 0) { return false }
    else return true;
}

export const isValid = function (value) {
    if (typeof (value) === "undefined" || typeof (value) === null) {return false}
    if (typeof (value) === "string" && value.trim().length == 0) {return false} 
    return true 
}

export const isValidString = function (value) {
    if (!/^[A-Za-z ]+$/.test(value)) { return false }
    else return true
}

export const isValidEmail = function (value) {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(value)) { return true }
    else return false
}

export const isValidPhone = function (value) {
    if (/^\d{10}$/.test(value)) { return true }
    else return false
}

export const isValidPassword = function (value) {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(value) == true) { return true }
    else return false
}

export const isValidCountryCode = function (value) {
    if (/^\+(\d{1}\-)?(\d{1,9})$/.test(value) == true) { return true }
    else return false
}

export const isValidId = function (value) {
    if (/^([1-9]\d*|0)$/.test(value) == true) { return true }
    else return false
}







