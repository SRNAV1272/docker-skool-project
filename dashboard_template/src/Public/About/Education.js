import './about.css'

export default function Education() {

    return (
        <>
            <h1 className="text-secondary text-start">Education</h1>
            <div className="row">
                <div className="col-12 col-lg-6 p-2">
                    <div className="card p-4 shadow-lg" style={{ height: '24rem' }}>
                        <p style={{ fontSize: '18px' }} className="fw-bold text-center">Nirmal Higher Secondary School</p>
                        <div className="card-body d-flex flex-colunm flex-lg-row justify-content-between">
                            <div className="">
                                <p style={{ fontSize: '14px' }} className="text-danger fw-bold">2014-15</p>
                                <p style={{ fontSize: '18px' }} className="fw-bold">10</p>
                            </div>
                            <div className="">
                                <p style={{ fontSize: '14px' }} className="text-danger fw-bold">2016-17</p>
                                <p style={{ fontSize: '18px' }} className="fw-bold">12</p>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGwKxvZWZN-8lnSs40q-6XpF4CRGkV1OU8VFsMenMDYY38VuNHTU5vYDvktUq1Vq_QC6NFXVeZQ0&usqp=CAU&ec=48665698"
                                style={{ width: '100%', height: '150px' }}
                                className="rounded"
                                alt='imag4F'
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 p-2">
                    <div className="card p-4 shadow-lg" style={{ height: '24rem' }}>
                        <p style={{ fontSize: '18px' }} className="fw-bold">SSTC SSGI, Bhilai</p>
                        <div className="card-body">
                            <div className="">
                                <p style={{ fontSize: '14px' }} className="text-danger fw-bold">2017-21</p>
                                <p style={{ fontSize: '16px' }} className="fw-bold">B.TECH, Computer Science Enginnering</p>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <img
                                src="https://sstc.ac.in/img2/bg/bg5.jpg"
                                style={{ width: '100%', height: '150px' }}
                                className="rounded"
                                alt='image5'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}