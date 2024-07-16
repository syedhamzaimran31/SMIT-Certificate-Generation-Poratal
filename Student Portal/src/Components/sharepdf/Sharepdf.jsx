import React, { useState } from 'react';
import Modal from 'react-modal';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, LinkedinIcon, WhatsappIcon } from 'react-share';
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';

// Modal ko root element se attach karna zaroori hai
Modal.setAppElement('#root');

const Sharepdf = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const pdfUrl = 'https://cdn-icons-png.flaticon.com/512/2165/2165004.png';  // Yahan apni PDF file ki URL de

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <Button variant="primary" onClick={openModal}>Share PDF</Button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Share PDF"
        className="Modal"
        overlayClassName="Overlay"
      >
        <Container>
          <Row className="justify-content-center mb-4">
            <Col xs="auto">
              <h2 className="text-center">Share the PDF</h2>
            </Col>
          </Row>
          <Row className="justify-content-center mb-4">
            <Col xs="auto">
              <ButtonGroup>
                <FacebookShareButton url={pdfUrl} quote={"Check out this PDF!"}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={pdfUrl} title={"Check out this PDF!"}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LinkedinShareButton url={pdfUrl} title={"Check out this PDF!"}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <WhatsappShareButton url={pdfUrl} title={"Check out this PDF!"}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </ButtonGroup>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="auto">
              <Button variant="" onClick={closeModal}>Close</Button>
            </Col>
          </Row>
        </Container>
      </Modal>
    </div>
  );
};

export default Sharepdf;
