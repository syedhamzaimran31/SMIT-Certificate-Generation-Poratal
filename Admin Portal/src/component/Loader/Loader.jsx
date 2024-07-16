import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;