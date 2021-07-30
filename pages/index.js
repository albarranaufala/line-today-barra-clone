import Advertisement from "../components/sections/advertisement"
import MixView from "../components/sections/mix-view"
import Categories from "../components/categories"
import CONSTANTS from '../globals/constants'
import Catable from "../components/sections/catable"
import GridView from "../components/sections/grid-view"

export async function getServerSideProps({ query }) {
  const response = await fetch(CONSTANTS.LINE_TODAY_API)
  const { result } = await response.json()
  const categories = result.categoryList
  const categoryId = +query.category || CONSTANTS.TOP_CATEGORY_ID
  const { templates } = result.categories.find(category => category.id === categoryId)

  return {
    props: {
      categoryId,
      categories,
      templates
    },
  }
}

export default function Home({ categoryId, categories, templates }) {

  let articleCount = 0;
  const content = templates.map(template => {
    if (template.type === CONSTANTS.TEMPLATE_TYPE.AD) {
      return <Advertisement key={template.id} className="mt-4" />
    } else if (template.sections[0].articles.length) {
      if (template.type === CONSTANTS.TEMPLATE_TYPE.CATABLE) {
        return <Catable key={template.id} categories={template.sections[0].articles} className="mt-4" />
      } else {
        articleCount++
        if (articleCount === 1) {
          return <MixView key={template.id} articles={template.sections[0].articles} className="mt-4" />
        } else {
          return <GridView key={template.id} title={template.title} articles={template.sections[0].articles} className="mt-8" />
        }
      }
    }
    return []
  })

  return (
    <div className="px-5 py-4">
      <Categories activeCategoryId={categoryId} categories={categories} />
      {content}
    </div>
  )
}