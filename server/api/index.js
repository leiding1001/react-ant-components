/**
 * 中间件 - API主入口
 */
import Express from 'express';

const router = Express.Router();

/**
 * 模块中间件 - truck and trace 入口
 */

router.use('/api/filter-bar', require('./filter-bar'));

module.exports = router;