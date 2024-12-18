import express from "express";
import {
  createArticle,
  deleteArticle,
  getArticle,
  getArticleById,
  updateArticle,
} from "../controllers/articleController.js";

const router = express.Router();

router.get("/", getArticle);
router.get("/:id", getArticleById);
router.post("/", createArticle);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

export default router;
