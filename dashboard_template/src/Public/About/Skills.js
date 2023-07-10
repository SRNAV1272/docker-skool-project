export default function Skills() {

    return (
        <>
            <h1 className="text-secondary text-start">Skills</h1>
            <div className="row">
                <div className="col-12 p-2">
                    <div className="card p-4 shadow-lg">
                        <div className="card-body">
                            <h6 className="fw-bold text-end">ReactJS</h6>
                            <div className="d-flex justify-content-between align-items-center">
                                <img
                                    src="https://wallpapercave.com/dwp2x/wp2465923.jpg"
                                    style={{ width: '150px', height: '100px' }}
                                    className="rounded"
                                    alt="image1"
                                />&emsp;
                                <div class="progress w-75">
                                    <div class="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Intermediate</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="fw-bold text-end">NodeJS</h6>
                            <div className="d-flex justify-content-between align-items-center">
                                <img
                                    src="https://wallpapercave.com/dwp2x/wp4923978.jpg"
                                    style={{ width: '150px', height: '100px' }}
                                    className="rounded"
                                    alt="image2"
                                />&emsp;
                                <div class="progress w-75">
                                    <div class="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Intermediate</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="fw-bold text-end">Docker</h6>
                            <div className="d-flex justify-content-between align-items-center">
                                <img
                                    src="https://wallpapercave.com/mwp/wp7718117.jpg"
                                    style={{ width: '150px', height: '100px' }}
                                    className="rounded"
                                    alt="image3"
                                />&emsp;
                                <div class="progress w-75">
                                    <div class="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Intermediate</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="fw-bold text-end">Kubernetes</h6>
                            <div className="d-flex justify-content-between align-items-center">
                                <img
                                    src="https://e1.pxfuel.com/desktop-wallpaper/836/321/desktop-wallpaper-kubernetes.jpg"
                                    style={{ width: '150px', height: '100px' }}
                                    className="rounded"
                                    alt="image3"
                                />&emsp;
                                <div class="progress w-75">
                                    <div class="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Beginners</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}