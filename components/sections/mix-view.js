import { useState } from "react"
import Image from 'next/image'
import CONSTANTS from "../../globals/constants"

export default function MixView({ className, articles }) {
  const [isShowAll, setIsShowAll] = useState(articles.length <= 4)

  const showAll = () => {
    setIsShowAll(true)
  }

  return (
    <div>
      <ul className={className}>
        {articles.slice(0, isShowAll ? articles.length : 3).map((article, index) => {
          if (index === 0) {
            return (
              <li key={article.id} className="relative">
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </div>
                </div>
              </li>
            )
          }
          return (
            <li key={article.id} className="flex mt-4">
              <div className="h-24 w-24 relative">
                <Image
                  src={article.thumbnail ? `${CONSTANTS.LINE_IMAGE_CDN}/${article.thumbnail.hash}/w644` : CONSTANTS.IMAGE_PLACEHOLDER}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex-1 ml-4">
                <h3 className="font-bold leading-5 line-clamp-3">
                  {article.title}
                </h3>
                <p className="text-xs mt-2">
                  {article.publisher}
                </p>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>
            </li>
          )
        })}
      </ul>
      {
        !isShowAll ? 
          <div className="mt-4 text-center">
            <button className="text-sm" onClick={showAll}>
              Selengkapnya
            </button>
          </div>
          : ''
      }
    </div>
  )
}
