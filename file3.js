import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import XLSX from 'xlsx';

const app = express();
const PORT = 3000;

// Resolve __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.static('public')); // Serve frontend files from 'public' folder

// Load Excel file (Your existing logic)
const workbook = XLSX.readFile("Dataset for Data Analytics.xlsx");
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet);

/**
 * GET /dashboard
 * Returns summary statistics for the dashboard cards
 */
app.get('/dashboard', (req, res) => {
    // 1. Total Orders
    const totalOrders = data.length;

    // 2. Total Revenue
    let totalRevenue = 0;
    data.forEach(row => totalRevenue += Number(row.TotalPrice || 0));

    // 3. Total Customers
    let customers = new Set();
    data.forEach(row => customers.add(row.CustomerID));
    const totalCustomers = customers.size;

    // 4. Most Sold Product
    let products = {};
    data.forEach(row => {
        if (!products[row.Product]) products[row.Product] = 0;
        products[row.Product] += Number(row.Quantity || 0);
    });
    
    let bestProduct = "N/A";
    let maxQuantity = 0;
    for (let product in products) {
        if (products[product] > maxQuantity) {
            maxQuantity = products[product];
            bestProduct = product;
        }
    }

    res.json({
        totalOrders,
        totalRevenue: totalRevenue.toFixed(2),
        totalCustomers,
        mostSoldProduct: bestProduct
    });
});

/**
 * POST /chat
 * Handles the chatbot logic (Your existing rule-based logic)
 */
app.post('/chat', (req, res) => {
    const input = req.body.message || "";
    let message = input.trim().toLowerCase();
    let response = "";

    // --- START OF YOUR ORIGINAL LOGIC ---
    
    // Greeting
    if (message === "hi" || message === "hello" || message === "hey") {
        response = "Hello!. How can I help you today?";
    }
    // How are you
    else if (message === "how are you") {
        response = "I'm doing fine, thank you for asking! 😊";
    }
    // Total Orders
    else if (message === "how many orders are there") {
        response = `Total Orders = ${data.length}`;
    }
    // Total Revenue
    else if (message === "what is the total revenue") {
        let revenue = 0;
        for (let row of data) {
            revenue += Number(row.TotalPrice);
        }
        response = `Total Revenue = ${revenue.toFixed(2)}`;
    }
    // Cancelled Orders
    else if (message === "show cancelled orders") {
        let cancelled = data.filter(row => row.OrderStatus.toLowerCase() === "cancelled");
        response = `Cancelled Orders = ${cancelled.length}`;
    }
    // Delivered Orders
    else if (message === "show delivered orders") {
        let delivered = data.filter(row => row.OrderStatus.toLowerCase() === "delivered");
        response = `Delivered Orders = ${delivered.length}`;
    }
    // Pending Orders
    else if (message === "show pending orders") {
        let pending = data.filter(row => row.OrderStatus.toLowerCase() === "pending");
        response = `Pending Orders = ${pending.length}`;
    }
    // Shipped Orders
    else if (message === "show shipped orders") {
        let shipped = data.filter(row => row.OrderStatus.toLowerCase() === "shipped");
        response = `Shipped Orders = ${shipped.length}`;
    }
    // Highest Order
    else if (message === "highest order value") {
        let highest = data[0];
        for (let row of data) {
            if (Number(row.TotalPrice) > Number(highest.TotalPrice)) {
                highest = row;
            }
        }
        response = `Order ID: ${highest.OrderID} | Customer: ${highest.CustomerID} | Product: ${highest.Product} | Value: ${highest.TotalPrice}`;
    }
    // Average Order Value
    else if (message === "average order value") {
        let total = 0;
        for (let row of data) {
            total += Number(row.TotalPrice);
        }
        response = `Average Order Value = ${(total / data.length).toFixed(2)}`;
    }
    // Most Sold Product
    else if (message === "most sold product") {
        let products = {};
        for (let row of data) {
            if (!products[row.Product]) products[row.Product] = 0;
            products[row.Product] += Number(row.Quantity);
        }
        let bestProduct = "";
        let max = 0;
        for (let product in products) {
            if (products[product] > max) {
                max = products[product];
                bestProduct = product;
            }
        }
        response = `Most Sold Product = ${bestProduct} (${max} units)`;
    }
    // Credit Card Orders
    else if (message === "credit card orders") {
        let count = data.filter(row => row.PaymentMethod.toLowerCase() === "credit card").length;
        response = `Credit Card Orders = ${count}`;
    }
    // Debit Card Orders
    else if (message === "debit card orders") {
        let count = data.filter(row => row.PaymentMethod.toLowerCase() === "debit card").length;
        response = `Debit Card Orders = ${count}`;
    }
    // Orders Using Coupon
    else if (message === "orders using coupons") {
        let count = data.filter(row => row.CouponCode !== "").length;
        response = `Orders Using Coupons = ${count}`;
    }
    // Unique Customers
    else if (message === "how many customers") {
        let customers = new Set();
        for (let row of data) {
            customers.add(row.CustomerID);
        }
        response = `Unique Customers = ${customers.size}`;
    }
    // Help
    else if (message === "help") {
        response = "You can ask: Hello, How many orders, Total revenue, Show cancelled/delivered/pending/shipped orders, Highest order value, Average order value, Most sold product, Credit/Debit card orders, Orders using coupons, How many customers.";
    }
    // Exit/Bye
    else if (message === "bye" || message === "exit") {
        response = "Goodbye! Have a nice day.";
    }
    // Unknown
    else {
        response = "Sorry, I don't understand that command. Type 'help' to see available commands.";
    }

    // --- END OF YOUR ORIGINAL LOGIC ---

    res.json({ response });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});