import Image from 'next/image'
import CONSTANTS from '../../globals/constants'
import { useEffect, useState } from 'react'
import BookmarkIdb from '../../data/bookmark-idb'

export default function GridItem({ article }) {
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
    <li>
      <div className="w-full h-28 relative">
        <Image
          src={article.thumbnail ? `${CONSTANTS.LINE_IMAGE_CDN}/${article.thumbnail.hash}/w644` : CONSTANTS.IMAGE_PLACEHOLDER}
          alt={article.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex mt-1">
        <div className="flex-1">
          <a href={article.url?.url} target="_blank" rel="noreferrer noopener">
            <h3 className="font-bold text-sm line-clamp-3">
              { article.title }
            </h3>
          </a>
          <p className="text-xs">
            { article.publisher }
          </p>
        </div>
        <div>
          <button onClick={() => toggleBookmarkArticle(article)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isBookmarked ? 'black': 'none'} viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
        </div>
      </div>
    </li>
  )
}
