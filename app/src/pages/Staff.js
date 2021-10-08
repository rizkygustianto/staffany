import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

export default function Staff() {

    const history = useHistory()

    const [staffs, setStaffs] = useState([])

    const getStaff = () => {
        axios.get('http://staffany-test.herokuapp.com/staff/shifts')
            .then(res => {
                console.log(res.data);
                setStaffs(res.data)
            })
    }

    const seeStaffShifts = (id) => {
        history.push(`/staff/${id}`)
    }

    useEffect(() => {
        getStaff()
    }, [])

    return (
        <Container>
            <h1 className='display-1 my-5'>{new Date().toDateString()}</h1>
            <hr></hr>
            <h1 className='my-3'>Staff</h1>

            <Table hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        staffs.map(staff => {
                            return (
                                <tr>
                                    <td>{staff.name}</td>
                                    <td>{staff.email}</td>
                                    <td><Button variant='outline-primary' onClick={() => seeStaffShifts(staff.id)}>See Shifts</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>


        </Container>
    )
}