const { Shift, Staff } = require("../models");
const { Op } = require("sequelize");

class ShiftController {
    static getAllShift(req, res) {
        Shift.findAll()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: 'Failed to get shift data',
                    error: err
                })
            })
    }

    static getAllShiftsWithStaff(req, res) {
        Shift.findAll({
            include: {
                model: Staff
            }
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: 'Failed to get shift data',
                    error: err
                })
            })
    }

    static createShift(req, res) {
        let payload = {
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            StaffId: req.body.StaffId
        }
        Shift.create(payload)
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: 'Failed to create shift',
                    error: err
                })
            })
    }

    static updateShift(req, res) {
        let payload = {
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            StaffId: req.body.StaffId
        }
        Shift.update(payload, {
            where: {
                id: req.params.id
            }
        })
            .then(result => res.status(200).json(result))
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: 'Failed to update shift',
                    error: err
                })
            })
    }

    static deleteShift(req,res) {
        Shift.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => res.status(200).json(result))
        .catch(err => {
            console.log(err);
            res.status(400).json({
                message: 'Failed to delete shift',
                error: err
            })
        })
    }


}

module.exports = ShiftController