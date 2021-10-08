import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'

export default function StaffShifts() {

    const { id } = useParams()

    const history = useHistory()

    const [data, setData] = useState([])

    const getShifts = () => {
        axios.get(`http://localhost:3000/staff/${id}`)
            .then(res => {
                console.log(res.data);
                setData(res.data)
            })
    }

    const editShift = (shiftID) => {
        history.push(`/shift/${shiftID}`)
    }

    const deleteShift = (shiftID) => {
        axios.get(`http://localhost:3000/shift/delete/${shiftID}`)
            .then(res => {
                console.log(res.data);
                getShifts()
            })
    }

    useEffect(() => {
        getShifts()
    }, [])

    return (
        <Container>
            { !data ? 'Loading...' : 
            <div>
                    <h1 className='display-1 my-5'>{new Date().toDateString()}</h1>
                    <hr></hr>
                    <h1 className='my-3'>{data.name} Shifts</h1>

                    <Table hover>
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            { data.Shifts ?
                                data.Shifts.map(shift => {
                                    return (
                                        <tr>
                                            <td><Button onClick={() => editShift(shift.id)}>Edit</Button>  <Button onClick={() => deleteShift(shift.id)}>Delete</Button></td>
                                            <td>{new Date(shift.startTime).toLocaleString()}</td>
                                            <td>{new Date(shift.endTime).toLocaleString()}</td>
                                        </tr>
                                    )
                                })
                                :
                                'Loading'
                            }
                        </tbody>
                    </Table>
            </div>
            }
            
        </Container>
    )
}