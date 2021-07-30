import { useState } from "react"
import LargeItem from "../article-items/large-item"
import ListItem from "../article-items/list-item"

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
            return <LargeItem key={article.id} article={article} />
          }
          return <ListItem key={article.id} article={article} />
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
