import './Home.scss'

export default function Home() {


    return (
        <>
            <div className="col-12">
                <div className={window.innerWidth < 768 ? 'centerflipcards' : 'centerflipcards px-5'}>
                    <div className='square-flip w-100'>
                        <div className='square rounded shadow-lg'
                            style={{
                                backgroundColor: "#fff"
                            }}
                        >
                            <div className="square-container">
                                <div className="align-center">
                                    <img
                                        src="https://www.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej-760x400.webp"
                                        className="rounded-circle"
                                        alt="titanicthemes"
                                        width="25%"
                                        height="25%"
                                    />
                                </div>
                                <h2 className="textshadow text-secondary">
                                    <span style={{ fontSize: '10px' }}>Hi, I'm</span> K Sai Rajesh
                                </h2>
                                <h3 className="textshadow text-secondary fw-bold">
                                    <span style={{ fontSize: '10px' }}>a</span>&ensp;
                                    Software Developer
                                </h3>
                                <p className='text-secondary p-3'>
                                    Being a Software Developer, I have gained good knowledge in my domain. I have 1+ year
                                    experience with sublime command on web application. I tend to expand my domain swiftly.
                                    In my professional journey, I have implemented various features in Web applications, these
                                    experiences have increased my efficiency.
                                </p>
                                <p className='text-secondary'>
                                    Skills that I have aquired will be excellent assets for your company.
                                </p>
                            </div>
                        </div>
                        <div className='square2 rounded shadow-lg'
                            style={{
                                backgroundColor: "#fff !important"
                            }}
                        >
                            <div className="square-container2">
                                <h2 className="text-secondary">Navajna Technologies Private Limited</h2>
                                <h3 className="textshadow text-secondary">Hyderabad</h3>
                                <div className="align-center">
                                    <div>
                                        <a href='https://www.instagram.com/srdoomsd/?igshid=MzNlNGNkZWQ4Mg%3D%3D' rel="noreferrer" target='_blank'>
                                            <i class="fa-brands fa-linkedin-in fs-3"></i>
                                        </a>&emsp;

                                        <a href='https://www.instagram.com/srdoomsd`' target='_blank' rel="noreferrer" >
                                            <i class="fa-brands fa-instagram fs-3"></i>
                                        </a>&emsp;
                                        <i class="fa-brands fa-google fs-3"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


    // const [Input, setInput] = useState({
    //     input: '',
    //     err: ''
    // })

    // const string = 'rtsp://admin:Admin123$@192.168.1.249/cam/realmonitor?channel=1&subtype=00&authbasic=YWRtaW46QWRtaW4xMjMh'

    // const rtspVerification = /^rtsp:\/\/[-a-zA-Z0-9@:%._\\+~#?&//=]{2,256}:[-a-zA-Z0-9@:%._\\+~#?&//=]{2,256}/

    // const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';
    // const ipVerification = new RegExp(`@${octet}\\.${octet}\\.${octet}\\.${octet}`);

    // const channelVerification = /\?channel=[-a-zA-Z0-9%._\\+~#?&//=]{2,256}/
    // const subtypeVerification = /\&subtype=[-a-zA-Z0-9@:%._\\+~#?&//=]{2,256}/
    // const authVerification = /\&authbasic=[-a-zA-Z0-9@:%._\\+~#?&//=]{2,256}$/

    // console.log("REGEX", rtspVerification.test(string), ipVerification.test(string), channelVerification.test(string), subtypeVerification.test(string), authVerification.test(string))

    // useEffect(() => {
    //     console.log("REGEX", Input)
    //     if (Input.input.length !== 0) {
    //         if (!rtspVerification.test(Input.input)) setInput(prev => {
    //             return {
    //                 ...prev,
    //                 err: `rtspVerification Failed`
    //             }
    //         })
    //         else if (!ipVerification.test(Input.input)) setInput(prev => {
    //             return {
    //                 ...prev,
    //                 err: `IP Verification Failed`
    //             }
    //         })
    //         else if (!channelVerification.test(Input.input)) setInput(prev => {
    //             return {
    //                 ...prev,
    //                 err: `Channel Verification Failed`
    //             }
    //         })
    //         else if (!subtypeVerification.test(Input.input)) setInput(prev => {
    //             return {
    //                 ...prev,
    //                 err: `Subtype Verification Failed`
    //             }
    //         })
    //         else if (!authVerification.test(Input.input)) setInput(prev => {
    //             return {
    //                 ...prev,
    //                 err: `Auth Basic Verification Failed`
    //             }
    //         })
    //         else setInput(prev => {
    //             return {
    //                 ...prev,
    //                 err: ''
    //             }
    //         })
    //     }
    // }, [Input.input])