import Savepdf from "../Savepdf/Savepdf"

function Tabel(data) {
    return (
        <>
            <div className="table-responsive rounded-3 mt-4">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Roll No</th>
                            <th scope="col">Course</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.data.batchNo}</td>
                            <td>{data.data.course}</td>
                            <td>
                                <a href={data.data.certificateUrl} target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-success btn-sm m-1">View Certificate</button>
                                </a>
                                <Savepdf pdfURL={data.data.certificateUrl} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Tabel