"use strict";

const express = require("express");
const router = express.Router();
const { Clothes } = require("../models/index");

router.get("/clothes", getAllClothes);
router.post("/clothes", createClothes);

async function getAllClothes(req, res) {
  let clothe = await Clothes.getAll();
  res.status(200).json(clothe);
}

async function createClothes(req, res) {
  let clothe = req.body;
  let clothes = await Clothes.create(clothe);
  res.status(201).json(clothes);
}

module.exports = router;
