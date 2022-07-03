# Сервер для хранения данных и картинок :)

## Запуск

Вы можете скопировать просто эту директорию и или все файлики к себе куда вам удобно, главное чтобы структура не поменялась и была такой как тут.

Для запуска приложения у вас должны быть следующие файлы и директории:

- posters/ — директория где будут храниться файлы
- db.json – файл где будут храниться данные о фильмах.

  Со следующим содержанием:

  ```json
  {
    "movie-records": []
  }
  ```
- main.js — код запуска сервера
- package.json — файл с данными о пакете и его зависимостях
- package-lock.json - файл c данными о зависимостях

### Шаг 1. Установка

Для установки зависимостей выполните следующую команду в терминале:

```bash
npm install
```

После чего у вас появится директория `node_modules`, появляется она рядом с файлом package.json и если он (package.json) находится в Git репозитории, то вам
следует добавить в файл `.gitignore` директорию `node_modules`, вот таким образом:

```gitignore
node_modules/
```

### Шаг 2. Запуск

Для запуска сервера выполните следующую команду в терминале:

```bash
npm run start
```

У вас запустится сервер по пути http://localhost:3000

Если будут вопросы задавайте :)

## Использование

### `/poster`

По этому пути вы можете сохранить картинку на сервере.

#### Возвращает

Если все хорошо, то запрос вернет вам объект вида:

```js
{
  path: "somePath"
}
```

Где свойство path будет хранить относительный путь до файла с картинкой.

Пример сохранения картинки ниже:

```html
<input id="imageInput" type="file">
```

```js
const imageInput = document.querySelector("#imageInput");

imageInput.addEventListener("change", () => {
  // Получаем объекта файла в нем хранится бинарные данные
  const file = imageInput.files.item(0);
  const formData = new FormData();
  
  // Важно указать правильный ключ в данном случае "poster"
  // его менять не следует так как бекенд именно по нему и ищет, то что вы прислали
  formData.append("poster", file);
  
  // Делаем запрос на отправку FormData с файлом
  fetch("http://localhost:3000/poster", {
    method: "POST",
    body: formData
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
})
```

### `/movie-records`

Если вы следовали пунктам из секции [«Запуск»](#запуск), то у вас должен был появиться путь по которому вы можете сохранять данные логически связанные с записями о
фильмах.

Ниже приведена модель данных, если проще, то ключи объекта записи о фильме и описание.

| Поле        | По русски                | Тип данных   | Обязательное | По умл.                          |
|-------------|--------------------------|--------------| --- |----------------------------------|
| id          | Уникальный идентификатор | Число        | ❌    | База сама назанчает при создании |
| name        | Название                 | Строка       | ✅ |                                  |
| releaseYear | Год выпуска              | Целое число  | ✅ |                                  |
| poster      | Постер                   | Строка       | ✅ |                                  |
| genres      | Жанры                    | Список строк | ❌ | `[]`                             |
| viewed      | Состояние просмотра      | Булевое      | ❌ | `false`                          |
| description | Описание                 | Строка       | ❌ | `""`                             |
| favorite    | Избранный                | Булевое      | ❌ | `false`                          |

#### Создание

Чтобы создать запись, нужно сделать POST запрос по пути `/movie-records` передав в body JSON-строку.

```js
fetch(`http://localhost:3000/movie-records`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Титаник",
    releaseYear: 1997,
    poster: "some-poster.png",
    genres: [ "драма" ],
    viewed: false,
    favorite: false,
    description: ""
  })
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

В ответе вам вернется только что созданная запись, точнее объект который сервер записал в базу.

#### Чтение

Чтобы получить ВСЕ записи, нужно сделать GET запрос по пути `/movie-records/`. И вы получите массив из всех записей:

```js
fetch(`http://localhost:3000/movie-records`)
  .then((response) => response.json())
  .then((data) => console.log(data));
```

Чтобы прочесть запись, нужно сделать GET запрос по пути `/movie-records/:id` передав вместо `:id` как раз id записи о фильме.

```js
fetch(`http://localhost:3000/movie-records/1`)
  .then((response) => response.json())
  .then((data) => console.log(data));
```

В ответе вам вернется только что созданная запись, точнее объект который сервер записал в базу.

#### Редактирование

Чтобы обновить запись, нужно сделать PUT запрос по пути `/movie-records/:id` передав вместо `:id` как раз id записи о фильме.

> ✋ Прошу заметить, что даже если у вас поменялось только одно поле, допустим появился новый жанр. При обновлении вам нужно передавать весь объект целиком, даже с теми данными которые остались прежними.

```js
fetch(`http://localhost:3000/movie-records/1`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    name: "Титаник",
    releaseYear: 1997,
    poster: "some-poster.png",
    genres: [ "драма", "приключения" ],
    viewed: false,
    favorite: false,
    description: ""
  })
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

В ответе вам вернется только что созданная запись, точнее объект который сервер записал в базу.

#### Удаление

Удаление такое же простое что и получение по id.

Вы делаете запрос по пути `/movie-records/:id` только методом `DELETE`.

```js
fetch(`http://localhost:3000/movie-records/1`, { method: "DELETE" })
  .then((response) => response.json())
  .then((data) => console.log(data));
```