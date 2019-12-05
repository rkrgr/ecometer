-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: db_ecometer
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_einheit`
--

DROP TABLE IF EXISTS `tbl_einheit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_einheit` (
  `einheit_ID` int(11) NOT NULL,
  `einheit_name` varchar(45) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `einheit_beschreibung` longtext COLLATE utf8mb4_german2_ci,
  PRIMARY KEY (`einheit_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_einheit`
--

LOCK TABLES `tbl_einheit` WRITE;
/*!40000 ALTER TABLE `tbl_einheit` DISABLE KEYS */;
INSERT INTO `tbl_einheit` VALUES (1,'t',''),(2,'kWh',NULL),(3,'m^3',NULL),(4,'J',NULL);
/*!40000 ALTER TABLE `tbl_einheit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_jahr`
--

DROP TABLE IF EXISTS `tbl_jahr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_jahr` (
  `jahr_ID` int(11) NOT NULL,
  `jahr_name` varchar(45) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  PRIMARY KEY (`jahr_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_jahr`
--

LOCK TABLES `tbl_jahr` WRITE;
/*!40000 ALTER TABLE `tbl_jahr` DISABLE KEYS */;
INSERT INTO `tbl_jahr` VALUES (1,'2013'),(2,'2014'),(3,'2015'),(4,'2016'),(5,'2017'),(6,'2018'),(7,'2019'),(8,'2020'),(9,'2021'),(10,'2022'),(11,'2023');
/*!40000 ALTER TABLE `tbl_jahr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_kategorie`
--

DROP TABLE IF EXISTS `tbl_kategorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_kategorie` (
  `kategorie_ID` int(11) NOT NULL,
  `kategorie_name` varchar(45) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `kategorie_beschreibung` longtext COLLATE utf8mb4_german2_ci,
  PRIMARY KEY (`kategorie_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_kategorie`
--

LOCK TABLES `tbl_kategorie` WRITE;
/*!40000 ALTER TABLE `tbl_kategorie` DISABLE KEYS */;
INSERT INTO `tbl_kategorie` VALUES (1,'Energie',NULL),(2,'Abfall',NULL),(3,'Frischwasser',NULL),(4,'Abwasser',NULL),(5,'Grünbepflanzung',NULL),(6,'Wärmeenergie',NULL),(7,'Sonstige',NULL);
/*!40000 ALTER TABLE `tbl_kategorie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_kategorie_einheit`
--

DROP TABLE IF EXISTS `tbl_kategorie_einheit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_kategorie_einheit` (
  `ktgeinheit_ID` int(11) NOT NULL,
  `ktgeinheit_beschreibung` longtext COLLATE utf8mb4_german2_ci,
  `kgteinheit_name` varchar(45) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `fk_einheit` int(11) DEFAULT NULL,
  `fk_kategorie` int(11) DEFAULT NULL,
  PRIMARY KEY (`ktgeinheit_ID`),
  KEY `fk_einheit_idx` (`fk_einheit`),
  KEY `fk_kategorie_idx` (`fk_kategorie`),
  CONSTRAINT `fk_einheit` FOREIGN KEY (`fk_einheit`) REFERENCES `tbl_einheit` (`einheit_ID`),
  CONSTRAINT `fk_kategorie` FOREIGN KEY (`fk_kategorie`) REFERENCES `tbl_kategorie` (`kategorie_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_kategorie_einheit`
--

LOCK TABLES `tbl_kategorie_einheit` WRITE;
/*!40000 ALTER TABLE `tbl_kategorie_einheit` DISABLE KEYS */;
INSERT INTO `tbl_kategorie_einheit` VALUES (1,'','Energie in kWh',2,1),(2,NULL,'Energie in t',1,1);
/*!40000 ALTER TABLE `tbl_kategorie_einheit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_massnahme`
--

DROP TABLE IF EXISTS `tbl_massnahme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_massnahme` (
  `massnahme_ID` int(11) NOT NULL,
  `massnahme_name` varchar(45) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `massnahme_datum` date DEFAULT NULL,
  `massnahme_offentlich` varchar(45) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `massnahme_emissionsfaktor` decimal(10,0) DEFAULT NULL,
  `massnahme_absoluteeinsparung` decimal(10,0) DEFAULT NULL,
  `massnahme_coeinsparung` decimal(10,0) DEFAULT NULL,
  `massnahme_beschreibung` longtext COLLATE utf8mb4_german2_ci,
  `fk_mas_unternehmen` int(11) DEFAULT NULL,
  `fk_mas_kategorie` int(11) DEFAULT NULL,
  `fk_mas_einheit` int(11) DEFAULT NULL,
  PRIMARY KEY (`massnahme_ID`),
  KEY `fk_mas_unternehmen_idx` (`fk_mas_unternehmen`),
  KEY `fk_mas_kategorie_idx` (`fk_mas_kategorie`),
  KEY `fk_mas_einheit_idx` (`fk_mas_einheit`),
  CONSTRAINT `fk_mas_einheit` FOREIGN KEY (`fk_mas_einheit`) REFERENCES `tbl_einheit` (`einheit_ID`),
  CONSTRAINT `fk_mas_kategorie` FOREIGN KEY (`fk_mas_kategorie`) REFERENCES `tbl_kategorie` (`kategorie_ID`),
  CONSTRAINT `fk_mas_unternehmen` FOREIGN KEY (`fk_mas_unternehmen`) REFERENCES `tbl_unternehmen` (`unternehmen_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_massnahme`
--

LOCK TABLES `tbl_massnahme` WRITE;
/*!40000 ALTER TABLE `tbl_massnahme` DISABLE KEYS */;
INSERT INTO `tbl_massnahme` VALUES (1,'Hecke pflanzen','2003-03-20','1',NULL,NULL,1,NULL,1,7,1),(2,'Abfall reduzieren','2004-04-20','0',NULL,NULL,1,NULL,2,2,1);
/*!40000 ALTER TABLE `tbl_massnahme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_rechnungsdaten`
--

DROP TABLE IF EXISTS `tbl_rechnungsdaten`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_rechnungsdaten` (
  `rechnungsdaten_ID` int(11) NOT NULL,
  `rechnungsdaten_verbrauchswert` double DEFAULT NULL,
  `rechnungsdaten_beschreibung` longtext COLLATE utf8mb4_german2_ci,
  `rechnungsdaten_startdatum` date DEFAULT NULL,
  `rechnungsdaten_enddatum` date DEFAULT NULL,
  `rechnungsdaten_emissionsfaktor` decimal(10,0) DEFAULT NULL,
  `fk_rech_einheit` int(11) DEFAULT NULL,
  `fk_rech_unternehmen` int(11) DEFAULT NULL,
  `fk_rech_kategorie` int(11) DEFAULT NULL,
  PRIMARY KEY (`rechnungsdaten_ID`),
  KEY `fk_einheit_idx` (`fk_rech_einheit`),
  KEY `fk_rech_unternehmen_idx` (`fk_rech_unternehmen`),
  KEY `fk_rech_kategorie_idx` (`fk_rech_kategorie`),
  CONSTRAINT `fk_rech_einheit` FOREIGN KEY (`fk_rech_einheit`) REFERENCES `tbl_einheit` (`einheit_ID`),
  CONSTRAINT `fk_rech_kategorie` FOREIGN KEY (`fk_rech_kategorie`) REFERENCES `tbl_kategorie` (`kategorie_ID`),
  CONSTRAINT `fk_rech_unternehmen` FOREIGN KEY (`fk_rech_unternehmen`) REFERENCES `tbl_unternehmen` (`unternehmen_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_rechnungsdaten`
--

LOCK TABLES `tbl_rechnungsdaten` WRITE;
/*!40000 ALTER TABLE `tbl_rechnungsdaten` DISABLE KEYS */;
INSERT INTO `tbl_rechnungsdaten` VALUES (1,200,NULL,'2001-01-20','2031-12-20',1,2,1,1),(2,400,NULL,'2001-01-20','2031-12-20',1,2,2,1);
/*!40000 ALTER TABLE `tbl_rechnungsdaten` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_umsatz`
--

DROP TABLE IF EXISTS `tbl_umsatz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_umsatz` (
  `umsatz_ID` int(11) NOT NULL,
  `umsatz_wert` double DEFAULT NULL,
  `umsatz_beschreibung` longtext COLLATE utf8mb4_german2_ci,
  `fk_jahr` int(11) DEFAULT NULL,
  `fk_unternehmen` int(11) DEFAULT NULL,
  PRIMARY KEY (`umsatz_ID`),
  KEY `fk_jahr_idx` (`fk_jahr`),
  KEY `fk_unternehmen_idx` (`fk_unternehmen`),
  CONSTRAINT `fk_jahr` FOREIGN KEY (`fk_jahr`) REFERENCES `tbl_jahr` (`jahr_ID`) ON DELETE SET NULL,
  CONSTRAINT `fk_unternehmen` FOREIGN KEY (`fk_unternehmen`) REFERENCES `tbl_unternehmen` (`unternehmen_ID`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_umsatz`
--

LOCK TABLES `tbl_umsatz` WRITE;
/*!40000 ALTER TABLE `tbl_umsatz` DISABLE KEYS */;
INSERT INTO `tbl_umsatz` VALUES (1,100000,NULL,2,1),(2,200000,NULL,2,2),(3,500000,NULL,3,2),(4,400000,NULL,3,1);
/*!40000 ALTER TABLE `tbl_umsatz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_unternehmen`
--

DROP TABLE IF EXISTS `tbl_unternehmen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_unternehmen` (
  `unternehmen_ID` int(11) NOT NULL,
  `unternehmen_name` varchar(45) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `unternehmen_passwort` varchar(45) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `unternehmen_mail` varchar(45) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `unternehmen_beschreibung` varchar(45) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  PRIMARY KEY (`unternehmen_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_unternehmen`
--

LOCK TABLES `tbl_unternehmen` WRITE;
/*!40000 ALTER TABLE `tbl_unternehmen` DISABLE KEYS */;
INSERT INTO `tbl_unternehmen` VALUES (1,'Unternehmen1','ichbindieeins','unternehmen1@mail.de',NULL),(2,'Unternehmen2','ichbindiezwei','unternehmen2@mail.de',NULL);
/*!40000 ALTER TABLE `tbl_unternehmen` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-05  4:15:11
