const { Staff, Shift } = require("../models");
const { Op } = require("sequelize");

class StaffController {
    static getAllStaff(req, res) {
        Staff.findAll()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: 'Failed to get staff data',
                    error: err
                })
            })
    }

    static getAllStaffWithShifts(req, res) {
        Staff.findAll({
            include: {
                model: Shift
            }
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: 'Failed to get staff data',
                    error: err
                })
            })
    }

    static getStaffByPkWithShifts(req, res) {
        Staff.findByPk(req.params.id, {
            include: {
                model: Shift
            }
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: 'Failed to get staff data',
                    error: err
                })
            })
    }
}

module.exports = StaffController