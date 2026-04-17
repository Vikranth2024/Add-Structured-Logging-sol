const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.addRoommate = async (req, res, next) => {
    try {
        if (!req.body.name) throw new Error("Name is required");
        const roommate = await prisma.roommate.create({ data: { name: req.body.name } });
        res.status(201).json(roommate);
    } catch (err) {
        next(err); // Centralized error handling
    }
};

exports.getRoommates = async (req, res, next) => {
    try {
        res.json(await prisma.roommate.findMany());
    } catch (err) {
        next(err);
    }
};
