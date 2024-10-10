const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ss = require("./Schema"); 
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://piparvaK:AbCd$9890@cluster0.2gdr9.mongodb.net/Project", {})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Get all transactions
app.get('/transactions', async (req, res) => {
    try {
        const result = await ss.find();
        res.send(result);
    } catch (error) {
        console.error("Error fetching transactions:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Add a new transaction
app.post('/transactions/add', async (req, res) => {
    try {
        const newEntry = new ss({...req.body});
        const result = await newEntry.save();
        res.send(result);
    } catch (error) {
        console.error("Error adding transaction:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Calculate profit and loss date-wise
app.get('/transactions/profit-loss/date-wise', async (req, res) => {
    const { startDate, endDate } = req.query;

    try {
        const transactions = await ss.find({
            date: {
                $gte: new Date(startDate), 
                $lte: new Date(endDate)    
            }
        });

        // Calculate total sales and total expenses
        const totalSales = transactions.reduce((acc, transaction) => acc + (transaction.sale || 0), 0);
        const totalExpenses = transactions.reduce((acc, transaction) => acc + (transaction.expense || 0), 0);
        const profitLoss = totalSales - totalExpenses;

        res.json({
            totalSales,
            totalExpenses,
            profitLoss,
            transactions
        });
    } catch (error) {
        console.error("Error calculating profit and loss:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Start the server
app.listen(5000, () => {
    console.log("Server connected on port 5000");
});
