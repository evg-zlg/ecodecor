import Link from 'next/link'
import Image from 'next/image'
import mainImg2 from '../assests/image/main-img2.jpg'
import MainContainer from '../components/MainContainer'

export default function MainPage() {
  return (
    <MainContainer>  
      <main className="">
        

        {/* <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                  <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Плетеные корзины · Декор · Фотореквизит</h1>
                  <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Вдохновляйтесь и создавайте свой неповторимый интерьер с плетёными изделиями Sekreta_ecodecor</p>
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                      Выбрать себе
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                  <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                      Узнать больше
                  </a> 
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                  <Image
                   src={mainImg}
                   alt="Picture of the author"
                  />
              </div>                
          </div>
      </section> */}
      <section className="bg-image bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <Image 
              className="w-full dark:hidden" 
              src={mainImg2} 
              alt="basket with dandelions"
            />
            <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-200">Плетеные корзины <br></br> Декор <br></br> Фотореквизит</h2>
                <p className="mb-6 font-light text-gray-100 md:text-xl">Вдохновляйтесь и создавайте свой неповторимый интерьер с плетёными изделиями Sekreta_ecodecor</p>
                <Link href="/price">
                  <a  className="inline-flex items-center text-white bg-orange-600 hover:bg-orange-400 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:focus:ring-primary-900">
                  Посмотреть готовые изделия
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                </Link>
                
            </div>
        </div>
    </section>
        <footer className="footer">
          
        </footer>
      </main>
    </MainContainer>
  )
}

