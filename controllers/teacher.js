const mongodb = require('../data/database.js');
const ObjectId = require('mongodb').ObjectId;

// Get All Teachers
const getAll = async (req, res) => {
    /*
    #swagger.tags = ['Teachers']
    #swagger.description = 'Get all teachers'
    #swagger.responses[200] = {
        description: 'Successful operation',
        schema: [
            {
                _id: '60d0fe4f5311236168a109ca',
                name: 'John Smith',
                email: 'john@example.com',
                subject: 'Mathematics'
            }
        ]
    }
    */
    try {
        const result = await mongodb.getDatabase().db('final').collection('teacher').find();
        const teachers = await result.toArray();
        res.status(200).json(teachers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get Single Teacher by ID
const getSingle = async (req, res) => {
    /*
    #swagger.tags = ['Teachers']
    #swagger.description = 'Get a single teacher by ID'
    #swagger.parameters['id'] = {
        description: 'Teacher ID',
        required: true,
        type: 'string'
    }
    #swagger.responses[200] = {
        description: 'Teacher found',
        schema: {
            _id: '60d0fe4f5311236168a109ca',
            name: 'John Smith',
            email: 'john@example.com',
            subject: 'Mathematics'
        }
    }
    #swagger.responses[404] = {
        description: 'Teacher not found'
    }
    */
    try {
        const teacherId = new ObjectId(req.params.id);
        const result = await mongodb.getDatabase().db('final').collection('teacher').find({ _id: teacherId });
        const teacher = await result.toArray();
        if (teacher.length === 0) {
            return res.status(404).json({ message: 'Teacher not found' });
        }
        res.status(200).json(teacher[0]);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create New Teacher
const createTeacher = async (req, res) => {
    /*
    #swagger.tags = ['Teachers']
    #swagger.description = 'Create a new teacher'
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    name: 'John Smith',
                    email: 'john@example.com',
                    subject: 'Mathematics'
                }
            }
        }
    }
    #swagger.responses[201] = {
        description: 'Teacher created successfully',
        schema: {
            acknowledged: true,
            insertedId: '60d0fe4f5311236168a109ca'
        }
    }
    */
    try {
        const teacher = {
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject
        };
        const response = await mongodb.getDatabase().db('final').collection('teacher').insertOne(teacher);
        if (response.acknowledged) {
            res.status(201).json(response);
        } else {
            res.status(500).json({ message: 'Failed to create teacher' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update Teacher by ID
const updateTeacher = async (req, res) => {
    /*
    #swagger.tags = ['Teachers']
    #swagger.description = 'Update an existing teacher by ID'
    #swagger.parameters['id'] = {
        description: 'Teacher ID',
        required: true,
        type: 'string'
    }
    #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    name: 'John Smith',
                    email: 'john@example.com',
                    subject: 'Mathematics'
                }
            }
        }
    }
    #swagger.responses[204] = {
        description: 'Teacher updated successfully'
    }
    */
    try {
        const teacherId = new ObjectId(req.params.id);
        const teacher = {
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject
        };
        const response = await mongodb.getDatabase().db('final').collection('teacher').replaceOne({ _id: teacherId }, teacher);
        if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(500).json({ message: 'Failed to update teacher' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete Teacher by ID
const deleteTeacher = async (req, res) => {
    /*
    #swagger.tags = ['Teachers']
    #swagger.description = 'Delete a teacher by ID'
    #swagger.parameters['id'] = {
        description: 'Teacher ID',
        required: true,
        type: 'string'
    }
    #swagger.responses[200] = {
        description: 'Teacher deleted successfully'
    }
    #swagger.responses[404] = {
        description: 'Teacher not found'
    }
    */
    try {
        const teacherId = new ObjectId(req.params.id);
        const response = await mongodb.getDatabase().db('final').collection('teacher').deleteOne({ _id: teacherId });
        if (response.deletedCount > 0) {
            res.status(200).send();
        } else {
            res.status(500).json({ message: 'Failed to delete teacher' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAll,
    getSingle,
    createTeacher,
    updateTeacher,
    deleteTeacher
};
