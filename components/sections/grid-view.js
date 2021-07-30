import Image from "next/image"
import { useState } from "react"
import CONSTANTS from "../../globals/constants"

export default function GridView({ className, title, articles }) {
  const [isShowAll, setIsShowAll] = useState(articles.length <= 4)

  const showAll = () => {
    setIsShowAll(true)
  }
  
  return (
    <div className={className}>
      {title ? <h2 className="font-bold text-xl">{title}</h2> : ''}
      <ul className='grid grid-cols-2 gap-4 mt-4'>
        {articles.slice(0, isShowAll ? articles.length : 4).map(article => (
          <li key={article.id}>
            <div className="w-full h-28 relative">
            <Image
              src={article.thumbnail ? `${CONSTANTS.LINE_IMAGE_CDN}/${article.thumbnail.hash}/w644` : CONSTANTS.IMAGE_PLACEHOLDER}
              alt={article.title}
              layout="fill"
              objectFit="cover"
            />
            </div>
            <h3 className="font-bold mt-1 text-sm line-clamp-3">
              { article.title }
            </h3>
            <p className="text-xs">
              { article.publisher }
            </p>
          </li>
        ))}
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
