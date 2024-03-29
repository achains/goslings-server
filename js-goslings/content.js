var pageHTML = document.documentElement.outerHTML;



// получаем линк
const currentURL = window.location.href;

// код отправки
document.addEventListener('DOMContentLoaded', function() {

    fetch(`http://127.0.0.1:8000/summarize/?phone_model=nothing%20phone%201`)
        .then((response) => response.json())
        .then((data) => {
            const outputElement = document.getElementById('output');
            for (const blog_name in data) {
                const text = data[blog_name];
                const container = document.createElement('div');
                container.innerHTML = `
                    <div class="container" style="background: linear-gradient(-31deg, #F5F5F5, ${"00aa88"});">
                        <div class="header">
                            <a href="https://4pda.to"  target="_blank">
                                <img src="images/icon_4pda.svg" alt="Иконка" class="image">
                            </a>
                        </div>
                        <p class="text">${text}</p>
                        <p class="text" style="margin-bottom: 15px">foo</p>
                    </div>
                `;
                outputElement.appendChild(container);
            }
        })

    // Элемент, в который вы хотите вставить данные
    // //
    // //
    // // Проходим по каждому элементу в JSON и создаем HTML-код




    // Ваш JSON-файл с данными (предполагается, что он находится в той же директории, что и popup.html)
    // const jsonData = {
    //     1:{
    //         "id": 1,
    //         "текст": 'Покупая Nothing Phone (1), вы становитесь обладателем не какого-то мейнстрима, а красивого и добротно изготовленного гаджета. Это один из немногих современных смартфонов, вызывающий живые эмоции и интерес у окружающих. В наш век такие качества куда ценнее топовой начинки и возможности установить 333 кастомных прошивки. Хочется верить, что с таким подходом Nothing найдёт свою аудиторию и расшевелит застоявшийся рынок Android-устройств.',
    //         "ткст": 'Матрица AMOLED на 6,55 дюйма с соотношением сторон 20:9. Заряда хватает на среднестатистическую эксплуатацию с 6-8 часами экранного времени. Для восполнения батареи можно использовать быструю зарядку на 33 Вт стандарта Quick Charge 4.0. Такой зарядник пополнит запас энергии с 0 до 50 % за 30 минут, а до 100 % — за 70. Частота обновления экрана — от 60 до 120 Гц, типовая яркость — 500 нит, а пиковая достигает 1200, причём всё это с совершенно незаметным глазу ШИМ.',
    //         "imageSrc": "images/icon_4pda.svg",
    //         "заголовок": "Умный <b>жирный</b> <i>текст</i>",
    //         "цвет": "#D3D3D3",
    //         "ссылка": "https://4pda.to"
    //     },
    //     2:{
    //         "id": 2,
    //         "текст": 'По техническим характеристикам, материалам корпуса (здесь даже стёкла не Victus, а всего лишь Corning Gorilla Glass 5) это обычный середнячок. У него средний уровень фото- и видеосъемки, невысокая автономность, стандартный набор сетевых модулей без поддержки Wi-Fi 6E и, что еще более обидно, e-SIM. Для качественного звука не предусмотрен кодек aptX/HD. С другой стороны, кого-то может привлечь очень быстрая работа и чистая оптимизированная ОС. В Россию аппарат официально, естественно, не поставляется. Цена в магазинах начинается от 43 тысяч рублей за базовую комплектацию (8/128 ГБ).',
    //         "ткст": 'Отображаемый на экране диапазон яркости соответствует фактическому для данного видеофайла. Но и в 4K качество картинки оставляет желать лучшего: она не только темноватая, рыхловатая, не максимально детализированная (для 4K), но еще и заметно подергивается. От обычного стороннего зарядного устройства смартфон полностью заряжается за 1 час 45 минут. Беспроводная зарядка тоже поддерживается (Qi, 15 Вт), и еще поддерживается реверсная беспроводная зарядка (5 Вт — например, для наушников). В целом же, это почти та самая «чистая» ОС Android, которая будет получать обновления Android максимально долго — три года.',
    //         "imageSrc": "images/icon_ixbt.svg",
    //         "заголовок": "Умный текст",
    //         "цвет": "#6699FF",
    //         "ссылка": "https://www.ixbt.com"
    //     },
    //     3:{
    //         "id": 3,
    //         "текст": 'Я с большим энтузиазмом начал тестировать смартфон Nothing Phone, поскольку чисто внешне он мне показался идеальным вариантом: плоские грани, плоский экран и тыльная поверхность, удобные крупные кнопки, вполне себе адекватные размер и вес. Но в ходе работы с гаджетом вылезли косяки, связанные с тормозами системы. Крайне печально, я уж подумал, что нашел идеальный смартфон для себя, ведь плюсов тут очень много: Классная матрица на 120 Гц и почти без ШИМ, Хорошие камеры, Быстрый интерфейс, Чистая система, Приятный внешний вид, Неплохая производительность.',
    //         "ткст":'Видео аппарат пишет хорошо, тем более что у него есть оптическая стабилизация. Качество значительно лучше, у гаджетов с отдельной простой камерой для таких целей. Это просто добротная камера на уровне Apple iPhone 12/13 не Pro-версий. А еще у девайса есть беспроводная зарядка на 15 Вт и реверсивная — на 5 Вт. Я запитывал аппарат от 33 Вт адаптера за 70 минут. Частота обновления экрана Nothing Phone составляет до 120 Гц. Я думал, что NP тормозит ввиду наличия такого странного семпла, но отзывы реальных пользователей говорят, что телефон действительно странный.',
    //         "imageSrc": "images/icon_mobrev.svg",
    //         "заголовок": "Умный текст",
    //         "цвет": "#0077aa",
    //         "ссылка": "https://mobile-review.com"
    //     },
    //     4:{
    //         "id": 4,
    //         "текст": 'Смартфон получился неоднозначным (то, чего так ждали от Карла Пея и чего он сам, видимо, хотел). Он получил уникальный дизайн, но насколько часто вы будете замечать его после недели жизни со смартфоном? Спереди Nothing Phone (1) такой же, как и у многих конкурентов, но за симметричные рамки нельзя не похвалить. Плюсы: Самобытный дизайн, Хорошая автономность, Достаточно лёгкий, Неплохой экран на 120 Гц, , Быстрый лаунчер, Приятная вибрация. Минусы: Может показаться великоватым, Не самый практичный Glyph Interface, Так себе камеры. Не стоит забывать и о том, что до России смартфон официально не доезжает. Но я уже видел, что продавцы на Avito собирают предзаказы',
    //         "ткст":'В ясную погоду снимки получаются хорошо — и на основную, и на широкоугольную камеру. А ещё у смартфона есть реверсивная зарядка на 5 Вт — самое то, чтобы «по красоте» зарядить Nothing ear (1). Это просто знаки различных интерфейсов: по центру круг — беспроводная зарядка, сверху слева рядом со вспышкой вокруг камер разместили LED-подсветку, снизу оповещение о зарядке и работе Google Assistant, когда смартфон лежит вниз экраном.',
    //         "imageSrc": "images/icon_rozetked.svg",
    //         "заголовок": "Умный текст",
    //         "цвет": "#00aa88",
    //         "ссылка": "https://rozetked.me"
    //     },
    //     5:{
    //         "id": 5,
    //         "текст": 'За все две недели, которые я провёл с Nothing Phone (1), у меня создалось впечатление, что весь хайп вокруг этого смартфона был мастерски продуман. Кажется, каким-то образом компании удалось вернуться в 2016 год, когда смартфоны ещё были интересны большому количеству людей, а в каждой из трубок можно было найти что-то индивидуальное. С другой стороны, смартфон не лишён этой самой индивидуальности. И это в огромной череде одинаковых среднебюджетных смартфонов (да и флагманов тоже) выглядит как глоток свежего воздуха. Nothing Phone (1) действительно интересен с точки зрения дизайна, но вот только его функциональность не поражает воображение. Это ещё один неплохой среднебюджетный смартфон с набором очевидных недостатков: невпечатляющие экран, камера, батарея, плохой звук, нередкие тормоза в интерфейсе. Однако Nothing Phone (1) привлекает внимание.',
    //         "ткст":'В случае чего за полчаса от 33-ваттного блока питания можно получить 48–50 % заряда. Смартфон получил аккумулятор условной ёмкостью 4500 мА·ч. Экран хороший, 120 Гц радуют глаз, яркости в большинстве случаев хватает. Сканер отпечатков пальцев встроен в экран. Но я ни разу не пожалел',
    //         "imageSrc": "images/icon_wylsa.png",
    //         "заголовок": "Умный текст",
    //         "цвет": "#00aa33",
    //         "ссылка": "https://wylsa.com"
    //     }
    // };

    // // Элемент, в который вы хотите вставить данные
    // const outputElement = document.getElementById('output');
    //
    //
    // // Проходим по каждому элементу в JSON и создаем HTML-код
    // for (const id in jsonData) {
    //     const item = jsonData[id];
    //     const container = document.createElement('div');
    //
    //     container.innerHTML = `
    //         <div class="container" style="background: linear-gradient(-31deg, #F5F5F5, ${item.цвет});">
    //             <div class="header">
    //                 <a href="${item.ссылка}"  target="_blank">
    //                     <img src="${item.imageSrc}" alt="Иконка" class="image">
    //                 </a>
    //             </div>
    //             <p class="text">${item.текст}</p>
    //             <p class="text" style="margin-bottom: 15px">${item.ткст}</p>
    //         </div>
    //     `;
    //
    //     outputElement.appendChild(container);
    // };
});



