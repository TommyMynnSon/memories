import express from 'express';

// Handlers.
import { getPosts } from '../controllers/posts.js';

// Create new Express Router.
const router = express.Router();

// Routes.
router.get('/', getPosts);
router.get('/', createPost);

export default router;