const Post = require("../models/Post");

const getAllPost = async (request, response) => {
    const posts = await Post.find();
    response.status(200).json({posts});
};

const getPost = async (request, response) => {
    response.send("Single Post");

};

const createPost = async (request, response) => {
    const title = request.body.title;
    const content = request.body.content;
    const post = await Post.create({ title, content });
    response.status(201).json({ post });
}

const updatePost = async (request, response) => {
    response.send("Update Post");
}

const deletePost = async (request, response) => {
    response.send("Delete Post");
}

module.exports = {
    getAllPost, getPost, createPost, updatePost, deletePost,
};
