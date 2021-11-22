import express from 'express';

// Handlers.
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts.js';

// Create new Express Router.
const router = express.Router();

// Routes.
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;