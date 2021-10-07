const route = require('express').Router()
const StaffController = require('../controllers/StaffController')
const ShiftController = require('../controllers/ShiftController')

route.get('/staff', StaffController.getAllStaff)
route.get('/staff/shifts', StaffController.getAllStaffWithShifts)
route.get('/shifts', ShiftController.getAllShiftsWithStaff)

route.post('/shift/create', ShiftController.createShift)
route.post('/shift/update/:id', ShiftController.updateShift)
route.get('/shift/delete/:id', ShiftController.deleteShift)

// route.get('/guests', Controller.getAllGuests)
// route.get('/guest/:id', Controller.getOneGuest)
// route.post('/guest/create', Controller.createGuest)
// route.get('/guests/current', Controller.getCurrentGuests)

// route.post('/checkin', Controller.checkIn)
// route.post('/checkout', Controller.checkOut)

module.exports = route