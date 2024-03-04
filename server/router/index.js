const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const ServiceController = require('../controllers/services-controller');
const newsController = require('../controllers/news-controller');
const teamsController = require('../controllers/teams-controller');
const projectController = require('../controllers/project-controller');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.get('/service', ServiceController.getService);
router.get('/news', newsController.getNews);
router.get('/teams', teamsController.getTeams);
router.get('/project', projectController.getAllProjects);
router.get('/project/:id', projectController.getProjectById);

module.exports = router
