-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: ecometer_new
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
  `einheit_ID` int(11) NOT NULL AUTO_INCREMENT,
  `einheit_name` varchar(45) COLLATE utf8mb4_german2_ci NOT NULL,
  `einheit_beschreibung` longtext COLLATE utf8mb4_german2_ci,
  PRIMARY KEY (`einheit_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_einheit`
--

LOCK TABLES `tbl_einheit` WRITE;
/*!40000 ALTER TABLE `tbl_einheit` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_einheit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_jahr`
--

DROP TABLE IF EXISTS `tbl_jahr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_jahr` (
  `jahr_ID` int(11) NOT NULL AUTO_INCREMENT,
  `jahr_name` int(10) unsigned NOT NULL,
  `jahr_beschreibung` longtext COLLATE utf8mb4_german2_ci,
  PRIMARY KEY (`jahr_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_jahr`
--

LOCK TABLES `tbl_jahr` WRITE;
/*!40000 ALTER TABLE `tbl_jahr` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_jahr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_kategorie`
--

DROP TABLE IF EXISTS `tbl_kategorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_kategorie` (
  `kategorie_ID` int(11) NOT NULL AUTO_INCREMENT,
  `kategorie_name` varchar(45) COLLATE utf8mb4_german2_ci NOT NULL,
  `kategorie_beschreibung` longtext COLLATE utf8mb4_german2_ci,
  PRIMARY KEY (`kategorie_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_kategorie`
--

LOCK TABLES `tbl_kategorie` WRITE;
/*!40000 ALTER TABLE `tbl_kategorie` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_kategorie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_kategorie_einheit`
--

DROP TABLE IF EXISTS `tbl_kategorie_einheit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_kategorie_einheit` (
  `ktgeinheit_name` varchar(45) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `fk_einheit` int(11) NOT NULL,
  `fk_kategorie` int(11) NOT NULL,
  `ktg_beschreibung` longtext COLLATE utf8mb4_german2_ci,
  PRIMARY KEY (`fk_einheit`,`fk_kategorie`),
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
/*!40000 ALTER TABLE `tbl_kategorie_einheit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_massnahme`
--

DROP TABLE IF EXISTS `tbl_massnahme`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_massnahme` (
  `massnahme_ID` int(11) NOT NULL AUTO_INCREMENT,
  `massnahme_name` varchar(120) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `massnahme_datum` date NOT NULL,
  `massnahme_offentlich` tinyint(1) NOT NULL,
  `massnahme_emissionsfaktor` decimal(10,0) unsigned DEFAULT NULL,
  `massnahme_absoluteeinsaprung` decimal(10,0) unsigned DEFAULT NULL,
  `massnahme_co2einsparung` decimal(10,0) unsigned DEFAULT NULL,
  `massnahme_beschreibung` longtext COLLATE utf8mb4_german2_ci,
  `fk_mass_einheit` int(11) NOT NULL,
  `fk_mass_kategorie` int(11) NOT NULL,
  `fk_mass_unternehmen` int(11) NOT NULL,
  PRIMARY KEY (`massnahme_ID`),
  KEY `fk_mass_einheit_idx` (`fk_mass_einheit`),
  KEY `fk_mass_kategorie_idx` (`fk_mass_kategorie`),
  KEY `fk_mass_unternehmen_idx` (`fk_mass_unternehmen`),
  CONSTRAINT `fk_mass_einheit` FOREIGN KEY (`fk_mass_einheit`) REFERENCES `tbl_einheit` (`einheit_ID`),
  CONSTRAINT `fk_mass_kategorie` FOREIGN KEY (`fk_mass_kategorie`) REFERENCES `tbl_kategorie` (`kategorie_ID`),
  CONSTRAINT `fk_mass_unternehmen` FOREIGN KEY (`fk_mass_unternehmen`) REFERENCES `tbl_unternehmen` (`unternehmen_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_massnahme`
--

LOCK TABLES `tbl_massnahme` WRITE;
/*!40000 ALTER TABLE `tbl_massnahme` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_massnahme` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_rechnung`
--

DROP TABLE IF EXISTS `tbl_rechnung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_rechnung` (
  `rechnung_ID` int(11) NOT NULL AUTO_INCREMENT,
  `rechnung_verbrauchswert` decimal(10,0) unsigned NOT NULL,
  `rechnung_emissionsfaktor` decimal(10,0) unsigned DEFAULT NULL,
  `rechnungsdaten_startdatum` date NOT NULL,
  `rechnung_enddatum` date NOT NULL,
  `fk_rechn_einheit` int(11) NOT NULL,
  `fk_rechn_unternehmen` int(11) NOT NULL,
  `fk_rechn_kategorie` int(11) NOT NULL,
  PRIMARY KEY (`rechnung_ID`),
  KEY `fk_rechn_einheit_idx` (`fk_rechn_einheit`),
  KEY `fk_rechn_unternehmen_idx` (`fk_rechn_unternehmen`),
  KEY `fk_rechn_kategorie_idx` (`fk_rechn_kategorie`),
  CONSTRAINT `fk_rechn_einheit` FOREIGN KEY (`fk_rechn_einheit`) REFERENCES `tbl_einheit` (`einheit_ID`),
  CONSTRAINT `fk_rechn_kategorie` FOREIGN KEY (`fk_rechn_kategorie`) REFERENCES `tbl_kategorie` (`kategorie_ID`),
  CONSTRAINT `fk_rechn_unternehmen` FOREIGN KEY (`fk_rechn_unternehmen`) REFERENCES `tbl_unternehmen` (`unternehmen_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_rechnung`
--

LOCK TABLES `tbl_rechnung` WRITE;
/*!40000 ALTER TABLE `tbl_rechnung` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_rechnung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_umsatz`
--

DROP TABLE IF EXISTS `tbl_umsatz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_umsatz` (
  `umsatz_ID` int(11) NOT NULL AUTO_INCREMENT,
  `umsatz_beschreibung` longtext COLLATE utf8mb4_german2_ci,
  `umsatz_wert` decimal(10,0) unsigned NOT NULL,
  `fk_jahr` int(11) NOT NULL,
  `fk_unternehmen` int(11) NOT NULL,
  PRIMARY KEY (`umsatz_ID`),
  KEY `fk_jahr_idx` (`fk_jahr`),
  KEY `fk_unternehmen_idx` (`fk_unternehmen`),
  CONSTRAINT `fk_jahr` FOREIGN KEY (`fk_jahr`) REFERENCES `tbl_jahr` (`jahr_ID`),
  CONSTRAINT `fk_unternehmen` FOREIGN KEY (`fk_unternehmen`) REFERENCES `tbl_unternehmen` (`unternehmen_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_umsatz`
--

LOCK TABLES `tbl_umsatz` WRITE;
/*!40000 ALTER TABLE `tbl_umsatz` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_umsatz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_unternehmen`
--

DROP TABLE IF EXISTS `tbl_unternehmen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_unternehmen` (
  `unternehmen_ID` int(11) NOT NULL AUTO_INCREMENT,
  `unternehmen_name` varchar(45) COLLATE utf8mb4_german2_ci NOT NULL,
  `unternehmen_passwort` varchar(120) COLLATE utf8mb4_german2_ci NOT NULL,
  `unternehmen_mail` varchar(45) COLLATE utf8mb4_german2_ci DEFAULT NULL,
  `unternehmen_beschreibung` longtext COLLATE utf8mb4_german2_ci,
  PRIMARY KEY (`unternehmen_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_german2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_unternehmen`
--

LOCK TABLES `tbl_unternehmen` WRITE;
/*!40000 ALTER TABLE `tbl_unternehmen` DISABLE KEYS */;
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

-- Dump completed on 2019-12-07 17:41:25
