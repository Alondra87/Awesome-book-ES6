import { genId } from '../utils/id.utils.js';

export default class Book {
  constructor(title, author, id = undefined) {
    this.id = id || genId();
    this.title = title;
    this.author = author;
  }
}
