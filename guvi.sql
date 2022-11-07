-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 07, 2022 at 02:01 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guvi`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(30) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `email`, `password`) VALUES
(1, 'Ganesh Krishna', '6380249114', 'ganesh@gmail.com', 'klau7s'),
(2, 'Prithivi Raj', '8489743483', 'gk3946020@gmail.com', 'hekllo'),
(3, 'Ganesh Krishna', '6380249114', 'admin@gmail.com', 'kalus'),
(4, 'maddy', '5565675675', 'hanesh@gmail.com', 'klaus'),
(5, 'maddy', '1234567890', 'madhvan@gmail.com', 'mani'),
(6, 'Srinivas', '7786667676', 'srini@gmail.com', '123'),
(8, '', '', '', ''),
(9, 'sankar raj', '4654465456', 'sankarbro@gmail.com', 'sankarbro'),
(10, '', '', '', ''),
(11, ' Krish', '6380249114', 'gk3946020@gmail.com', 'bhkb'),
(12, 'krish', '638024914', 'gk3946020@gmail.com', 'bhkb'),
(13, 'sankar', '1234567890', 'admin@gmail.com', 'eee'),
(14, 'sundar', '1234567890', 'ganesh@gmail.com', 'eee'),
(15, 'pichai', '1234567890', 'ganeshkrishna.k@anjaconline.org', 'eee'),
(16, 'karthi', '987654321', 'nithiraj343@gmail.com', 'nithi'),
(17, 'Prithivi Raj', '8489743483', 'admin@gmail.com', 'fff'),
(18, ' Raj', '8489743433', 'raj@gmail.com', 'rrr'),
(19, 'gunner', '9887111111', 'gun@gmail.com', '3333'),
(20, 'Ganesh Krishna', '6380249114', 'ganesh@gmail.com', 'hello');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
