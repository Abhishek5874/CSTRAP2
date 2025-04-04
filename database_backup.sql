﻿-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: c_strap_db
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accommodation_inquiries`
--

DROP TABLE IF EXISTS `accommodation_inquiries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accommodation_inquiries` (
  `name` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `institution` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accommodation_inquiries`
--

LOCK TABLES `accommodation_inquiries` WRITE;
/*!40000 ALTER TABLE `accommodation_inquiries` DISABLE KEYS */;
INSERT INTO `accommodation_inquiries` VALUES (NULL,NULL,NULL),('abhishek','ak587404@gmail.com','sathyabam'),(NULL,NULL,NULL),(NULL,NULL,NULL),(NULL,NULL,NULL),(NULL,NULL,NULL),(NULL,NULL,NULL),(NULL,NULL,NULL),(NULL,NULL,NULL),(NULL,NULL,NULL),(NULL,NULL,NULL),(NULL,NULL,NULL),(NULL,NULL,NULL),(NULL,NULL,NULL),(NULL,NULL,NULL),(NULL,NULL,NULL),(NULL,NULL,NULL),('abhishek','hekko','namaste'),('Abhishek Kumar','harshanmol521@gmail.com','Sathyabama'),('Abhishek Kumar','harshanmol521@gmail.com','Sathyabama'),('Abhishek Kumar','ak587404@gmail.com','Sathyabama'),('Abhishek Kumar','harshanmol521@gmail.com','Sathyabama'),('bhogla','jeymaila521@gmail.com','Sathyabamatas'),('Harsh Anmol ','ak587404@gmail.com','alia'),('Harsh Anmol ','ak587404@gmail.com','alia bhatt'),('Gryffindor','hrishikgupta2015@gmail.com','Sathyabamatas');
/*!40000 ALTER TABLE `accommodation_inquiries` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


-- Dump completed on 2023-10-03  0:28:03
