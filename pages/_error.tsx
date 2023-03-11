import Link from 'next/link'

export default function Error({ statusCode, message}: { statusCode: number, message: string }) {
    return (
      <div className="flex flex-col items-center justify-center h-screen prose mx-auto">
        <h1 className=" text-gray-700">
          {statusCode + ' - An error occurred 😪'}
        </h1>
        <blockquote className="text-gray-600 text-center">
          {message}
        </blockquote>
          <Link href="/">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Try again?
              </button>
          </Link>
      </div>
    )
}
  
Error.getInitialProps = ({ res, err }: {res: any, err: any}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  const message = res ? res.message : err ? err.message : "An error occurred on client"
  return { statusCode, message }
}
