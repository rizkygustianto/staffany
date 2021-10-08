import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Button, Table } from 'react-bootstrap'
import { useHistory } from 'react-router'

export default function Home() {

    const history = useHistory()

    const [shifts, setShifts] = useState([])

    const getTodayShifts = () => {
        axios.get('http://staffany-test.herokuapp.com/shifts/today')
            .then(res => {
                console.log(res.data);
                setShifts(res.data)
            })
    }

    const editShift = (id) => {
        history.push(`/shift/${id}`)
    }

    const deleteShift = (id) => {
        axios.get(`http://staffany-test.herokuapp.com/shift/delete/${id}`)
            .then(res => {
                console.log(res.data);
                getTodayShifts()
            })
    }

    useEffect(() => {
        getTodayShifts()
    }, [])

    return (
        <Container>
            <h1 className='display-1 my-5'>{new Date().toDateString()}</h1>
            <hr></hr>
            <h1 className='my-3'>Today's Shifts</h1>
            {shifts.length < 1 ? 'No shifts today' : 
                <Table hover>
                    <thead>
                        <tr>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Name</th>
                            <th>Actions</th>
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
                                        <td><Button onClick={() => editShift(shift.id)}>Edit</Button>  <Button onClick={() => deleteShift(shift.id)} variant='danger'>Delete</Button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            }
            


        </Container>
    )
}