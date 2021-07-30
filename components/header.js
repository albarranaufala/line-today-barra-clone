import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

export default function Header() {
  const router = useRouter()

  return (
    <header className="px-5 py-2 font-bold text-lg flex justify-between">
      <Link href="/">
        <a>
          BARLINE TODAY
        </a>
      </Link>
      <Link href="/bookmarks">
        <a className="flex items-center" aria-label="Bookmark">
          {
            router.asPath === '/bookmarks' ?
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
              </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
          }
        </a>
      </Link>
    </header>
  )
}
