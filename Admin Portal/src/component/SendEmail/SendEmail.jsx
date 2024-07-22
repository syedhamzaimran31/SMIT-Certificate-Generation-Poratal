import axios from 'axios';
import React, { memo, useState } from 'react';
import AlertModal from '../Modals/AlertModal';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

function SendEmail() {
    const [toggleModal, setToggleModal] = useState(false);

    const handleClose = () => setToggleModal(false);

    const sendEmail = async () => {
        handleClose();

        toastr.info("Sending Emails...")

        try {
            const response = await axios.post("http://localhost:8003/send-Email");
            const successStatus = response.status;

            if (successStatus === 200) {
                toastr.success("Emails sent successfully!");
            } else {
                toastr.warning(`Failed to send emails. Status: ${successStatus}`);
            }
        } catch (error) {
            if (error.response) {
                const status = error.response.status;
                if (status === 404) {
                    toastr.warning("Emails have already been sent.");
                } else {
                    toastr.warning(`Failed to send emails. Status: ${status}`);
                }
            } else if (error.request) {
                toastr.error("Network error. Unable to communicate with the server.");
            } else {
                toastr.error(`Error sending emails: ${error.message}`);
            }
        }

    }
    return (
        <>
            <button className="btn custom_green custom_btn" onClick={() => setToggleModal(true)}>Send Email</button>
            <AlertModal show={toggleModal} handleClose={handleClose} handleDelete={sendEmail} title="Confirm Email Sending" body="Are you sure you want to send emails?" />
        </>
    )
}

export default memo(SendEmail);