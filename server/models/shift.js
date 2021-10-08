'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shift extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Shift.belongsTo(models.Staff, {
        foreignKey: 'StaffId'
      })
    }
  };
  Shift.init({
    StaffId: {
      type: DataTypes.STRING,
      foreignKey: true,
      allowNull: false
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
        isAfter: new Date().toDateString()
      }
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
        isAfter: new Date().toDateString()
      }
    }
  }, {
    sequelize,
    validate: {
      validateTime() {
        if (this.endTime < this.startTime) {
          throw new Error('End time is before start time')
        }

        let time0000 = new Date(2010, 12, 21, 0, 0, 0, 0).getTime()
        let time2359 = new Date(2010, 12, 21, 23, 59, 0, 0).getTime()
        
        if ((this.startTime.getTime() > time2359) && (this.startTime.getTime() < time0000)) {
          throw new Error('Start time is outside permitted range')
        }
      }
    },
    modelName: 'Shift',
  });
  return Shift;
};