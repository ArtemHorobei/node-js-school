import * as Router from 'koa-router';
import controller = require('./controller');

const router = new Router();

// GENERAL ROUTES
router.get('/', controller.general.helloWorld);
router.get('/jwt', controller.general.getJwtPayload);

// USER ROUTES
router.get('/users', controller.user.getUsers);
router.get('/users/:id', controller.user.getUser);
router.post('/users', controller.user.createUser);
router.put('/users/:id', controller.user.updateUser);
router.delete('/users/:id/books', controller.user.deleteUser);

// BOOK ROUTES
router.get('/books', controller.book.getBooks);
router.get('/books/:id', controller.book.getBook);
router.post('/books/', controller.book.createBook);
router.put('/books/:id', controller.book.updateBook);
router.delete('/books/:id', controller.book.deleteBook);

// SERVICE ROUTES
router.post('/services', controller.fileProcessing.create);
router.post('/services/:id/execute', controller.fileProcessing.executeService);

export { router };
