import Image from 'next/image'
import CONSTANTS from "../../globals/constants"
import BookmarkIdb from "../../data/bookmark-idb"
import { useState, useEffect } from 'react'

export default function LargeItem({article}) {

  const [isBookmarked, setIsBookmarked] = useState(false)

  const toggleBookmarkArticle = async (article) => {
    if (isBookmarked) {
      await BookmarkIdb.removeArticleFromBookmark(article.id)
      setIsBookmarked(false)
    } else {
      await BookmarkIdb.addArticleToBookmark(article)
      setIsBookmarked(true)
    }
  }

  const checkBookmarkArticle = async (article) => {
    const isArticleBookmarked = !!(await BookmarkIdb.getBookmarkedArticleById(article.id))

    setIsBookmarked(isArticleBookmarked)
  }

  useEffect(() => {
    checkBookmarkArticle(article)
  }, [article, isBookmarked])
  
  return (
    <li className="relative">
      <div className="w-full h-56 relative">
        <Image
          src={article.thumbnail ? `${CONSTANTS.LINE_IMAGE_CDN}/${article.thumbnail.hash}/w644` : CONSTANTS.IMAGE_PLACEHOLDER}
          alt={article.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black" />
      <div className="absolute inset-x-4 bottom-4 text-white flex">
        <div className="flex-1">
          <h3 className="font-bold">
            {article.title}
          </h3>
          <p className="text-xs">
            {article.publisher}
          </p>
        </div>
        <div className="flex items-end">
          <button onClick={() => toggleBookmarkArticle(article)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isBookmarked ? 'white': 'none'} viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  )
}
