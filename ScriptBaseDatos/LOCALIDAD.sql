-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 26-10-2023 a las 23:45:06
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
-- Estructura de tabla para la tabla `LOCALIDAD`
--

CREATE TABLE `LOCALIDAD` (
  `ID_LOCALIDAD` int(11) NOT NULL,
  `DESCRIPCION` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `LOCALIDAD`
--

INSERT INTO `LOCALIDAD` (`ID_LOCALIDAD`, `DESCRIPCION`) VALUES
(1, 'Cordoba Capital'),
(2, 'Rio Tercero'),
(3, 'Hernando'),
(4, 'Monte Buey');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `LOCALIDAD`
--
ALTER TABLE `LOCALIDAD`
  ADD PRIMARY KEY (`ID_LOCALIDAD`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `LOCALIDAD`
--
ALTER TABLE `LOCALIDAD`
  MODIFY `ID_LOCALIDAD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
