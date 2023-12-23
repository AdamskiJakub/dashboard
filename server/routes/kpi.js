import express from "express";
import KPI from "../models/KPI.js";
const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;

//res status means that if everything is fine we will get a success result with 200 status to the front so we are sending an object that we grab from database and sent it to front
