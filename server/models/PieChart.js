import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pieChartSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  targetSales: {
    type: Number,
    required: true,
  },
});

const PieChart = mongoose.model("PieChart", pieChartSchema);

export default PieChart;
