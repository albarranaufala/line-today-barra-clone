import Link from "next/link"

export default function Catable({ className, categories }) {
  return (
    <nav className={`grid grid-cols-3 gap-2 ${className}`}>
      {categories.map(category => (
        <Link
          key={category.categoryId}
          href={{
            pathname: '/',
            query: { category: category.categoryId }
          }}
        >
          <a className="w-full px-4 py-2 border border-black text-center hover:bg-black hover:text-white">
            {category.categoryName}
          </a>
        </Link>
      ))}
    </nav>
  )
}
