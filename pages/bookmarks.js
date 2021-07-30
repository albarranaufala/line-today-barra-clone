import { useState, useEffect } from "react"
import ListItem from "../components/article-items/list-item"
import BookmarksSkeleton from "../components/skeletons/bookmarks-skeleton"
import BookmarkIdb from "../data/bookmark-idb"
import Image from "next/image"
import emptyIllustration from '../public/images/undraw_empty_xct9.svg'

export default function Bookmark() {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getAllBookmarkedArticle = async () => {
    setIsLoading(true)

    const articles = await BookmarkIdb.getAllBookmarkedArticles()
    setArticles(articles)

    setIsLoading(false)
  }

  const handleBookmarkToggling = () => {
    getAllBookmarkedArticle()
  }

  useEffect(() => {
    getAllBookmarkedArticle()
  }, [])

  return (
    <div className="px-5 py-4">
      <h1 className="font-bold text-lg">
        Bookmarked Articles
      </h1>
      {
        isLoading ?
          <BookmarksSkeleton /> :
          articles.length ?
            <ul>
              {
                articles
                  .map(article => <ListItem key={article.id} article={article} handleBookmarkToggling={handleBookmarkToggling} />)
              }
            </ul> :
            <div className="text-center p-8">
              <Image src={emptyIllustration} alt="Bookmark Kosong" width={240} height={240} />
              <p className="font-bold">Bookmark Kosong</p>
            </div>
      }
    </div>
  )
}
