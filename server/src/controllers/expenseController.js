const expenseService = require('../services/expenseService');

exports.addExpense = async (req, res, next) => {
    try {
        const expense = await expenseService.createExpense(req.body);
        res.status(201).json(expense);
    } catch (err) {
        next(err); // Delegate to centralized error handler
    }
};

exports.getExpenses = async (req, res, next) => {
    try {
        const expenses = await expenseService.getAllExpenses();
        res.json(expenses);
    } catch (err) {
        next(err);
    }
};

exports.getBalances = async (req, res, next) => {
    try {
        const balances = await expenseService.calculateBalances();
        res.json(balances);
    } catch (err) {
        next(err);
    }
};
