import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'

export default function Categories({ activeCategoryId, categories }) {
  
  const navRef = useRef()

  const [isNextButtonShow, setIsNextButtonShow] = useState(true)
  const [isPrevButtonShow, setIsPrevButtonShow] = useState(true)

  const isRightStuck = element => {
    return element.scrollLeft + element.offsetWidth >= element.scrollWidth
  }

  const isLeftStuck = element => {
    return element.scrollLeft + element.offsetWidth <= element.offsetWidth
  }

  const updateNextPrevButton = element => {
    if (isRightStuck(element)) {
      setIsNextButtonShow(false)
    } else {
      setIsNextButtonShow(true)
    }
    if (isLeftStuck(element)) {
      setIsPrevButtonShow(false)
    } else {
      setIsPrevButtonShow(true)
    }
  }

  const scroll = scrollOffset => {
    const navElement = navRef.current
    const nextLeftPosition = navElement.scrollLeft + scrollOffset
    navElement.scrollTo({
      left: nextLeftPosition,
      behavior: 'smooth',
    })
    updateNextPrevButton(navElement)
  }

  useEffect(() => {
    setIsNextButtonShow(!isRightStuck(navRef.current))
    setIsPrevButtonShow(!isLeftStuck(navRef.current))
  }, [])

  return (
    <div className="relative overflow-x-hidden">
      <nav ref={navRef} className="whitespace-nowrap text-xs overflow-x-hidden">
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
                {
                  activeCategoryId === category.id ?
                    <h1>{category.name}</h1> :
                    `${category.name}`
                }
              </a>
            </Link>
          ))
        }
      </nav>
      <button onClick={() => scroll(-80)} aria-label="Geser ke kanan" className={`absolute left-0 inset-y-0 px-2 bg-white shadow ${isPrevButtonShow ? '' : 'hidden'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      <button onClick={() => scroll(80)} aria-label="Geser ke kanan" className={`absolute right-0 inset-y-0 px-2 bg-white shadow ${isNextButtonShow ? '' : 'hidden'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}