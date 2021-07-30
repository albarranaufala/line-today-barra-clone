import Header from "./header"
import Head from "next/head"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className="bg-gray-100 antialiased">
      <Head>
        <title>Line Today Barra Clone</title>
        <meta name="description" content="Line Today Clone by Albarra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-lg m-auto bg-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}