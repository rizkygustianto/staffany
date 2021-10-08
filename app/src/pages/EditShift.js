import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useHistory, useParams } from 'react-router-dom'

export default function EditShift() {

    let { id } = useParams()

    const history = useHistory()

    const [staffId, setStaffId] = useState('')
    const [staff, setStaff] = useState([])
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    const getStaff = () => {
        axios.get('http://localhost:3000/staff')
        .then(res => {
            console.log(res);
            setStaff(res.data)
        })
    }

    const getShift = () => {
        axios.get(`http://localhost:3000/shift/${id}`)
            .then(res => {
                console.log(res);
                setStaffId(res.data.StaffId)
                setStartTime(res.data.startTime.replace(/:00.000Z/, ""))
                setEndTime(res.data.endTime.replace(/:00.000Z/, ""))
            })
    }

    const editShift = () => {
        let payload = {
            staffId: staffId,
            startTime: startTime,
            endTime: endTime
        }

        axios.post(`http://localhost:3000/shift/update/${id}`, payload)
        .then(res => {
            console.log(res);
            history.push('/shifts')
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getStaff()
        getShift()
    },[])

    return (
        <Container>
            <h1 className='display-1 my-5'>{new Date().toDateString()}</h1>
            <hr></hr>
            <h1 className='my-3'>Edit Shift</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Staff</Form.Label>
                    <Form.Control as='select' value={staffId} onChange={(e) => setStaffId(e.target.value)}>
                        {
                            staff.map(el => {
                                return (
                                    <option value={el.id}>{el.name}</option>
                                )
                            })
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Start Time</Form.Label>
                    <Form.Control type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>End Time</Form.Label>
                    <Form.Control type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={() => editShift()}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}