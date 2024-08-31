### Launch project

node - v20.11.0

-   `npm install` - Install project dependencies.
-   `npm run start:vite` - Start the project in the development environment using webpack.

### Architecture

Feature-Sliced Design (FSD)
Project follows the Feature-Sliced Design (FSD) architecture. Check out the FSD documentation for understanding key principles.

[Feature-Sliced Design](https://feature-sliced.design/)

### Testing

Unit Testing (Jest): `npm run test:unit`


### Brief explanation
## stack
-   typescript
-   react
-   redux-toolkit
-   tailwind and tailwind radix for styling

## my comment
-   При розробці використовував архітектуру FSD.
-   таблицю реалізував самостійно без сторонніх бібліотек, була побудована в три етапи
    -   самі елементи таблиці, окремо в `shared/ui/components/table` (`thead, tr, td, etc...`)
    -   компонент `data-grid` `shared/ui/components/data-grid` просто приймає дані й показує в таблиці, нічого не знає про фільтри, пагінацію, екшени над строками таблиці і т.д..
    -   компонент `table-view` приймає дані для таблиці, використовує `data-grid`, А ТАКОЖ оперує даними для побудови периферії таблиці - ті ж фільтри + це може бути пагінація, екшини над строками, клітинками таблиці, екшини одразу над багатьма строками, і т.д. ітд
-   на верхніх рівнях використовується вже готовий компонент tableview
-   окремі юзкейси будуються на рівні `features`, зараз там лежить фіча `users-list`, якби, наприклад потрібно було б показати окрему таблицю зі списком документів, наприклад, то потрібно було б створити окрему фічу `users-documents`.
-   в моїй реалізації `features` це стейтлес модулі, `dumb`, хоча є й інші підходи до цього
-   рівень `pages` state модулі, сервісний рівень, робота з даними.

-   фільтрація реалізує оператор `AND`, тобто, якщо є фільтр `name` i `username` то в таблиці покажеться тільки ті айтеми, котрі метчаться з обоми фільтрами. Відповідно, якщо фільтрів усі 4, то метчитись повинні всі 4.
