import { useState } from "react"
import GridItem from "../article-items/grid-item"

export default function GridView({ className, title, articles }) {
  const [isShowAll, setIsShowAll] = useState(articles.length <= 4)

  const showAll = () => {
    setIsShowAll(true)
  }
  
  return (
    <div className={className}>
      {title ? <h2 className="font-bold text-xl">{title}</h2> : ''}
      <ul className='grid grid-cols-2 gap-4 mt-4'>
        {articles.slice(0, isShowAll ? articles.length : 4)
          .map(article => <GridItem key={article.id} article={article} />)}
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
