import React, { useEffect, useState } from 'react'

export default function Footer({ dataLen, pagination, deleteSelected, selectedData, visibleData, tableRow, setTableRow }) {
    let buttonArray = []
    for (let i = 0; i < dataLen / 10; i++) {
        buttonArray.push(i + 1)
    }
    const [currPage, setCurrPage] = useState(1)
    const [leftDisabled, setLeftDisabled] = useState(true)
    const [rightDisabled, setRightDisabled] = useState(false)
    const changeCurrPage = (newPage) => {
        if (newPage === "Remove" && currPage >= 1) {
            setCurrPage(currPage - 1)
            pagination(currPage - 1)
        } else if (newPage === "Add" && currPage + 1 <= dataLen / 10) {
            setCurrPage(currPage + 1)
            pagination(currPage + 1)
        } else {
            if (typeof (newPage) === "number") {
                setCurrPage(newPage)
                pagination(newPage)
            }
        }


    }
    useEffect(() => {
        // console.log(currPage, Math.floor(dataLen / 10));

        if (currPage === Math.floor(dataLen / 10)) {
            setRightDisabled(true)
        }
        if (currPage < Math.floor(dataLen / 10)) {
            setRightDisabled(false)
        }
        if (currPage === 0) {
            setLeftDisabled(true)
        }
        if (currPage > 0) {
            setLeftDisabled(false)
        }
    }, [currPage])
    useEffect(() => {
        setLeftDisabled(true)
    }, [])
    return (
        <footer className=" row" >
            <div className='col-2 text-center p-3' >
                <button onClick={() => deleteSelected(selectedData, visibleData, tableRow, setTableRow)} className='btn btn-danger' style={{ borderRadius: "20px" }}>
                    Delete Selected
                </button>
            </div>
            <div className="col-10 text-center p-3" >
                {/* extreme left */}
                <button onClick={() => changeCurrPage(0)} className={`btn m-2  ${leftDisabled ? "btn-light border border-dark" : "btn-primary"}`} style={{ borderRadius: "100%" }} disabled={leftDisabled}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-skip-backward" viewBox="0 0 16 16">
                        <path d="M.5 3.5A.5.5 0 0 1 1 4v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L8.5 8.752v2.94c0 .653-.713.998-1.233.696L1 8.752V12a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm7 1.133L1.696 8 7.5 11.367V4.633zm7.5 0L9.196 8 15 11.367V4.633z" />
                    </svg>
                </button>

                {/* left */}
                <button onClick={() => changeCurrPage("Remove")} className={`btn m-2  ${leftDisabled ? "btn-light border border-dark" : "btn-primary"}`} style={{ borderRadius: "100%" }} disabled={leftDisabled}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
                        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                    </svg>
                </button>

                {/* mid-start */}
                {buttonArray.map((val) => {
                    return <button key={val} onClick={() => changeCurrPage(val - 1)} className='btn  m-2 btn-primary' style={{ borderRadius: "100%" }}>
                        {val}
                    </button>
                })}
                {/* mid-end */}

                {/* right */}
                <button onClick={() => changeCurrPage("Add")} className={`btn m-2  ${rightDisabled ? "btn-light border border-dark" : "btn-primary"}`} style={{ borderRadius: "100%" }} disabled={rightDisabled}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                    </svg>
                </button>

                {/* extreme right */}
                <button onClick={() => changeCurrPage(Math.floor(dataLen / 10))} className={`btn m-2  ${rightDisabled ? "btn-light border border-dark" : "btn-primary"}`} style={{ borderRadius: "100%" }} disabled={rightDisabled}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-skip-forward" viewBox="0 0 16 16">
                        <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z" />
                    </svg>
                </button>
            </div>
        </footer>
    )
}
