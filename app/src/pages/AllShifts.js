import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

export default function AllShifts() {

    const history = useHistory()

    const [shifts, setShifts] = useState([])

    const getShifts = () => {
        axios.get('http://localhost:3000/shifts')
            .then(res => {
                console.log(res.data);
                setShifts(res.data)
            })
    }

    const editShift = (id) => {
        history.push(`/shift/${id}`)
    }

    const deleteShift = (id) => {
        axios.get(`http://localhost:3000/shift/delete/${id}`)
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
            <h1 className='display-1 my-5'>{new Date().toDateString()}</h1>
            <hr></hr>
            <h1 className='my-3'>All Shifts</h1>

            <Table hover>
                <thead>
                    <tr>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shifts.map(shift => {
                            return (
                                <tr>
                                    <td>{new Date(shift.startTime).toLocaleString()}</td>
                                    <td>{new Date(shift.endTime).toLocaleString()}</td>
                                    <td>{shift.Staff.name}</td>
                                    <td><Button onClick={() => editShift(shift.id)}>Edit</Button>  <Button variant='danger' onClick={() => deleteShift(shift.id)}>Delete</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>


        </Container>
    )
}