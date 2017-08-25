// Example model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
    email: { type: String, trim : true},
    name:  { type: String, required: true , trim : true},
    image: { type: String }
});

DoctorSchema.methods.updateSave = async function (obj) {
    let doctor = new this(obj);
    await doctor.save();
    return doctor
};

DoctorSchema.statics.get = async function (doctorId) {
      return await this.findOne({ _id : doctorId });
};

DoctorSchema.statics.getAll = async function () {
  return await this.find({}).sort({'name': -1}) // sort by date
};

module.exports = mongoose.model('Doctor', DoctorSchema);
