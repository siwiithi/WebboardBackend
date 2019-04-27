import express, { Router } from 'express'
// Import index action from accounts controller
import { index } from './controllers/accounts'

// Initialize the router
const router = Router()

router.route('/accounts.json')
  .get(index);

export default router