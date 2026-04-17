const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createExpense = async (data) => {
    if (!data.description || !data.amount || !data.payerId) {
        const error = new Error("Description, amount, and payerId are required.");
        error.status = 400;
        throw error;
    }

    return await prisma.expense.create({
        data: {
            description: data.description,
            amount: parseFloat(data.amount),
            payerId: parseInt(data.payerId)
        }
    });
};

exports.getAllExpenses = async () => {
    return await prisma.expense.findMany({
        include: { payer: true },
        orderBy: { createdAt: 'desc' }
    });
};

exports.calculateBalances = async () => {
    const roommates = await prisma.roommate.findMany({ include: { expenses: true } });
    const expenses = await prisma.expense.findMany();
    
    const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    const count = roommates.length;

    if (count === 0) return { total: 0, averageShare: 0, roommates: [] };

    const share = total / count;
    
    const results = roommates.map(r => {
        const paidByHim = r.expenses.reduce((acc, curr) => acc + curr.amount, 0);
        return {
            name: r.name,
            totalPaid: parseFloat(paidByHim.toFixed(2)),
            balance: parseFloat((paidByHim - share).toFixed(2))
        };
    });

    return {
        summary: {
            totalShared: parseFloat(total.toFixed(2)),
            roommateCount: count,
            eachOwes: parseFloat(share.toFixed(2)),
        },
        roommates: results,
        calculatedAt: new Date().toISOString()
    };
};
