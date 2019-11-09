-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 09, 2019 at 06:32 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `at_nodrestapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `CategoryID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(150) DEFAULT NULL,
  `Type` enum('1','2') NOT NULL,
  `Image` int(5) DEFAULT NULL,
  `Created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`CategoryID`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`CategoryID`, `Name`, `Type`, `Image`, `Created`) VALUES
(1, 'Testing', '1', 0, '2019-10-17 07:24:22'),
(2, 'Testing', '2', 0, '2019-10-17 07:24:44'),
(3, 'Testing', '2', 0, '2019-10-17 07:25:01'),
(4, 'Testing', '2', 0, '2019-10-17 07:25:02'),
(5, 'Testing', '2', 0, '2019-10-17 07:25:03'),
(6, 'Testing', '2', 0, '2019-10-17 07:25:04'),
(7, 'Vehicle', '1', 0, '2019-10-17 07:25:05');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
CREATE TABLE IF NOT EXISTS `customers` (
  `CustomerID` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(100) NOT NULL,
  `Phone` varchar(12) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `UserName` varchar(100) NOT NULL,
  `PassWord` varchar(100) NOT NULL,
  `Token` varchar(100) DEFAULT NULL,
  `Status` tinyint(2) NOT NULL,
  `Created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`CustomerID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`CustomerID`, `FirstName`, `LastName`, `Phone`, `Email`, `UserName`, `PassWord`, `Token`, `Status`, `Created`) VALUES
(1, 'Atulassan', 'Athavullah', '9876543210', 'atulassan777@gmail.com', 'atulassan777', 'aHGBvwe93Rhx60aq51SkGg==$i1A9Jy7G6AQa5X88PBC58H/JKciS1+uaVxNMwSGS6LmvlXL9XbywXYXgF4pI8ciAQ3qFYMoArrU', 'aHGBvwe93Rhx60aq51SkGg==', 0, '2019-11-07 09:13:30'),
(2, 'Atulassan', 'Athavullah', '9876543210', 'atulassan777@gmail.com', 'atulassan777', '77v4oxQyWzRZGx2ItiWmMw==$aVTrkBb9gkbaRm/BES2aGL74SBKTNLwu68aaAaMSbAWm0VUsFe9iP6gTcRd1H3q9SG2AF7T7Tl2', '77v4oxQyWzRZGx2ItiWmMw==', 0, '2019-11-07 09:13:43'),
(3, 'Atulassan', 'Athavullah', '9876543210', 'atulassan777@gmail.com', 'atulassan777', 'uv6ISdAQXX+MN0oOi7wSfQ==$gUesSGid8BKHL+ZC7gazauoOxG/w8J2fdDKHFeUx3V0T7E/ex4cN5047CbeKQdWoBCBzeGtRsfO', 'uv6ISdAQXX+MN0oOi7wSfQ==', 0, '2019-11-07 09:24:48'),
(4, 'Atulassan', 'Athavullah', '9876543210', 'atulassan777@gmail.com', 'atulassan777', '1WsrEcv1Sc8NU5KOurYk8g==$Ropbrr35eiZlWM8qh3z7+s3sHmXB2Azh05WznCYK0PAVazI82XVvjU4qq/t+g+Y+1k+4+B6KHmW', '1WsrEcv1Sc8NU5KOurYk8g==', 0, '2019-11-07 09:39:06');

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
CREATE TABLE IF NOT EXISTS `media` (
  `MediaID` int(11) NOT NULL AUTO_INCREMENT,
  `FileName` varchar(100) NOT NULL,
  `Directory` varchar(100) NOT NULL,
  `Created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`MediaID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
CREATE TABLE IF NOT EXISTS `order_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(15) NOT NULL,
  `product_id` int(15) NOT NULL,
  `qty` int(5) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `qty`, `created`) VALUES
(1, 10, 1, 10, '2019-10-19 05:32:50'),
(2, 11, 2, 12, '2019-10-19 05:32:50'),
(3, 10, 1, 15, '2019-10-19 05:33:21'),
(4, 10, 1, 15, '2019-10-19 05:33:21');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `ProductID` int(11) NOT NULL AUTO_INCREMENT,
  `CategoryID` int(11) NOT NULL,
  `SKU` varchar(1000) DEFAULT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` text,
  `Unit` int(5) DEFAULT NULL,
  `Price` varchar(10) NOT NULL,
  `OfferPrice` varchar(10) NOT NULL,
  `Stock` int(10) DEFAULT NULL,
  `Image` int(10) DEFAULT NULL,
  `Status` tinyint(2) DEFAULT NULL,
  `Created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ProductID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductID`, `CategoryID`, `SKU`, `Name`, `Description`, `Unit`, `Price`, `OfferPrice`, `Stock`, `Image`, `Status`, `Created`) VALUES
(1, 1, '002', 'Product1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque erat, egestas ac rutrum vel, elementum at dui. Praesent bibendum ipsum vel imperdiet lacinia. Fusce non eros metus. Donec rhoncus, massa non tincidunt elementum, dui arcu convallis mauris, nec faucibus neque ex vel enim. Integer eget dui risus. Quisque fringilla congue elit. Praesent tempus maximus faucibus. Duis porttitor, purus et malesuada efficitur, urna magna consectetur lectus, dignissim commodo nisi libero et turpis.', 50, '150', '120', 50, 20, 1, '2019-10-21 18:30:00'),
(2, 2, '002', 'Product2', 'TEstin Testin Testig Testing Testing', 50, '150', '120', 0, 10, 1, '2019-10-21 18:30:00');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
