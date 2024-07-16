import db from '../modules/index.js'
const { certificate: Certificate, adminpassword: AdminPassword } = db


const findByCnic = async (cnic) => {
    try {
        const user = await Certificate.findOne({ cnic: cnic })
        return user
    } catch (error) {
        throw error
    }
}
const findByEmail = async (email) => {
    try {
        const user = await AdminPassword.findOne({ email: email })
        return user
    } catch (error) {
        throw error
    }
}
const createStudentsData = async (payload) => {
    try {
        const userModule = new Certificate({ ...payload })
        const newUsersData = await userModule.save()
        return newUsersData
    } catch (error) {
        throw error
    }
}

const saveAdminPassword = async (payload, email, otp) => {
    try {
        const adminPass = new AdminPassword({ password: payload, email: email, otp: otp })
        const saveAdminPass = await adminPass.save()
        console.log(payload, email)
        return saveAdminPass
    } catch (error) {
        throw error
    }
}

const getAdminData = async () => {
    try {
        const response = await AdminPassword.find({}).exec()
        return response
    } catch (error) {
        throw error
    }
}

const findById = async (id) => {
    try {
        const user = await AdminPassword.findOne({ _id: id }).exec()
        return user
    } catch (error) {
        throw error
    }
}

const saveToken = async (payload) => {
    try {
        const newToken = new Token({ ...payload })
        const token = await newToken.save()
        return token
    } catch (error) {
        throw error
    }
}

const deleteTokensByUID = async (uid) => {
    try {
        const response = await Token.deleteOne({ user: uid })
        return response
    } catch (error) {
        throw error
    }
}
const UpdateUserByEmail = async (email) => {
    try {
        const response = await User.updateOne(
            { email: email },
            { isActive: true } 
        )
        return response
    } catch (error) {
        throw error
    }
}
export {
    findByEmail,
    createStudentsData,
    saveAdminPassword,
    findById,
    findByCnic,
    getAdminData,
    saveToken,
    deleteTokensByUID,
    UpdateUserByEmail
}