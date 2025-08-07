MyCompany Retail Sales Dashboard

Power BI • Excel • DAX|Power Query

📖 Project Overview This repository contains a my company retail sales data analysis project for MyCompany Retail, demonstrating end-to-end dashboard development with Power BI. It includes data preparation in Excel, data modeling, DAX measures, and interactive report design to uncover key business insights.

Key Objectives:

Visualize sales performance over time

Identify top- and bottom-performing products

Analyze profitability and discount impact

Compare user-selectable time periods

Display geographic distribution of sales

📂 Repository Structure ├── data/ │ └── Store+Data.xlsx # Raw sales dataset (Excel) ├── docs/ │ └── SALES DATA ANALYSIS BUSINESS REQUIREMENT.pptx │ # Project requirements & design spec ├── reports/ │ └── MyCompany_SalesDashboard.pbix │ # Power BI Desktop file └── README.md # This file

🛠️ Prerequisites Power BI Desktop (version 2.XX or later)

Microsoft Excel (for inspecting raw data)

(Optional) Git to clone this repo

🔧 Setup & Usage Clone the repo git clone https://github.com/hrishikeshkulat-cmd/mycompany-retail-dashboard.git cd mycompany-retail-dashboard

Inspect & prepare data

Open data/Store+Data.xlsx in Excel to review raw tables:

Orders

Products

Customers

Dates

Open Power BI report

Launch Power BI Desktop

Go to File → Open and select reports/MyCompany_SalesDashboard.pbix

Refresh data

In Power BI: Home → Refresh

The report will load data from the embedded Excel file

Explore the Dashboard

Navigate through pages:

Overview (KPIs & Trends)

Product Analysis (Top/Bottom products)

Time Comparison

Geography (Map view)

📊 Key Features & Visuals Page Visuals & KPIs Overview Total Sales, Total Profit, # Orders, Avg. Discount Line & Area charts for daily → annual trends Product Analysis Top/Bottom 5 Products by Sales, Profit, Quantity Bar & Treemap charts Time Comparison Date slicers for user-selected periods Period-to-Period % change cards Profit vs Sales Scatter plot with adjustable profit margin thresholds Geographic Analysis Map visual of Sales by City, Drill-through to Product

🧮 DAX Measures Examples of key DAX formulas used:

Total Sales = SUM('Orders'[SalesAmount]) Total Profit = SUM('Orders'[ProfitAmount]) Avg Discount = AVERAGE('Orders'[DiscountPercentage]) % Profit Margin = DIVIDE([Total Profit], [Total Sales], 0)

Full list of measures is documented within the PBIX file under the “Model” view.

🤝 Feedback & Collaboration

This is a personal project showcasing my Power BI skills. While contributions via pull requests are welcome, you can also reach out directly for feedback or suggestions.

📬 Feedback & Questions

Feel free to open an issue or contact me directly:

GitHub: hrishikeshkulat-cmd

LinkedIn: Hrishikesh Kulat

