const mongodb = require('../data/database.js');
const ObjectId = require('mongodb').ObjectId;

// Get all students
const getAll = async (req, res) => {
    try {
        const result= await mongodb.getDatabase().db().collection('students').find();
        const students = await result.toArray();
        res.status(200).json(students);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message || 'Error retrieving students' });
    }
};

// Get a single student
const getSingle = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb.getDatabase().db().collection('students').find({_id: studentId});
        const students = await result.toArray();
        if (student.length > 0) {
            res.status(200).json(student[0]);

        } else {
        res.status(404).json({message: 'Student not found'});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message || 'Error retrieving student' });
    }
};

// Create a new student
const createStudent = async ( req, res) => {
    try {
        const student = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            birthday: req.body.birthday,
            email: req.body.email,
            phoneNum: req.body.phoneNum,
            address: req.body.address
        };
        const response = await mongodb.getDatabase().db().collection('students').insertOne({ _id: studentId });
        if (response.acknowledged) {
            res.status(201).json(response);
        } else {
            res.status(500).json({message: 'Failed to create student'});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message || 'Error creating student'});
    }
};

// Update a student
const updateStudent = async (req, res) => {
    try {
        const studentId = new ObjectId(req.params.id);
        const student = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            birthday: req.body.birthday,
            email: req.body.email,
            phoneNum: req.body.phoneNum,   
            address: req.body.address, 
        };
        const response = await mongodb.getDatabase().db().collection('students').replaceOne({ _id: studentId });
        if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Student not found'});
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message || 'Error updating student'});
    }
};

// Delete Student
const deleteStudent = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const response = await mongodb.getDatabase().db().collection('students').deleteOne({ _id: studentId });
        if (response.deletedCount > 0) {
            res.status(200).json({message: 'Student deleted'});
        } else {
            res.status(404).json({message: 'Student not found'});
        }
    } catch {
console.error(err);
        res.status(500).json({ message: err.message || 'Error deleting student'});
    }
};

module.exports = {
    getAll, 
    getSingle,
    createStudent,
    updateStudent,
    deleteStudent,
};