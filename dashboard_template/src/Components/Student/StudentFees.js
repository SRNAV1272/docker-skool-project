import { useState } from "react"

export default function Fees() {

    const head = ['id', 'name', 'amount', 'date']
    const data = [
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '2',
            name: 'feb',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '3',
            name: 'febrary',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '2',
            name: 'january',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },
        {
            id: '1',
            name: 'jan',
            amount: 4500,
            date: '01.01.2023'
        },

    ]
    const [state, setState] = useState('')

    return (
        <>
            <div className="row">
                <div className="col-12 py-3 d-flex justify-content-between align-items-center">
                    <h2>Fees</h2>
                    <div class="input-group w-25">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input
                            onChange={(e) => setState(e.target.value)}
                            type="text"
                            class="form-control"
                            placeholder="NAME"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div class="input-group w-25">
                        <span class="input-group-text" id="basic-addon1">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input
                            onChange={(e) => setState(e.target.value)}
                            type="text"
                            class="form-control"
                            placeholder="ID"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                </div>
                <div className="col-12 card px-4 py-2 overflow-auto" style={{ maxHeight: window.innerHeight - 200 }}>
                    <table class="table">
                        <thead>
                            <tr>
                                {
                                    head.map((head) => (<th scope="col">{head.toUpperCase()}</th>))
                                }
                                <td className="fw-bold">ACTION</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((data) => {
                                    if (data?.name?.includes(state) || data?.id?.includes(state)) {
                                        return (
                                            <tr>
                                                {
                                                    head.map(head => (<td>{data[head]}</td>))
                                                }
                                                <td>
                                                    <i class="fa-solid fa-eye" data-bs-toggle="modal" data-bs-target="#exampleModalToggle   "></i>&emsp;
                                                    <i class="fa-solid fa-download"></i>
                                                </td>
                                            </tr>
                                        )
                                    } else if (state === '') {
                                        return (
                                            <tr>
                                                {
                                                    head.map(head => (<td>{data[head]}</td>))
                                                }
                                                <td>
                                                    <i class="fa-solid fa-eye" data-bs-toggle="modal" data-bs-target="#exampleModalToggle   "></i>&emsp;
                                                    <i class="fa-solid fa-download"></i>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Show a second modal and hide this one with the button below.
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}