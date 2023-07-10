export default function Experience() {

    return (
        <>
            <h1 className="text-secondary text-start">Experience</h1>
            <div className="col-12 mt-1">
                <div className="card border-0 shadow-lg">
                    <h1 className="card-title text-secondary text-start px-5 py-2">Pixofix</h1>
                    <div className="card-body">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-md-items-center px-4 py-2">
                            <h4 className="text-secondary fw-bold" style={{ fontSize: '18px' }}>
                                <span className="text-decoration-underline">Module :</span> <span className="text-primary text-decoration-underline">ReactJS</span> <br />&emsp;
                                <span style={{ fontSize: '12px' }}>
                                    Repository Manager : <br />&emsp;&emsp;
                                    <span className="text-primary">Image Annotations : KonvaJS</span>
                                </span><br />&emsp;
                                <span style={{ fontSize: '12px' }}>File Upload & Download :</span><br />&emsp;&emsp;
                                <span className="text-primary" style={{ fontSize: '12px' }}>AWS Lambda Function</span><br />&emsp;&emsp;
                                <span className="text-primary" style={{ fontSize: '12px' }}>Speed & Time Estimation function</span>
                            </h4>
                            <h4 className="text-secondary fw-bold" style={{ fontSize: '18px' }}>
                                <span className="text-decoration-underline">
                                    Duration :
                                </span><br />&emsp;
                                <span className="text-primary fw-bold" style={{ fontSize: '12px' }}>Nov,2022 : Feb,2023</span><br /><br />
                                <span className="text-decoration-underline">
                                    Company :
                                </span><br />&emsp;
                                <span className="text-primary fw-bold" style={{ fontSize: '15px' }}>Navajna Technologies</span>
                            </h4>
                        </div>
                        <div className="px-4 py-2 border-top border-2">
                            <h4 className="text-secondary fw-bold text-decoration-underline" style={{ fontSize: '18px' }}>
                                Description :
                            </h4>
                            <ul className="fw-bold">
                                <li className="text-primary" style={{ fontSize: '12px' }}>
                                    Dynamic annotation feature has been developed for the image using react-konva-js and konva-js.
                                    In this module images are annotated and annoation's position are captured and persisted in different
                                    devices irrespective of magnified or not.
                                </li>
                                <li className="text-primary" style={{ fontSize: '12px' }}>
                                    An aws lambda function is developed for uploading and downloading files and deployed using serverless cli
                                    into aws environment.
                                </li>
                                <li className="text-primary" style={{ fontSize: '12px' }}>
                                    A function is written for estimation of speed and time for uploading or downloading of a file.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-2">
                <div className="card border-0 shadow-lg">
                    <h1 className="card-title text-secondary text-start px-5 py-2">Crowd-Analytics</h1>
                    <div className="card-body">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-md-items-center px-4 py-2">
                            <h4 className="text-secondary fw-bold" style={{ fontSize: '18px' }}>
                                <span className="text-decoration-underline">Module :</span> <span className="text-primary text-decoration-underline">NodeJS</span> <br />&emsp;
                                <span style={{ fontSize: '12px' }}>
                                    Camera Streaming : <br />&emsp;&emsp;
                                    <span className="text-primary">rtsp camera feed : ffmpeg</span>
                                </span><br />&emsp;
                            </h4>
                            <h4 className="text-secondary fw-bold" style={{ fontSize: '18px' }}>
                                <span className="text-decoration-underline">
                                    Duration :
                                </span><br />&emsp;
                                <span className="text-primary fw-bold" style={{ fontSize: '12px' }}>29 March,2023 : 31 March,2023</span><br /><br />
                                <span className="text-decoration-underline">
                                    Company :
                                </span><br />&emsp;
                                <span className="text-primary fw-bold" style={{ fontSize: '15px' }}>Navajna Technologies</span>
                            </h4>
                        </div>
                        <div className="px-4 py-2 border-top border-2">
                            <h4 className="text-secondary fw-bold text-decoration-underline" style={{ fontSize: '18px' }}>
                                Description :
                            </h4>
                            <ul className="fw-bold">
                                <li className="text-primary" style={{ fontSize: '12px' }}>
                                    This was a POC for the Demo in which NodeJS is used as a backend server to capture the video ts file and 
                                    split the images .
                                </li>
                                <li className="text-primary" style={{ fontSize: '12px' }}>
                                    The Split images are then fed to a python server for the analysis of the images and predicting the number 
                                    of people present in the video.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}