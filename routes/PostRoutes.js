import { Router } from "express";
import {
    createPost,
    deletePost,
    fetchPosts,
    searchPost,
    showPost,
    updatePost,
} from "../controller/PostController.js";
const router = Router();

router.post("/", createPost);
router.post("/:id", updatePost);
router.get("/search", searchPost);
router.get("/", fetchPosts);
router.get("/:id", showPost);
router.delete("/:id", deletePost);

export default router;
