import { cleanupTempFolder } from "../services/certificate.service.js"
import { fetchNewAndUpdateCertificates,  getAllIssuedCertificates, processCertificates, serachData } from "../services/sendemail.services.js"

const sendEmail = async (req, res) => {
    try {
        const response = await fetchNewAndUpdateCertificates()
        if (!response || response.length === 0) return res.status(404).json({ status: 404, message: "data not found" })
        const responseData = await processCertificates(response)
        if (!responseData) return res.status(500).json({ status: 500, message: "Error sending email " })
        await cleanupTempFolder()
        return res.status(200).json({ status: 200, message: "success send all emails", responseData: responseData })
    } catch (error) {
        return res.status(500).json({ status: 500, message: "Error sending email ", errormessage: error.message })
    }
}

const getCertificates = async (req, res) => {
    try {
        const response = await getAllIssuedCertificates()
        if (!response || response.length === 0) return res.status(404).json({ status: 404, message: "data not found" })
        return res.status(200).json({ status: 200, message: "success", data: response })
    } catch (error) {
        return res.status(500).json({ status: 500, message: "internal error", errormessage: error.message })
    }
}

const searchIussedCertificatyes = async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) {
            return res.status(400).json({ error: 'Search query is required.' });
        }
        const results = await serachData(query)
        if (!results || results.length === 0) return res.status(404).json({ status: 404, message: "data not found" })
        return res.status(200).json({ status: 200, message: "success", data: results })
    } catch (error) {
        return res.status(500).json({ status: 500, message: "internal server error", errormessage: error.message })
    }
}


export {
    sendEmail,
    getCertificates,
    searchIussedCertificatyes,
}