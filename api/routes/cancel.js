import express from "express";
import {
  cancel,
  getRequests,
  deleteReservation,
  getAllReservations,
} from "../controllers/cancel.js";

const router = express.Router();

//CREATE
router.post("/", cancel);

//GET RESERVATION
router.get("/getall", getRequests);
router.get("/getallreservations", getAllReservations);

//DELETE RESERVATION
router.delete("/delete/:id", deleteReservation);

export default router;
