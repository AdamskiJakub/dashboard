import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import KPI from "./models/KPI.js";
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js";
import transactionRoutes from "./routes/transaction.js";
import pieRoutes from "./routes/pie.js";
import Product from "./models/Product.js";
import Transaction from "./models/Transaction.js";
import { kpis, products, transactions, pieChartData } from "./data/data.js";
import PieChart from "./models/PieChart.js";
/* CONFIGURATION */
dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);
app.use("/pie", pieRoutes);
app.use("/transaction", transactionRoutes);

/* MOONGOOSE SETUP */

const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // // this is very dangerous on production so Add this when needed
    // await mongoose.connection.db.dropDatabase;
    // KPI.insertMany(kpis);
    // Product.insertMany(products);
    // PieChart.insertMany(pieChartData);
    // Transaction.insertMany(transactions);
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

//after grabbing  because it's async KPI in .then we need to write await mongoose.connection.db.
//dropDatabase because when we see before we will see database with information we wan to drop current
//database so we don't want to have duplicate database
// ***NEVER DO IT IN REAL PRODUCTION APP BECAUSE YOU MIGHT DROP THE DATABASE AND MIGHT GET A LOT OF PEOPLE ANGRY WE WANT TO HAVE A BACKUP
