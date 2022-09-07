import Image from 'next/image'
import bagAcorn from '../assests/image/price/bag-acorn.jpg'
import basketBunny from '../assests/image/price/basket-bunny.jpg'
import watchFawn from '../assests/image/price/watch-fawn.jpg'
import MainContainer from '../components/MainContainer'

export default function MainPage() {
  return (
    <MainContainer>  
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Товары и идеи для подарков</h2>
                <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"></p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                {/* <!-- Pricing Card bagAcorn--> */}
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <Image  
                    src={bagAcorn}
                    alt="bag acorn"
                  />
                    <h3 className="my-2 text-2xl font-semibold">Сумка-жёлудь</h3>
                    <div className="flex justify-center items-baseline my-2 mb-4">
                        <span className="mr-2 text-4xl font-extrabold">2 000 ₽</span>
                    </div>
                    <a href="https://vk.com/sekreta_ecodecor" className="text-white bg-orange-400	 hover:bg-orange-600	 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Сделать заказ</a>
                </div>
                {/* <!-- Pricing Card watchFawn --> */}
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <Image  
                    src={watchFawn}
                    alt="watch fawn"
                  />
                    <h3 className="my-2 text-2xl font-semibold">Часы "Оленёнок"</h3>
                    <div className="flex justify-center items-baseline my-2 mb-4">
                        <span className="mr-2 text-4xl font-extrabold">2 500 ₽</span>
                    </div>
                    <a href="https://vk.com/sekreta_ecodecor" className="text-white bg-orange-400	 hover:bg-orange-600	 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Сделать заказ</a>
                </div>
                 {/* <!-- Pricing Card basketBunny --> */}
                 <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <Image  
                    src={basketBunny}
                    alt="basket bunny"
                  />
                    <h3 className="my-2 text-2xl font-semibold">Мини-корзинка "Зайка"</h3>
                    <div className="flex justify-center items-baseline my-2 mb-4">
                        <span className="mr-2 text-4xl font-extrabold">500 ₽</span>
                    </div>
                    <a href="https://vk.com/sekreta_ecodecor" className="text-white bg-orange-400	 hover:bg-orange-600	 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Сделать заказ</a>
                </div>
            </div>
        </div>
      </section>
    </MainContainer>
  )
}