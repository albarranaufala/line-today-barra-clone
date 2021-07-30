import { openDB } from 'idb';
import CONSTANTS from '../globals/constants';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONSTANTS;

const dbPromise = () => openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const BookmarkIdb = {
  async getBookmarkedArticleById(id) {
    if (!id) {
      return;
    }
    return (await dbPromise()).get(OBJECT_STORE_NAME, id);
  },
  async getAllBookmarkedArticles() {
    return (await dbPromise()).getAll(OBJECT_STORE_NAME);
  },
  async addArticleToBookmark(article) {
    if (!article.id) {
      return;
    }

    return (await dbPromise()).put(OBJECT_STORE_NAME, article);
  },
  async removeArticleFromBookmark(id) {
    if (!id) {
      return;
    }

    return (await dbPromise()).delete(OBJECT_STORE_NAME, id);
  },
};

export default BookmarkIdb;
