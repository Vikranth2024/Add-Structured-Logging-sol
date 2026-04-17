const config = require('./src/config/env');
const express = require('express');
const morgan = require('morgan');
const expenseRoutes = require('./src/routes/expenseRoutes');

const app = express();

// Request logging based on environment
const logFormat = config.NODE_ENV === 'production' ? 'combined' : 'dev';
app.use(morgan(logFormat));

app.use(express.json());

// Routes
app.use('/expenses', expenseRoutes);

// Centralized Error Handling
app.use((err, req, res, next) => {
    // Log errors in production for observability
    console.error(`[ERROR] ${new Date().toISOString()}: ${err.message}`);
    res.status(err.status || 500).json({
        error: config.NODE_ENV === 'production' ? 'Internal server error' : err.message
    });
});

app.listen(config.PORT, () => {
    console.log(`🚀 Server listening on port ${config.PORT} (${config.NODE_ENV} mode)`);
});
