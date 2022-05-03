import React, { useEffect, useState } from 'react'
import TableRow from './TableRow'
import GetRecords from "../utils/GetRecords"
import Footer from './Footer'

const Table = ({ search }) => {
    const [dataStore, setDataStore] = useState([])  // contains Original copy of data
    const [tableRow, setTableRow] = useState([])  // contains all data
    const [visibleData, setVisibleData] = useState([]) // visible data on curr page
    const [selectedData, setSelectedData] = useState([]) // selected data by checkbox
    const [selectAllbox, setSelectAllbox] = useState(false) // select all toggle
    // get Data
    useEffect(() => {
        (async function () {
            let data = await GetRecords()
            setDataStore(data)
            setTableRow(data)
        })()
    }, [])
    // default pagination on page load
    useEffect(() => {
        pagination()
    }, [tableRow])
    // pagination function
    const pagination = (button) => {
        // console.log(selectedData);
        if (button === undefined)
            setVisibleData(tableRow.slice(0, 10))
        else
            setVisibleData(tableRow.slice(button * 10, button * 10 + 10))
    }

    // Select all checkbox
    const selectAll = () => {
        setSelectAllbox(!selectAllbox)
        if (selectAllbox)
            setSelectedData([])
        if (!selectAllbox)
            setSelectedData(visibleData.map((val) => val.id))
    }
    // delete row function
    const deleteSelected = (selectedData, visibleData, tableRow, setTableRow) => {
        let allData = [...tableRow]
        for (let j = 0; j < visibleData.length; j++) {
            if (selectedData.includes(visibleData[j].id)) {
                allData = allData.filter((val) => {
                    return !selectedData.includes(val.id)
                })
            }
        }
        setTableRow(allData)
        setSelectAllbox(false)

    }

    // search function
    useEffect(() => {
        searchFilter(search.toLowerCase(), dataStore, setTableRow)
    }, [search, dataStore])
    const searchFilter = (search, dataStore, setTableRow) => {
        let res = []
        for (let j = 0; j < dataStore.length; j++) {
            if (dataStore[j].name.toLowerCase().includes(search) || dataStore[j].email.toLowerCase().includes(search) || dataStore[j].role.toLowerCase().includes(search)) {
                res.push(dataStore[j])
            }
        }
        setTableRow(res)
        // console.log("res",res)
    }

    //handle edit
    // const editRow()

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">
                            <input onChange={() => selectAll()} checked={selectAllbox} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {visibleData.map((row, indx) => {
                        return <TableRow key={row.id} row={row} index={indx} checked={selectedData.includes(row.id)} selectedData={selectedData} setSelectedData={setSelectedData} deleteSelected={deleteSelected} visibleData={visibleData} tableRow={tableRow} setTableRow={setTableRow} />
                    })}
                </tbody>
            </table>
            <Footer dataLen={tableRow.length} pagination={pagination} deleteSelected={deleteSelected} selectedData={selectedData} visibleData={visibleData} tableRow={tableRow} setTableRow={setTableRow} />
        </>
    )

}
export default Table