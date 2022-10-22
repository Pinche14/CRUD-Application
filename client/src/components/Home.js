import React from "react";

const Home = () => {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="add_btn mt-2 mb-2">
                    <button className="btn btn-primary">Add data</button>
                </div>
                <table class="table">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">id</th>
                            <th scope="col">Username</th>
                            <th scope="col">email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Shubham</td>
                            <td>shubham213@gmail.com</td>
                            <td>WebDeveloper</td>
                            <td>9272723924</td>
                            <td className="d-flex justify-content-between">
                                <button className="btn btn-success">Removed</button>
                                <button className="btn btn-primary">update</button>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                 </table>
            </div>
        </div>
    )
}

export default Home