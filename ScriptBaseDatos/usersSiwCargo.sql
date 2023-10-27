-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 26-10-2023 a las 23:43:26
-- Versión del servidor: 5.7.35
-- Versión de PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `c2110488_PrIspc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usersSiwCargo`
--

CREATE TABLE `usersSiwCargo` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `rol` varchar(20) COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `usersSiwCargo`
--

INSERT INTO `usersSiwCargo` (`id`, `name`, `password`, `email`, `rol`) VALUES
(3, 'nada1', 'nada ', 'nada2@gmail.com', 'user'),
(29, 'name', 'password	 ', 'email@nada.com', 'user'),
(52, 'gustavog', 'Cata1908', 'gustavog@live.com.ar', 'admin'),
(56, 'Laura', 'Laura5 ', 'Laura@gmail.com', 'admin'),
(57, 'Nombre nuevo', 'NombreNuevo', 'NombreNuevo@gmail.com', 'user'),
(58, 'gustavogodoy2', 'gustavog  ', 'gustavog@live.com.ar', 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usersSiwCargo`
--
ALTER TABLE `usersSiwCargo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usersSiwCargo`
--
ALTER TABLE `usersSiwCargo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
