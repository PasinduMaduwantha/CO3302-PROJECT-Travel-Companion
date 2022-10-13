import express from "express";
import { reservation, getReservation } from "../controllers/reservation.js";

const router = express.Router();

//CREATE
router.post("/", reservation);

//GET RESERVATION
router.get("/getreservation/:id", getReservation);

export default router;
