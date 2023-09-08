var pageHTML = document.documentElement.outerHTML;

// отпправляем линк



document.addEventListener('DOMContentLoaded', function() {
    // получаем json, вместо нижнего

    // Ваш JSON-файл с данными (предполагается, что он находится в той же директории, что и popup.html)
    const jsonData = [
        {
            "id": 1,
            "текст": "4PDA",
            "imageSrc": "images/icon_4pda.svg",
            "заголовок": "Умный <b>жирный</b> <i>текст</i>",
            "цвет": "#D3D3D3",
            "ссылка": "https://4pda.to"
        },
        {
            "id": 2,
            "текст": "IXBT",
            "imageSrc": "images/icon_ixbt.svg",
            "заголовок": "Умный текст",
            "цвет": "#6699FF",
            "ссылка": "https://www.ixbt.com"
        },
        {
            "id": 3,
            "текст": "Mobile Review",
            "imageSrc": "images/icon_mobrev.svg",
            "заголовок": "Умный текст",
            "цвет": "#0077aa",
            "ссылка": "https://mobile-review.com"
        },
        {
            "id": 4,
            "текст": "Rozetked",
            "imageSrc": "images/icon_rozetked.svg",
            "заголовок": "Умный текст",
            "цвет": "#00aa88",
            "ссылка": "https://rozetked.me"
        },
        {
            "id": 5,
            "текст": "Wylsacom",
            "imageSrc": "images/icon_wylsa.png",
            "заголовок": "Умный текст",
            "цвет": "#00aa33",
            "ссылка": "https://wylsa.com"
        }
    ];

    // Элемент, в который вы хотите вставить данные
    const outputElement = document.getElementById('output');

    // Проходим по каждому элементу в JSON и создаем HTML-код
    jsonData.forEach(item => {
        const container = document.createElement('div');
        
        container.innerHTML = `
            <div class="container" style="background: linear-gradient(-31deg, #F5F5F5, ${item.цвет});">
                <div class="header">
                    <a href="${item.ссылка}"  target="_blank">
                        <img src="${item.imageSrc}" alt="Иконка" class="image">
                    </a>
                    <h1 class="title">${item.заголовок}</h1>
                </div>
                <p class="text">${item.текст}</p>
            </div>
        `;

        outputElement.appendChild(container);
    });
});
