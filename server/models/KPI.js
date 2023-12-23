import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const dailySchema = new Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Types.Currency,
      currenct: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currenct: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Currency,
      currenct: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currenct: "USD",
      get: (v) => v / 100,
    },
    operationalExpenses: {
      type: mongoose.Types.Currency,
      currenct: "USD",
      get: (v) => v / 100,
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Currency,
      currenct: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: mongoose.Types.Currency,
      currenct: "USD",
      get: (v) => v / 100,
    },
    totalRavenue: {
      type: mongoose.Types.Currency,
      currenct: "USD",
      get: (v) => v / 100,
    },
    totalExpenses: {
      type: mongoose.Types.Currency,
      currenct: "USD",
      get: (v) => v / 100,
    },
    expensesByCategory: {
      type: Map,
      of: {
        type: mongoose.Types.Currency,
        currenct: "USD",
        get: (v) => v / 100,
      },
    },
    monltyData: [monthSchema],
    dailyData: [dailySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;

//new schema means that we need to target all the options that we have in model
// we are using get call because currency is multiplied by a 100 mongoose currency works like that and it tells to use it that way
// expense by category is a object and mongoose definds objects with a type of Map
//monthlyData is an array of objects so we want to creata a new schema w for it
//{ toJSON: { getters: true } } this allows us to use get
// timestamps gives us when it was created and and updated
