import initialBooks from './data/books.data.js';
import BooksListController from './controllers/BooksListController.js';
import AddBookFormController from './controllers/AddBookFormController.js';
import MainDateController from './controllers/MainDateController.js';
import NavigationController from './controllers/NavigationController.js';

const BOOKS_SECTION_ID = 'books';
const MAIN_DATE_BOX_ID = 'main-date-box';
const NAV_LINKS_CLASS_SELECTOR = '.user-nav__link';
const INITIAL_ACTIVE_SECTION_ID = BOOKS_SECTION_ID;

const booksListController = new BooksListController(
  BOOKS_SECTION_ID,
  initialBooks,
);
booksListController.buildBooksList();
const addBookFormController = new AddBookFormController(booksListController);
addBookFormController.init();
const mainDateController = new MainDateController(MAIN_DATE_BOX_ID);
mainDateController.buildMainDate();
const navigationController = new NavigationController(
  NAV_LINKS_CLASS_SELECTOR,
  INITIAL_ACTIVE_SECTION_ID,
);
navigationController.init();
