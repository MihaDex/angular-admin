-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 28 2017 г., 13:52
-- Версия сервера: 5.7.16
-- Версия PHP: 5.6.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `angadmin`
--

-- --------------------------------------------------------

--
-- Структура таблицы `computers`
--

CREATE TABLE `computers` (
  `id` int(11) NOT NULL,
  `ip` varchar(64) NOT NULL,
  `name` varchar(64) NOT NULL,
  `status` varchar(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `computers`
--

INSERT INTO `computers` (`id`, `ip`, `name`, `status`, `user_id`) VALUES
(1, 'test', 'test', 'offline', 3),
(2, '123456', 'Новый Комп', 'offline', 3),
(3, '123456', 'Новый Комп', 'offline', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `password` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `token` varchar(64) NOT NULL,
  `last_enter` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `password`, `email`, `token`, `last_enter`) VALUES
(1, 'test', 'test', 'test', 0),
(2, '5b67b9cea41a79fcf64bb35f66de6689', 'dexx@mail.ru', 'vsqjgdkm10fai0sue', 0),
(3, 'dc50a52cc6781faee2828dfdbed2fb91', 'admin@mail.ru', 'j4wb8ygh77nt73se5', 1506595760),
(4, 'd9b1d7db4cd6e70935368a1efb10e377', 'test@mail.ru', 'l844kxzjuzo6biy7g', 0),
(5, 'd9b1d7db4cd6e70935368a1efb10e377', '1@2.3', '7areubx58b86qunwy', 1506530209);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `computers`
--
ALTER TABLE `computers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `computers`
--
ALTER TABLE `computers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
