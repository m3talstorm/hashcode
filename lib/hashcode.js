

// Used to check objects for own properties
const hasOwnProperty = Object.prototype.hasOwnProperty

// Hashes a string
const hash = (string) => {

    let hash = 0

    string = string.toString()

    for(let i = 0; i < string.length; i++)
    {
        hash = (((hash << 5) - hash) + string.charCodeAt(i)) & 0xFFFFFFFF
    }

    return hash
}

// Deep hashes an object
const object = (obj) => {
    //
    if(typeof obj.getTime == 'function')
    {
        return obj.getTime()
    }

    let result = 0

    for(let property in obj)
    {
        if(hasOwnProperty.call(obj, property))
        {
            result += hash(property + value(obj[property]))
        }
    }

    return result
}

const value = (value) => {

    const type = value == undefined ? undefined : typeof value
    // Does a type check on the passed in value and calls the appropriate hash method
    return MAPPER[type] ? MAPPER[type](value) + hash(type) : 0
}

const MAPPER =
{
    string: hash,
    number: hash,
    boolean: hash,
    object: object
    // functions are excluded because they are not representative of the state of an object
    // types 'undefined' or 'null' will have a hash of 0
}

module.exports = {

    value: value,
}
