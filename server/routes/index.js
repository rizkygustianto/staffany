const route = require('express').Router()
const StaffController = require('../controllers/StaffController')
const ShiftController = require('../controllers/ShiftController')

route.get('/staff', StaffController.getAllStaff)
route.get('/staff/shifts', StaffController.getAllStaffWithShifts)
route.get('/shifts', ShiftController.getAllShiftsWithStaff)
route.get('/shifts/today', ShiftController.getTodaysShifts)
route.get('/shift/:id', ShiftController.getOneShift)
route.get('/staff/:id', StaffController.getStaffByPkWithShifts)

route.post('/shift/create', ShiftController.createShift)
route.post('/shift/update/:id', ShiftController.updateShift)
route.get('/shift/delete/:id', ShiftController.deleteShift)

module.exports = route