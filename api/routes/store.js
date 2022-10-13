import express from "express";
import { store, getStore } from "../controllers/store.js";

const router = express.Router();

//CREATE
router.post("/", store);

//GET RESERVATION
router.get("/getstore/:id", getStore);

export default router;
