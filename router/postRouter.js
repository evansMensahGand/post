const express = require("express");
const router = express.Router();

// either the above or " const router =require("express").Router(); " is used
const postController = require("../controllers/postController");

router.get("/", postController.getAllPost);
router.get("/:1d", postController.getPost);
router.post("/", postController.createPost);
router.patch("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);


module.exports = router;