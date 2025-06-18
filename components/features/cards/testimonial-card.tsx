import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  name: string
  grade: string
  age: string
  imageSrc: string
}

export default function TestimonialCard({ quote, name, grade, age, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-[var(--radius-md)] p-8 w-full h-[300px] flex flex-col justify-between">
      <div className="mb-4">
        <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.25634 34.7424C4.44306 46.139 12.3045 54.4121 19.9462 54.4121C20.56 54.4121 21.1732 54.3587 21.7706 54.253C22.1093 54.1936 22.4056 53.9944 22.5889 53.7054C22.7717 53.4146 22.8233 53.0613 22.7304 52.731L21.1574 47.1043C21.0056 46.561 20.4817 46.1937 19.9371 46.2186L19.812 46.221C16.978 46.221 11.7988 41.9737 9.15847 32.5337C9.05405 32.1591 8.95509 31.776 8.85978 31.3766C11.8237 32.8433 15.3595 33.1827 18.5614 32.2909C25.7848 30.2698 30.0163 22.7501 27.9971 15.528C26.3603 9.67605 20.9771 5.58778 14.906 5.58778C13.6693 5.58778 12.4344 5.75838 11.2354 6.09411C6.47202 7.4255 2.89068 11.3802 1.15071 17.2273C-0.419886 22.5024 -0.380427 28.8862 1.25634 34.7424Z" fill="black"/>
          <path d="M51.4472 54.4111C52.0598 54.4111 52.6736 54.3589 53.2704 54.2533C53.6085 54.195 53.9054 53.9947 54.0881 53.7057C54.2709 53.4149 54.3225 53.0615 54.2302 52.7313L52.6566 47.1046C52.5048 46.5612 51.9906 46.1939 51.4363 46.2188L51.3124 46.2212C48.4785 46.2212 43.2986 41.9739 40.6583 32.534C40.5533 32.1569 40.4543 31.7739 40.3596 31.3768C43.3247 32.8436 46.8593 33.183 50.0612 32.2911C57.2834 30.27 61.5161 22.7504 59.4957 15.5282C57.8589 9.67629 52.4757 5.58801 46.4046 5.58801C45.1679 5.58801 43.933 5.75861 42.7334 6.09434C37.9706 7.42573 34.3893 11.3804 32.6487 17.2275C31.0787 22.5027 31.1176 28.887 32.7549 34.7438C35.9435 46.1393 43.8037 54.4111 51.4472 54.4111Z" fill="black"/>
        </svg>
      </div>
      <p className="text-[#111827] mb-6 text-lg leading-[1.4]">{quote}</p>
      <div className="flex items-center mt-auto">
        <div className="mr-4">
          <Image src={imageSrc || "/placeholder.svg"} alt={name} width={60} height={60} className="rounded-full" />
        </div>
        <div>
          <h4 className="text-[#111827] font-bold text-lg">{name}</h4>
          <p className="text-gray-600">
            {grade} | {age}
          </p>
        </div>
      </div>
    </div>
  )
}
