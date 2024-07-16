import axios from 'axios'
import React, { memo } from 'react'

function SendEmail() {
    const sendEmail = async () => {

        alert("Sending Emails....")
        try {
            const response = await axios.post("http://localhost:8003/send-Email")
            const successStatus = await response.status
            if (successStatus.status === 200) {
                alert("Sending Email is Done!");
            } else {
                alert("Failed to generate certificates. Status: " + successStatus);
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    alert("Emails alreadysends. Please try again");
                } else {
                    alert("Emails alreadysends. Failed to sending emails.");
                }
            } else if (error.request) {
                alert("Network error. Failed to communicate with server.");
            } else {
                alert("Error sending emails: " + error.message);
            }
        }
    }
    return (
        <>
            <button className="btn btn-primary" onClick={sendEmail}>Send Email</button>
        </>
    )
}

export default memo(SendEmail)