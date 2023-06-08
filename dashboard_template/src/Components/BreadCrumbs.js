import { useNavigate } from "react-router-dom"

export default function Breadcrumb() {

    const navigate = useNavigate()

    return (
        <div className="border-bottom border-secondary border-2 mb-3">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    {
                        window.location.pathname.split('/').map(crumb => {
                            return (
                                <>
                                    <li
                                        class="breadcrumb-item fw-bold"
                                        onClick={() => {
                                            let link = ''
                                            for (let i = 0; i <= window.location.pathname.split('/').indexOf(crumb); i++) {
                                                // console.log(window.location.pathname.split('/')[i])
                                                link = link + `${window.location.pathname.split('/')[i]}/`
                                            }
                                            console.log("Display", link)
                                            if (link === '/student/')
                                                navigate(`${link}dashboard`)
                                            else navigate(link.substring(0, link.length - 1))
                                        }}
                                    >{crumb}</li>
                                </>
                            )
                        })
                    }
                </ol>
            </nav>
        </div>
    )
}