import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service : 'Gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
        user: 'suffiyanahmed804092@gmail.com',
        pass: 'khqi ruwa yrmy uadu'
    }
})

const sendEmail = async (data) => {
    try {
        const response = await transporter.sendMail({
            from: 'suffiyanahmed804092@gmail.com',
            ...data
        })

        return response
    } catch (error) {
        throw error
    }
}

export default sendEmail