-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 26-10-2023 a las 23:44:44
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
-- Estructura de tabla para la tabla `SIWCliente`
--

CREATE TABLE `SIWCliente` (
  `idCliente` int(11) NOT NULL,
  `ClienteSIW` varchar(50) NOT NULL,
  `Domicilio` varchar(50) NOT NULL,
  `Localidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `SIWCliente`
--

INSERT INTO `SIWCliente` (`idCliente`, `ClienteSIW`, `Domicilio`, `Localidad`) VALUES
(2, 'Gustavo Godoy11', 'Cordoba', 1),
(3, 'ClienteSIW2', 'Domicilio4', 4),
(8, 'Gustavo Godoy', 'Cordoba', 4),
(9, 'ClienteSIW', 'Domicilio', 1),
(10, 'Laura Figueroa1', 'General Paz 747', 4),
(11, 'Cata Godoy', 'General Paz 747', 3);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `SIWCliente`
--
ALTER TABLE `SIWCliente`
  ADD PRIMARY KEY (`idCliente`),
  ADD KEY `fk_loc_clien` (`Localidad`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `SIWCliente`
--
ALTER TABLE `SIWCliente`
  MODIFY `idCliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `SIWCliente`
--
ALTER TABLE `SIWCliente`
  ADD CONSTRAINT `fk_loc_clien` FOREIGN KEY (`Localidad`) REFERENCES `LOCALIDAD` (`ID_LOCALIDAD`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
