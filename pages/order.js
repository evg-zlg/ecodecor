import Link from "next/link"
import MainContainer from '../components/MainContainer'

export default function MainPage() {
  return (
    <MainContainer>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Заказ, оплата, доставка</h2>
            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                <div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                            Как сделать заказ?
                        </h3>
                        <p className="text-gray-700 dark:text-gray-500 mb-2">Заказать изделие можно несколькими способами:</p>
                        <p className="text-gray-500 dark:text-gray-400">1. Выбрать понравившееся в разеле Товары и скинуть ссылку на него в сообщения;</p>
                        <p className="text-gray-500 dark:text-gray-400">2. Выбрать среди фотографий/постов и также скинуть ссылку в сообщения;</p>
                        <p className="text-gray-500 dark:text-gray-400 mb-2">3. Отправить в сообщение информацию об изделии, которое вы хотите приобрести, с фотографией похожего изделия.</p>
                        <p className="text-gray-700 dark:text-gray-400">На ваш выбор может быть изменен размер, форма и цвет любого изделия, добавлены аксессуары, использованы кожаные или деревянные элементы, чехлы, ручки, крышечки. Стоимость таких изделий рассчитывается индивидуально.</p>
                    </div>
                    <div className="mb-10">                        
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                            Какой срок изготовления?
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">СРОК ИЗГОТОВЛЕНИЯ плетеных изделий (в зависимости от размера и сложности) занимает от 2 недель.</p>
                        <p className="text-gray-500 dark:text-gray-400">Возможно выполнение заказа в более короткие сроки с увеличением его заявленной стоимости.</p>
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                            Оплачивать нужно сразу всю сумму?
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-2">Оплата производится в два этапа путем перевода на карту Тинькоф:</p>
                        <p className="text-gray-500 dark:text-gray-400">1. 50% от стоимости изделия - после согласования его характеристик непосредственно перед началом работы.</p>
                        <p className="text-gray-500 dark:text-gray-400 mb-1">Эта сумма в бОльшей степени является подтверждением вашего намерения к выкупу готового изделия;</p>
                        <p className="text-gray-500 dark:text-gray-400 mb-2">2. 50% после изготовления изделия.</p>
                        <p className="text-gray-500 dark:text-gray-400">По готовности я отправляю фотографию изделия. Оно будет передано вам после полной оплаты его стоимости.</p>                       
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                            Как получить готовое изделие? Доставка?
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">В черте города Тюмень по согласованию может быть осуществлен самовывоз или организована доставка до нужного адреса.</p>
                        <p className="text-gray-500 dark:text-gray-400">Доставка в другие города производится через Почту России/СДЭК, boxberry или по договоренности другой транспортной.
</p>
                        <p className="text-gray-500 dark:text-gray-400">Оплата услуг доставки осуществляется за счет Покупателя.
</p>

                    </div>
                </div>
                <div>
                    <div className="mb-10">
                        <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
                            Остались вопросы? 
                        
                        </h3>
                        
                        <a className="inline-flex items-center text-white bg-orange-600 hover:bg-orange-400 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:focus:ring-primary-900" 
                            href="https://vk.com/sekreta_ecodecor">Напиши мне                            
                            </a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </MainContainer>
  )
}