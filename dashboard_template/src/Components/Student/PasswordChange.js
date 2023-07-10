import { useNavigate } from "react-router-dom"

export default function PasswordChange() {

    const navigate = useNavigate()

    function Submit(e) {
        e.preventDefault()
    }

    return (
        <>
            <div className="col-12 col-lg-6 d-none d-lg-flex">
                <img
                    src="https://preschool.dreamguystech.com/template/assets/img/login.png"
                    style={{ backgroundColor: '#18AEFA', borderRadius: '20px' }}
                    alt="7"
                    width={"100%"}
                    height={"75%"}
                />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-start py-5">
                <h4>Change Password</h4>
                <div className="py-5">
                    <form onSubmit={Submit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Current Password</label>
                            <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" class="btn border-primary border-2 fw-bold" disabled>Submit</button>&emsp;
                        <button class="btn border-secondary border-2 fw-bold" onClick={() => navigate(-1)}>Back</button>&emsp;
                    </form>
                </div>
            </div>
        </>
    )
}