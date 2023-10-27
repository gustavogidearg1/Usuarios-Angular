-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 26-10-2023 a las 23:44:32
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
-- Estructura de tabla para la tabla `SIWFacturacion`
--

CREATE TABLE `SIWFacturacion` (
  `idFact` int(11) NOT NULL,
  `NumFact` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `Cliente` int(11) NOT NULL,
  `Pago` varchar(20) NOT NULL,
  `Entrega` int(11) NOT NULL,
  `Producto1` varchar(50) NOT NULL,
  `Producto2` varchar(50) NOT NULL,
  `Producto3` varchar(50) NOT NULL,
  `Producto4` varchar(50) NOT NULL,
  `Cantidad1` decimal(6,0) NOT NULL,
  `Cantidad2` decimal(6,0) NOT NULL,
  `Cantidad3` decimal(6,0) NOT NULL,
  `Cantidad4` decimal(6,0) NOT NULL,
  `Precio1` decimal(6,0) NOT NULL,
  `Precio2` decimal(6,0) NOT NULL,
  `Precio3` decimal(6,0) NOT NULL,
  `Precio4` decimal(6,0) NOT NULL,
  `Observacion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `SIWFacturacion`
--

INSERT INTO `SIWFacturacion` (`idFact`, `NumFact`, `Fecha`, `Cliente`, `Pago`, `Entrega`, `Producto1`, `Producto2`, `Producto3`, `Producto4`, `Cantidad1`, `Cantidad2`, `Cantidad3`, `Cantidad4`, `Precio1`, `Precio2`, `Precio3`, `Precio4`, `Observacion`) VALUES
(1, 1, '2023-10-23', 9, '30Dias', 1, 'Producto1', 'Producto2', 'Producto3', '', '1', '2', '3', '0', '11', '22', '33', '0', 'Observacion'),
(55, 1, '2023-10-03', 8, '30Dias', 1, 'Producto', '', '', '', '10', '0', '0', '0', '20', '0', '0', '0', 'Obs'),
(56, 1, '2023-10-26', 2, 'Contado', 2, 'Producto 26-10-23', '', '', '', '26', '0', '0', '0', '10', '0', '0', '0', 'Observacio 26-10-23'),
(57, 1, '2023-10-23', 9, '30Dias', 1, 'Producto11', 'Producto21', 'Producto31', '', '1', '2', '3', '0', '11', '22', '33', '0', 'Observacion'),
(58, 1, '2023-10-03', 8, '30Dias', 1, 'Producto11', '', '', '', '10', '0', '0', '0', '20', '0', '0', '0', 'Obs'),
(59, 1, '2023-10-26', 2, 'Contado', 2, 'Producto 26-10-23-1', '', '', '', '26', '0', '0', '0', '10', '0', '0', '0', 'Observacio 26-10-23-1');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `SIWFacturacion`
--
ALTER TABLE `SIWFacturacion`
  ADD PRIMARY KEY (`idFact`),
  ADD KEY `Fk_Cliente` (`Cliente`),
  ADD KEY `Fk_Entrega` (`Entrega`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `SIWFacturacion`
--
ALTER TABLE `SIWFacturacion`
  MODIFY `idFact` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `SIWFacturacion`
--
ALTER TABLE `SIWFacturacion`
  ADD CONSTRAINT `Fk_Cliente` FOREIGN KEY (`Cliente`) REFERENCES `SIWCliente` (`idCliente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `Fk_Entrega` FOREIGN KEY (`Entrega`) REFERENCES `SIWEntrega` (`idEntrega`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
