import { logDOM } from '@testing-library/react'
import React, { useState } from 'react'

const TableRow = ({ row, index, checked, selectedData, setSelectedData, deleteSelected, visibleData, tableRow, setTableRow }) => {
    // console.log(selectedData);
    const [editable, setEditable] = useState(false)
    const selectUnselect = () => {
        if (checked) {
            setSelectedData(selectedData.filter((val) => val !== row.id))
        } else {
            setSelectedData([...selectedData, row.id])
        }
    }

    const [name, setName] = useState(row.name)
    const [email, setEamil] = useState(row.email)
    const [role, setRole] = useState(row.role)

    const updateDataStore = (index, name, email, role, tableRow, setTableRow) => {
        setEditable(!editable)
        if(editable)    {
            console.log(tableRow[index].name);
        tableRow[index].name = name
        tableRow[index].email = email
        tableRow[index].role = role
    }

    }
    return (
        <tr>
            <td>
                <input onChange={() => selectUnselect()} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={checked} />

            </td>
            {!editable ?
                <>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{role}</td>
                </>
                : <>
                    <td><input className='form-control' onChange={(e) => setName(e.target.value)} value={name} /></td>
                    <td><input className='form-control' onChange={(e) => setEamil(e.target.value)} value={email} /></td>
                    <td><input className='form-control' onChange={(e) => setRole(e.target.value)} value={role} /></td>
                </>}
            <td>
                <button onClick={() => updateDataStore(index, name, email, role, tableRow, setTableRow)} className='btn'>
                    {!editable ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg>
                    :<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-square" viewBox="0 0 16 16">
                    <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
                    <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                  </svg>}
                </button>
                <button onClick={() => deleteSelected([row.id], visibleData, tableRow, setTableRow)} className='btn' style={{ color: "red" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
                        <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
            </td>
        </tr>
    )
}

export default TableRow
