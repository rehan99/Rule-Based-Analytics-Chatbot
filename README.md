# 🤖 Rule-Based Analytics Chatbot

A simple **Rule-Based Analytics Chatbot** developed as part of my **Decodelabs Internship – Project 1**.

The chatbot uses predefined rules and keyword matching to respond to user queries. It also works with an Excel dataset to provide basic analytics such as total orders, revenue, customers, order status, and product information.

## 📌 Project Overview

This project demonstrates how a **rule-based chatbot** can be developed using JavaScript and Node.js.

Instead of using machine learning or generative AI, the chatbot follows predefined `if-else` rules. When a user enters a query, the application matches the input against the available rules and returns the appropriate response.

## ✨ Features

* 💬 Rule-based conversational responses
* 👋 Greeting detection
* 📊 Total orders calculation
* 💰 Total revenue calculation
* 👥 Unique customer count
* 📦 Most sold product detection
* 🚚 Delivered, pending, shipped, and cancelled order counts
* 💳 Credit card and debit card order counts
* 🎟️ Orders using coupons
* 📈 Highest order value
* 📊 Average order value
* ❓ Help command showing available queries
* 🚪 Exit/bye command
* 🌐 Web-based chatbot interface
* 📑 Excel dataset integration

## 🛠️ Technologies Used

* **JavaScript**
* **Node.js**
* **Express.js**
* **XLSX**
* **HTML**
* **CSS**
* **JavaScript Fetch API**
* **Microsoft Excel Dataset**

## 📂 Project Structure

```text
RuleBasedChatbot/
│
├── file3.js
├── package.json
├── package-lock.json
├── Dataset for Data Analytics.xlsx
│
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

## ⚙️ How It Works

The application loads the Excel dataset using the `XLSX` library.

The backend processes the dataset and calculates different statistics.

When a user sends a message, the chatbot compares the input against predefined rules.

For example:

```text
User: how many orders are there

Bot: Total Orders = 100
```

Another example:

```text
User: most sold product

Bot: Most Sold Product = Product Name
```

If the chatbot does not recognize the command, it responds with:

```text
Sorry, I don't understand that command.
Type 'help' to see available commands.
```

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Rehan99/Rule-Based-Analytics-Chatbot.git
```

### 2. Navigate to the project

```bash
cd RuleBasedChatbot
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
node file3.js
```

The server will run at:

```text
http://localhost:3000
```

Open this address in your browser to use the chatbot.

## 💬 Example Commands

You can ask the chatbot questions such as:

```text
Hello
How are you
How many orders are there
What is the total revenue
Show cancelled orders
Show delivered orders
Show pending orders
Show shipped orders
Highest order value
Average order value
Most sold product
Credit card orders
Debit card orders
Orders using coupons
How many customers
Help
Bye
```

## 🎯 Learning Objectives

Through this project, I gained practical experience with:

* Building a rule-based chatbot
* JavaScript programming
* Node.js
* Express.js
* Working with Excel datasets
* Data processing
* Creating API endpoints
* Connecting a frontend with a backend
* Basic data analytics
* Understanding how rule-based systems work

## 🔮 Future Improvements

Possible future improvements include:

* Adding more natural language variations
* Adding charts and visual analytics
* Adding more dataset queries
* Improving the chatbot interface
* Adding database integration
* Adding machine learning-based intent detection

## 👨‍💻 Author

**Rehan Naveed**

Bachelor's in Artificial Intelligence

**Project:** Rule-Based Analytics Chatbot
**Internship:** Decodelabs Internship

