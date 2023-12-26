import express from "express";
import PieChart from "../models/PieChart.js";

const router = express.Router();

router.get("/pies", async (req, res) => {
  try {
    const pies = await PieChart.find();
    res.status(200).json(pies);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
