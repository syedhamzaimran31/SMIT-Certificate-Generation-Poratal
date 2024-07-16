import bcrypt from 'bcrypt';


const createHash = async (plainText) => {
    // console.log(plainText)
    const hash = await bcrypt.hash(plainText, 10)
    return hash
}

const compareHash = async (plainText, hashedText) => {
    const isCompared = await bcrypt.compare(plainText, hashedText)
    return isCompared
}

export {
    createHash,
    compareHash
}

