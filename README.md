## goit-js-hw-11-color-switch

### Критерии приема

<hr />

Созданы репозитории goit-js-hw-11-color-switch, goit-js-hw-11-promisification и
goit-js-hw-11-timer. При сдаче домашней работы есть две ссылки для каждого
проекта: на исходные файлы и рабочую страницу на GitHub pages. При посещении
рабочей страницы (GitHub pages) задания, в консоли нету ошибок и предупреждений
Имена переменных и функций понятные, описательные Код отформатирован с помощью
Prettier

### Задания

<hr />

- [Задание 1 - Переключатель цветов](./color-switch/README.md)
- [Задание 2 - Промисификация](./promisification/README.md)
- [Задание 3 - Таймер обратного отсчета](./timer/README.md)

<hr />
<hr />

### Задание 1 - Переключатель цветов

Есть массив цветов в hex-формате и кнопки Start и Stop.

```html
<button type="button" data-action="start">Start</button>
<button type="button" data-action="stop">Stop</button>
```

```css
const colors = [
     '#FFFFFF',
     '#2196F3',
     '#4CAF50',
     '#FF9800',
     '#009688',
     '#795548',
];
```

Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет
фона body на случайное значение из массива используя инлайн-стиль. При нажатии
на кнопку Stop, изменение цвета фона должно останавливаться.

⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так,
чтобы пока изменение темы запушено, кнопка Start была не активна.

Для генерации случайного числа (индекс элемента массива цветов), используй
функцию randomIntegerFromInterval.

````Javascript
const randomIntegerFromInterval = (min, max) => { return
Math.floor(Math.random() \* (max - min + 1) + min); }; ```
````
