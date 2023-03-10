
export default function Header({title, subTitle}: {title: string, subTitle: string}){

    return (
        <div className="bg-gray-100 py-12 px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {subTitle}
          </p>
        </div>
      </div>
    )
}