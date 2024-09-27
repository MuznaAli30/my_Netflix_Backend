import express from 'express';
import { Login, Logout, Signup } from '../Controller/auth.controller.js';

const router = express.Router();

router.post("/Signup", Signup);
router.post("/Login",Login);
router.post("/Logout",Logout);

export default router;