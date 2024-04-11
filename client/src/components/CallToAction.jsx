import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='lg:text-3xl sm:text-xl'>
            What I Learned as a Product Designer at Apple
            </h2>
            <p className='text-gray-400 lg:text-xl sm:text-sm my-2'>
            In 2021 I landed my dream job. Working at Apple.....
            </p>
            <Button gradientDuoTone='purpleToBlue' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://medium.com/@pachecoandrea/what-i-learned-as-a-product-designer-at-apple-35341d9ced8a"  rel='noopener noreferrer'>
                Read Full Article
                </a>
            </Button>
        </div>
        <div className="p-5 flex-1">
            <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BniKIhT3c54sIEuPtzRQKw.jpeg"  />
        </div>



    </div>

    


    


  )
};