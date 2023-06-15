import { NavLink } from "react-router-dom";

export default function Portfolio() {

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1 className="fs-2 fw-bold text-decoration-underline text-secondary" >Latest Work</h1>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 p-2">
                        <div className="card border border-primary">
                            <div className="card-header">
                                <h1 className="card-title fs-3 fw-bold">Template</h1>
                            </div>
                            <NavLink to='/dashboard' className="fs-6 fw-bold text-decoration-underline" >Dashboard</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}