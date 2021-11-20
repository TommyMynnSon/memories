import express from 'express';

// Handlers.
import { getPosts, createPost } from '../controllers/posts.js';

// Create new Express Router.
const router = express.Router();

// Routes.
router.get('/', getPosts);
router.post('/', createPost);

export default router;