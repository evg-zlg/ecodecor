import Link from 'next/link'
import Image from 'next/image'
import mainImg2 from '../assests/image/main-img2.jpg'
import MainContainer from '../components/MainContainer'

export default function MainPage() {
  return (
    <MainContainer>  
      <main className="">
      <section className="bg-image bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <Image 
              className="w-full dark:hidden" 
              src={mainImg2} 
              alt="basket with dandelions"
            />
            <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-200">Плетеные корзины <br></br> Декор <br></br> Фотореквизит</h2>
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

