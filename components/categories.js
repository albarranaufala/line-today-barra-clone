import Link from 'next/link'

export default function Categories({ activeCategoryId, categories }) {
  
  return (
    <nav className="whitespace-nowrap text-xs overflow-x-hidden">
      {
        categories.map(category => (
          <Link
            href={{
              pathname: '/',
              query: { category: category.id }
            }}
            key={category.id}
            className="inline-block">
            <a className={`inline-block px-2 py-1 mr-3 rounded-full border border-black hover:bg-black hover:text-white ${activeCategoryId === category.id ? 'bg-black text-white' : ''}`}>
              {category.name}
            </a>
          </Link>
        ))
      }
    </nav>
  )
}