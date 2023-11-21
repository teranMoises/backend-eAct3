-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 19-11-2023 a las 22:31:10
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `campeonato`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id_categoria` int(13) NOT NULL,
  `idModalidad` int(13) NOT NULL,
  `nombre_categoria` varchar(30) NOT NULL,
  `descripcion` text NOT NULL,
  `reglas` text NOT NULL,
  `premio` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id_categoria`, `idModalidad`, `nombre_categoria`, `descripcion`, `reglas`, `premio`) VALUES
(1, 1, 'Modalidad sumo', 'Para este año 2023, en la modalidad sumo participarán robots bípedos, con el objetivo de sacar al oponente del área establecida.', 'El robot debe ser controlado por control remoto,Contar con batería y no con alimentación externa, Deben ser seguros y no representar un peligro para otros competidores o espectadores', 350),
(2, 2, 'Recolección de objetos', 'Crea un vehículo que sea capaz de reconocer y clasificar objetos según su color.', 'Vehículo autónomo, con batería. No se permite controlarlo a control remoto., Tamaño máximo del robot: 30 cm por lado extendido, Objetos de dimensiones de entre: 3 y 5 cm de diámetro por 3 y 5 cm de altura', 500),
(3, 3, 'Soluciones Industriales', 'Para esta modalidad, se presenta un problema de una industria. El objetivo es presentar un prototipo que proponga una solución al problema.', 'Gana el equipo de participantes que presente la mejor propuesta.,El jurado debe considerarlo como una solución aceptable al problema presentado,El prototipo debe ser funcional y representar el problema y la solución.', 500),
(4, 2, 'Modalidad limpieza', 'Para este año 2023, en la modalidad sumo participarán robots aspiradora, capaz de limpiar un circuito lleno de papel picado.', 'El robot debe ser controlado por control remoto,Contar con batería y no con alimentación externa,Deben ser seguros y no representar un peligro para otros competidores o espectadores', 500);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `id_equipo` int(13) NOT NULL,
  `representante` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `nombre_de_equipo` varchar(30) NOT NULL,
  `participantes` varchar(30) NOT NULL,
  `comentario` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`id_equipo`, `representante`, `email`, `telefono`, `nombre_de_equipo`, `participantes`, `comentario`) VALUES
(1, 'Rodrigo', 'rodri@gmail.com', '0414-1234567', 'Ingenieros roboticos', 'Rodrigo,Jesus,Luis,María', 'Buena suerte a todos'),
(2, 'Pauline', 'p4u123@gmail.com', '0414-1114567', 'Ideas productivas', 'Pauline,Liliana,Antony', ''),
(3, 'Miguel', 'M1key9090@gmail.com', '0412-7544567', 'Robots de la suerte', 'Miguel,Orlando', ''),
(4, 'Angelo', 'Anyel@gmail.com', '0412-7227321', 'inventores', 'Angelo,Olivia', ''),
(6, 'Fred', 'FredJhon@gmail.com', '0412-1217321', 'dúo dinamico', 'Fred,Teresa', ''),
(7, 'Jose', 'JoseYosh@gmail.com', '0412-1111321', 'trio alucinante', 'Jose,Susi,Louisa', ''),
(18, 'Ana', 'anita86@gmail.com', '0414-1112321', 'hermanos ingenieros', 'Ana,Marcus', ''),
(19, 'Cristin', 'kyky@gmail.com', '0412-1114421', 'DoubleTrouble', 'Cristin,Camila', ''),
(20, 'Henry', 'henrystein@gmail.com', '0412-4517891', 'El trío', 'Henry,Joey,William', ''),
(21, 'Audrey', 'AudreyRo@gmail.com', '0414-9919891', 'AATwins', 'Audrey, Alison', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscripciones`
--

CREATE TABLE `inscripciones` (
  `id_inscripcion` int(13) NOT NULL,
  `idCategoria` int(13) NOT NULL,
  `idEquipo` int(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `inscripciones`
--

INSERT INTO `inscripciones` (`id_inscripcion`, `idCategoria`, `idEquipo`) VALUES
(1, 1, 1),
(2, 3, 2),
(3, 2, 3),
(4, 1, 4),
(5, 2, 4),
(7, 3, 6),
(8, 1, 7),
(9, 1, 18),
(10, 2, 18),
(11, 1, 19),
(12, 2, 19),
(13, 3, 20),
(14, 1, 21),
(15, 3, 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `modalidades`
--

CREATE TABLE `modalidades` (
  `id_modalidad` int(13) NOT NULL,
  `nombre_modalidad` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `modalidades`
--

INSERT INTO `modalidades` (`id_modalidad`, `nombre_modalidad`) VALUES
(1, 'Batalla de Robots'),
(5, 'Robots arduino'),
(4, 'Soluciones computacionales'),
(3, 'Soluciones Industriales'),
(2, 'Vehículos Autónomos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `padrinos`
--

CREATE TABLE `padrinos` (
  `id_padrino` int(13) NOT NULL,
  `idEquipo` int(13) NOT NULL,
  `idPatrocinador` int(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `padrinos`
--

INSERT INTO `padrinos` (`id_padrino`, `idEquipo`, `idPatrocinador`) VALUES
(1, 2, 3),
(2, 4, 5),
(4, 19, 11),
(5, 21, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patrocinadores`
--

CREATE TABLE `patrocinadores` (
  `id_patrocinador` int(13) NOT NULL,
  `nombre_comercial` varchar(30) NOT NULL,
  `persona_de_contacto` varchar(30) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `idPatrocinio` int(13) NOT NULL,
  `comentario` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `patrocinadores`
--

INSERT INTO `patrocinadores` (`id_patrocinador`, `nombre_comercial`, `persona_de_contacto`, `telefono`, `idPatrocinio`, `comentario`) VALUES
(1, 'KEL', 'Juan', '0414-1237777', 1, ''),
(2, 'UVM', 'Marilyn', '0412-7527377', 1, ''),
(3, 'Todo Repuestos', 'Jhon', '0414-3324187', 5, 'Buena suerte Muchachos'),
(4, 'Company J.S', 'Norman', '0414-7542211', 1, 'Patrocinador normal'),
(5, 'Lutronic', 'Daniel', '0414-7547878', 5, 'Buena suerte a todos'),
(8, 'Proyeciones Vista', 'Amelia', '0414-1112333', 2, 'suerte'),
(11, 'Insdustrias Rosales', 'Patricia', '0414-1112959', 5, ''),
(12, 'BH org', 'Kenny', '0414-1317979', 3, ''),
(13, 'Sol de Oro', 'Alfalfa Viper', '0424-7846410', 2, 'hola >:D'),
(14, 'Silver Circuits', 'Sofía', '0414-5657979', 2, ''),
(20, 'Circuits Corp', 'Pepe', '0414-5257979', 5, ''),
(21, 'Observatorio Lumen', 'Jesús Rosales', '0412-1234999', 5, ''),
(22, 'ProductsG', 'Manuel', '0412-9033567', 3, 'hola :D');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patrocinios`
--

CREATE TABLE `patrocinios` (
  `id_patrocinio` int(13) NOT NULL,
  `nombre_patrocinio` varchar(30) NOT NULL,
  `monto` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `patrocinios`
--

INSERT INTO `patrocinios` (`id_patrocinio`, `nombre_patrocinio`, `monto`) VALUES
(1, 'Diamante', '100$'),
(2, 'Oro', '80$'),
(3, 'Plata', '60$'),
(4, 'Bronce', 'libre'),
(5, 'Padrino', 'libre');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id_categoria`),
  ADD UNIQUE KEY `nombre_categoria` (`nombre_categoria`),
  ADD KEY `idModalidad` (`idModalidad`);

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`id_equipo`),
  ADD UNIQUE KEY `nombre_de_equipo` (`nombre_de_equipo`);

--
-- Indices de la tabla `inscripciones`
--
ALTER TABLE `inscripciones`
  ADD PRIMARY KEY (`id_inscripcion`),
  ADD KEY `idCategoria` (`idCategoria`),
  ADD KEY `idEquipo` (`idEquipo`);

--
-- Indices de la tabla `modalidades`
--
ALTER TABLE `modalidades`
  ADD PRIMARY KEY (`id_modalidad`),
  ADD UNIQUE KEY `nombre_modalidad` (`nombre_modalidad`);

--
-- Indices de la tabla `padrinos`
--
ALTER TABLE `padrinos`
  ADD PRIMARY KEY (`id_padrino`),
  ADD KEY `idPatrocinador` (`idPatrocinador`),
  ADD KEY `idEquipo` (`idEquipo`);

--
-- Indices de la tabla `patrocinadores`
--
ALTER TABLE `patrocinadores`
  ADD PRIMARY KEY (`id_patrocinador`),
  ADD UNIQUE KEY `nombre_comercial` (`nombre_comercial`),
  ADD KEY `idPatrocinio` (`idPatrocinio`);

--
-- Indices de la tabla `patrocinios`
--
ALTER TABLE `patrocinios`
  ADD PRIMARY KEY (`id_patrocinio`),
  ADD UNIQUE KEY `nombre_patrocinio` (`nombre_patrocinio`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id_categoria` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `id_equipo` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `inscripciones`
--
ALTER TABLE `inscripciones`
  MODIFY `id_inscripcion` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `modalidades`
--
ALTER TABLE `modalidades`
  MODIFY `id_modalidad` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `padrinos`
--
ALTER TABLE `padrinos`
  MODIFY `id_padrino` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `patrocinadores`
--
ALTER TABLE `patrocinadores`
  MODIFY `id_patrocinador` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `patrocinios`
--
ALTER TABLE `patrocinios`
  MODIFY `id_patrocinio` int(13) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD CONSTRAINT `idModalidad` FOREIGN KEY (`idModalidad`) REFERENCES `modalidades` (`id_modalidad`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `inscripciones`
--
ALTER TABLE `inscripciones`
  ADD CONSTRAINT `idCategoria` FOREIGN KEY (`idCategoria`) REFERENCES `categorias` (`id_categoria`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `idEquipo` FOREIGN KEY (`idEquipo`) REFERENCES `equipos` (`id_equipo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `padrinos`
--
ALTER TABLE `padrinos`
  ADD CONSTRAINT `idPatrocinador` FOREIGN KEY (`idPatrocinador`) REFERENCES `patrocinadores` (`id_patrocinador`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `padrinos_ibfk_1` FOREIGN KEY (`idEquipo`) REFERENCES `equipos` (`id_equipo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `patrocinadores`
--
ALTER TABLE `patrocinadores`
  ADD CONSTRAINT `idPatrocinio` FOREIGN KEY (`idPatrocinio`) REFERENCES `patrocinios` (`id_patrocinio`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
