-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: management_bus_service
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `subTitle` varchar(255) DEFAULT NULL,
  `hashtag` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,'Xe giường nằm Limousine – đỉnh cao mới của ngành xe khách','hello everyone','[4]','https://storage.googleapis.com/vex-config/cms-tool/destination/images/3/img_hero.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,'Xe limousine đi Vũng Tàu: Tổng hợp top 6 xe chất lượng cao','hello everyone','[4]','https://storage.googleapis.com/vex-config/cms-tool/destination/images/3/img_hero.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,'Review xe limousine đi Đà Lạt: những câu hỏi thường gặp','hello everyone','[4]','https://storage.googleapis.com/vex-config/cms-tool/destination/images/3/img_hero.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(4,'Xe limousine đi Sapa: Tổng hợp top các hãng xe chất lượng cao','hello everyone','[4]','https://storage.googleapis.com/vex-config/cms-tool/destination/images/3/img_hero.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(5,'Sài Gòn - Đà Lạt','Từ 200.000đ','[1]','https://storage.googleapis.com/vex-config/cms-tool/destination/images/3/img_hero.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(6,'Sài Gòn - Nha Trang','Từ 231.000đ','[1]','https://storage.googleapis.com/vex-config/cms-tool/destination/images/5/img_hero.png?v1','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(7,'Sài Gòn - Phan Thiết','Từ 170.000đ','[1]','https://storage.googleapis.com/vex-config/cms-tool/destination/images/4/img_hero.png?v1','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(8,'Nha Trang - Sài Gòn','Từ 250.000đ','[1]','https://storage.googleapis.com/vex-config/cms-tool/destination/images/2/img_hero.png?v1','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(9,'Sài Gòn - Vũng Tàu','Từ 150.000đ','[1]','https://storage.googleapis.com/vex-config/cms-tool/destination/images/1/img_hero.png?v1','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(10,'Hà Nội - Hải Phòng','Từ 100.000đ','[1]','https://storage.googleapis.com/vex-config/cms-tool/destination/images/6/img_hero.png?v1','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(11,'Ưu đãi các tuyến đường HOT lên đến 50%','Từ 200.000đ','[2, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/163/img_card.png','An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(12,'Tổng hợp chương trình khuyến mãi trong tháng','Từ 200.000đ','[2, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/137/img_card.png','An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.','<div><h2 data-v-843a2434=\"\" id=\"n5c68130f\"><strong data-v-843a2434=\"\">Singapore Ở Đâu?</strong></h2><a data-v-843a2434=\"\" target=\"_blank\" href=\"https://www.klook.com/vi/city/6-singapore-things-to-do/\"><div className=\"header-banner-comp\"><div style=\"width: 100%; padding-bottom: 52.3333%; height: 0px;\"><img data-src=\"https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1658922743/blog/s3nkzmxb6sl8nvutj7bg.webp\" alt=\"du-lich-singapore\" style=\"opacity: 1;\" src=\"https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1658922743/blog/s3nkzmxb6sl8nvutj7bg.webp\"></div> <div className=\"image-caption\">Nguồn ảnh: Unsplash</div></div></a><div data-v-843a2434=\"\" className=\"p-txt\">Nếu bạn là người mới đến Singapore, có lẽ bạn đang tự hỏi làm thế nào mà một thành phố có diện tích khiêm tốn lại là một trong những quốc gia trẻ và thành công nhất thế giới phải không nào! Singapore là một hòn đảo nhiệt đới đầy nắng ở Đông Nam Á, ngoài khơi cực Nam của Bán đảo Malaysia. Nhìn trên bản đồ, bạn có thể dễ dàng thấy Singapore nằm giữa Malaysia và Indonesia.&nbsp;</div></div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(13,'Chuyến xe tựu trường - 6000 vé xe miễn phí tặng sinh viên','Từ 200.000đ','[2, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/161/img_card.png','An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(14,'Ưu đãi bất ngờ khi đặt AliBus','Từ 200.000đ','[2, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/167/img_card.png','An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(15,'Dành cho KH mới - Giảm đến 25% khi đặt AliBus','Từ 200.000đ','[2, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/164/img_card.png','An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(16,'Dành cho KH mới - Giảm đến 25% khi đặt AliBus','Từ 200.000đ','[2, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/165/img_card.png','An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(17,'Ưu đãi các tuyến đường HOT lên đến 50%','Từ 200.000đ','[3, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/163/img_card.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(18,'Tổng hợp chương trình khuyến mãi trong tháng','Từ 200.000đ','[3, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/137/img_card.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(19,'Chuyến xe tựu trường - 6000 vé xe miễn phí tặng sinh viên','Từ 200.000đ','[3, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/161/img_card.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(20,'Ưu đãi bất ngờ khi đặt AliBus','Từ 200.000đ','[3, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/167/img_card.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(21,'Nhà xe chất lượng cao','5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa chọn.','[5]','https://storage.googleapis.com/fe-production/svgIcon/bus-car-icon.svg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(22,'Đặt vé dễ dàng','Đặt vé chỉ với 60s. Chọn xe yêu thích cực nhanh và thuận tiện.','[5]','https://storage.googleapis.com/fe-production/svgIcon/yellow-ticket-icon.svg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(23,'Đảm bảo có vé','Hoàn ngay 150% nếu không có vé, mang đến hành trình trọn vẹn.','[5]','https://storage.googleapis.com/fe-production/svgIcon/completement-icon.svg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(24,'Nhiều ưu đãi','Hàng ngàn ưu đãi cực chất độc quyền tại AliBus.','[5]','https://storage.googleapis.com/fe-production/svgIcon/coupon-icon.svg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(25,'Ưu đãi các tuyến đường HOT lên đến 50%','Từ 200.000đ','[6, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/163/img_card.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(26,'Tổng hợp chương trình khuyến mãi trong tháng','Từ 200.000đ','[6, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/137/img_card.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(27,'Chuyến xe tựu trường - 6000 vé xe miễn phí tặng sinh viên','Từ 200.000đ','[6, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/161/img_card.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(28,'Ưu đãi bất ngờ khi đặt AliBus','Từ 200.000đ','[6, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/167/img_card.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(29,'Ưu đãi các tuyến đường HOT lên đến 50%','Từ 200.000đ','[7, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/163/img_card.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(30,'Tổng hợp chương trình khuyến mãi trong tháng','Từ 200.000đ','[7, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/137/img_card.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(31,'Chuyến xe tựu trường - 6000 vé xe miễn phí tặng sinh viên','Từ 200.000đ','[7, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/161/img_card.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(32,'Ưu đãi bất ngờ khi đặt AliBus','Từ 200.000đ','[7, 4]','https://storage.googleapis.com/vex-config/cms-tool/post/images/167/img_card.png','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(33,'Bến xe miền Đông','','[11]','https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(34,'Bến xe Gia Lâm','','[11]','https://storage.googleapis.com/fe-production/images/bx-gia-lam.jpg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(35,'Bến xe Nước Ngầm','','[11]','https://storage.googleapis.com/fe-production/images/bx-nuoc-ngam.jpg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(36,'Bến xe Mỹ Đình','','[11]','https://storage.googleapis.com/fe-production/images/bx-my-dinh.jpg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(37,'Bến xe Trung tâm Đà Nẵng','','[11]','https://storage.googleapis.com/fe-production/images/bx-gia-lam.jpg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(38,'Bến xe An Sương','','[11]','https://storage.googleapis.com/fe-production/images/bx-nuoc-ngam.jpg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(39,'Bến xe miền Tây','','[11]','https://storage.googleapis.com/fe-production/images/bx-my-dinh.jpg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(40,'Câu hỏi thường gặp','faq','[12]','https://storage.googleapis.com/fe-production/images/bx-my-dinh.jpg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(41,'Thông tin liên hệ','contact','[12]','https://storage.googleapis.com/fe-production/images/bx-my-dinh.jpg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(42,'Giới thiệu về AliBus','info','[12]','https://storage.googleapis.com/fe-production/images/bx-my-dinh.jpg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(43,'Quy chế','tandc','[12]','https://storage.googleapis.com/fe-production/images/bx-my-dinh.jpg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(44,'Hướng dẫn đặt vé và thanh toán vé','payment-instruction','[12]','https://storage.googleapis.com/fe-production/images/bx-my-dinh.jpg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(45,'CHÍNH SÁCH BẢO MẬT THÔNG TIN CÁ NHÂN NGƯỜI DÙNG','privacy-policy','[12]','https://storage.googleapis.com/fe-production/images/bx-my-dinh.jpg','<div className=\"text-red-400\">Test</div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(46,'Ngã tư Nội Bài ở đâu? Từ Nội Bài đón xe như thế nào?','Ngã tư Nội Bài ở đâu? Từ Nội Bài đón xe như thế nào? chắc hẳn là thắc mắc của khá nhiều du khách khi lần đầu di chuyển từ các tỉnh thành khác đến Hà Nội bằng máy bay. Cùng Blog AliBusgiải đáp thông tin này ở bài viết sau đây nhé.','[6, 4]','https://storage.googleapis.com/blogvxr-uploads/2022/09/Untitled-design-16-750x440.jpg','<div><p><span style=\"font-weight: 400;\">Du lịch đến các tỉnh bằng xe khách khá đơn giản, thuận tiện nên được rất nhiều hành khách ưa chuộng. Các tuyến đường du lịch Miền Bắc cũng không ngoại lệ.</span><span style=\"font-weight: 400;\">Tuy nhiên, với một số hành khách đi từ miền Trung và miền Nam thì di chuyển bằng xe khách khá mất thời gian.&nbsp;</span></p><p><span style=\"font-weight: 400;\">Giải pháp đơn giảm nhất là di chuyển bằng máy bay đến Sân bay Nội Bài, sau đó tiếp tục di chuyển bằng xe khách đến các điểm du lịch. Vậy Ngã tư Nội Bài ở đâu? Đón xe ở Ngã tư Nội Bài như thế nào? Hãy cùng <a href=\"https://blog.vexere.com/\">Blog VeXeRe</a> tìm hiểu ngay sau đây nhé!</span></p></div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(47,'Kinh nghiệm du lịch Sapa chi tiết nhất từ A – Z','Blog AliBus- Kênh du lịch và xe khách Việt Nam','[10, 4]','https://storage.googleapis.com/blogvxr-uploads/2022/09/2-4.jpg','Thị trấn Sapa thuộc tỉnh Lào Cai. Là địa điểm du lịch lý tưởng bởi nơi đây có khí hậu mát mẻ quanh năm. Thời tiết có đủ 4 mùa Xuân – Hạ – Thu – Đông trong một ngày. Nếu đang “thèm” được đắm chìm trong bầu không khí trong lành của đất trời, đừng ngần ngại lên kế hoạch cho một chuyến ghé thăm “xứ sở sương mù” vào mùa hè này! Cùng Blog AliBusbỏ túi một vài kinh nghiệm du lịch Sapa hay ho cho chuyến đi sắp tới của bạn nhé!','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(48,'Xe đi từ Vũng Tàu lên Đà Lạt: Top 2 hãng xe giá rẻ, chất lượng nhất','Blog AliBus- Kênh du lịch và xe khách Việt Nam','[10, 4]','https://storage.googleapis.com/blogvxr-uploads/2022/09/Untitled-design-14-750x440.jpg','Chọn hãng xe nào chất lượng đi Vũng Tàu – Đà Lạt chắc hẳn là nỗi bạn tâm của khá nhiều du khách. Cùng Blog AliBustham khảo ngay review chi tiết top 2 hãng xe đi từ Vũng Tàu lên Đà Lạt đang được quan tâm nhất sau đây nhé!','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(49,'Hà Nội đi Mộc Châu bao nhiêu tiếng?','Blog AliBus- Kênh du lịch và xe khách Việt Nam','[10, 4]','https://storage.googleapis.com/blogvxr-uploads/2022/09/Untitled-design-10-750x440.jpg','Hà Nội đi Mộc Châu bao nhiêu tiếng hẳn là thắc mắc của khá nhiều du khách khi lần đầu lên kế hoạch cho chuyến du lịch Sapa. Cùng Blog AliBustìm ngay câu trả lời qua bài viết sau đây nhé!','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(50,'Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum perspiciatis iusto, provident qui nam dolorum corporis.','Noster tincidunt reprimique ad pro','[10, 4]','https://source.unsplash.com/random/480x360','Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(51,'Sân bay Nội Bài đi Mộc Châu bao nhiêu km?','Blog AliBus- Kênh du lịch và xe khách Việt Nam','[10, 4]','https://storage.googleapis.com/blogvxr-uploads/2022/09/Untitled-design-11-750x440.jpg','Di chuyển đến Mộc Châu từ Hà Nội là cách thuận tiện nhất hiện nay cho tất cả hành khách. Để tiết kiệm thời gian thì nhiều du khách ngoại quốc hoặc những khách hàng đi từ các tỉnh khác thường sẽ chọn đi từ Sân bay. Vậy từ Sân bay Nội Bài đi Mộc Châu bao nhiêu km? Hãy cùng Blog AliBustìm hiểu ngay sau đây!','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(52,'Ngã tư Nội Bài ở đâu? Từ Nội Bài đón xe như thế nào?','Ngã tư Nội Bài ở đâu? Từ Nội Bài đón xe như thế nào? chắc hẳn là thắc mắc của khá nhiều du khách khi lần đầu di chuyển từ các tỉnh thành khác đến Hà Nội bằng máy bay. Cùng Blog AliBusgiải đáp thông tin này ở bài viết sau đây nhé.','[10, 4]','https://storage.googleapis.com/blogvxr-uploads/2022/09/Untitled-design-16-750x440.jpg','<div><p><span style=\"font-weight: 400;\">Du lịch đến các tỉnh bằng xe khách khá đơn giản, thuận tiện nên được rất nhiều hành khách ưa chuộng. Các tuyến đường du lịch Miền Bắc cũng không ngoại lệ.</span><span style=\"font-weight: 400;\">Tuy nhiên, với một số hành khách đi từ miền Trung và miền Nam thì di chuyển bằng xe khách khá mất thời gian.&nbsp;</span></p><p><span style=\"font-weight: 400;\">Giải pháp đơn giảm nhất là di chuyển bằng máy bay đến Sân bay Nội Bài, sau đó tiếp tục di chuyển bằng xe khách đến các điểm du lịch. Vậy Ngã tư Nội Bài ở đâu? Đón xe ở Ngã tư Nội Bài như thế nào? Hãy cùng <a href=\"https://blog.vexere.com/\">Blog VeXeRe</a> tìm hiểu ngay sau đây nhé!</span></p></div>','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(53,'Kinh nghiệm du lịch Sapa chi tiết nhất từ A – Z','Blog AliBus- Kênh du lịch và xe khách Việt Nam','[10, 4]','https://storage.googleapis.com/blogvxr-uploads/2022/09/2-4.jpg','Thị trấn Sapa thuộc tỉnh Lào Cai. Là địa điểm du lịch lý tưởng bởi nơi đây có khí hậu mát mẻ quanh năm. Thời tiết có đủ 4 mùa Xuân – Hạ – Thu – Đông trong một ngày. Nếu đang “thèm” được đắm chìm trong bầu không khí trong lành của đất trời, đừng ngần ngại lên kế hoạch cho một chuyến ghé thăm “xứ sở sương mù” vào mùa hè này! Cùng Blog AliBusbỏ túi một vài kinh nghiệm du lịch Sapa hay ho cho chuyến đi sắp tới của bạn nhé!','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(54,'Xe đi từ Vũng Tàu lên Đà Lạt: Top 2 hãng xe giá rẻ, chất lượng nhất','Blog AliBus- Kênh du lịch và xe khách Việt Nam','[10, 4]','https://storage.googleapis.com/blogvxr-uploads/2022/09/Untitled-design-14-750x440.jpg','Chọn hãng xe nào chất lượng đi Vũng Tàu – Đà Lạt chắc hẳn là nỗi bạn tâm của khá nhiều du khách. Cùng Blog AliBustham khảo ngay review chi tiết top 2 hãng xe đi từ Vũng Tàu lên Đà Lạt đang được quan tâm nhất sau đây nhé!','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(55,'Hà Nội đi Mộc Châu bao nhiêu tiếng?','Blog AliBus- Kênh du lịch và xe khách Việt Nam','[10, 4]','https://storage.googleapis.com/blogvxr-uploads/2022/09/Untitled-design-10-750x440.jpg','Hà Nội đi Mộc Châu bao nhiêu tiếng hẳn là thắc mắc của khá nhiều du khách khi lần đầu lên kế hoạch cho chuyến du lịch Sapa. Cùng Blog AliBustìm ngay câu trả lời qua bài viết sau đây nhé!','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(56,'Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum perspiciatis iusto, provident qui nam dolorum corporis.','Noster tincidunt reprimique ad pro','[10, 4]','https://source.unsplash.com/random/480x360','Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(57,'Sân bay Nội Bài đi Mộc Châu bao nhiêu km?','Blog AliBus- Kênh du lịch và xe khách Việt Nam','[10, 4]','https://storage.googleapis.com/blogvxr-uploads/2022/09/Untitled-design-11-750x440.jpg','Di chuyển đến Mộc Châu từ Hà Nội là cách thuận tiện nhất hiện nay cho tất cả hành khách. Để tiết kiệm thời gian thì nhiều du khách ngoại quốc hoặc những khách hàng đi từ các tỉnh khác thường sẽ chọn đi từ Sân bay. Vậy từ Sân bay Nội Bài đi Mộc Châu bao nhiêu km? Hãy cùng Blog AliBustìm hiểu ngay sau đây!','<div className=\"text-green-400\">Test 1</div>','2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banners`
--

DROP TABLE IF EXISTS `banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `banners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `banner` varchar(255) NOT NULL,
  `enable` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banners`
--

LOCK TABLES `banners` WRITE;
/*!40000 ALTER TABLE `banners` DISABLE KEYS */;
INSERT INTO `banners` VALUES (1,'AliBus - Cam kết hoàn 150% nếu nhà xe không giữ vé','','https://static.vexere.com/production/banners/910/FS060922__leaderboard_1920x922-(5).jpg',1,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,'2AliBus - Cam kết hoàn 150% nếu nhà xe không giữ vé','Thuê xe giường nằm 32 - 38 - 40 chỗ','https://static.vexere.com/production/banners/910/FS060922__leaderboard_1920x922-(5).jpg',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,'3AliBus - Cam kết hoàn 150% nếu nhà xe không giữ vé','','https://static.vexere.com/production/banners/910/FS060922__leaderboard_1920x922-(5).jpg',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(4,'4AliBus - Cam kết hoàn 150% nếu nhà xe không giữ vé','Thuê xe giường nằm 32 - 38 - 40 chỗ','https://static.vexere.com/production/banners/910/FS060922__leaderboard_1920x922-(5).jpg',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(5,'5AliBus - Cam kết hoàn 150% nếu nhà xe không giữ vé','','https://static.vexere.com/production/banners/910/FS060922__leaderboard_1920x922-(5).jpg',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(6,'6AliBus - Cam kết hoàn 150% nếu nhà xe không giữ vé','Thuê xe giường nằm 32 - 38 - 40 chỗ','https://static.vexere.com/production/banners/910/FS060922__leaderboard_1920x922-(5).jpg',0,'2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bustypes`
--

DROP TABLE IF EXISTS `bustypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bustypes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bustypes`
--

LOCK TABLES `bustypes` WRITE;
/*!40000 ALTER TABLE `bustypes` DISABLE KEYS */;
INSERT INTO `bustypes` VALUES (1,'ghế','2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,'ghế nằm','2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,'giường nằm','2022-08-17 02:03:16','2022-08-17 02:21:41'),(4,'giường nằm 034','2022-08-17 02:03:16','2022-08-17 02:21:41'),(5,'limousine','2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `bustypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hashtags`
--

DROP TABLE IF EXISTS `hashtags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hashtags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hashtags`
--

LOCK TABLES `hashtags` WRITE;
/*!40000 ALTER TABLE `hashtags` DISABLE KEYS */;
INSERT INTO `hashtags` VALUES (1,'POPULAR','2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,'PROMOTION','2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,'SERVICE','2022-08-17 02:03:16','2022-08-17 02:21:41'),(4,'NEWS','2022-08-17 02:03:16','2022-08-17 02:21:41'),(5,'CONNECTION','2022-08-17 02:03:16','2022-08-17 02:21:41'),(6,'OFFERS','2022-08-17 02:03:16','2022-08-17 02:21:41'),(7,'OPERATOR_PARTNER','2022-08-17 02:03:16','2022-08-17 02:21:41'),(8,'COMPANY','2022-08-17 02:03:16','2022-08-17 02:21:41'),(9,'BUS','2022-08-17 02:03:16','2022-08-17 02:21:41'),(10,'TRIP','2022-08-17 02:03:16','2022-08-17 02:21:41'),(11,'STATION','2022-08-17 02:03:16','2022-08-17 02:21:41'),(12,'GLOBAL','2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `hashtags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderstatuses`
--

DROP TABLE IF EXISTS `orderstatuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderstatuses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderstatuses`
--

LOCK TABLES `orderstatuses` WRITE;
/*!40000 ALTER TABLE `orderstatuses` DISABLE KEYS */;
INSERT INTO `orderstatuses` VALUES (1,'Waiting','2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,'Success','2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,'Ignore','2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `orderstatuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passengercarcompanies`
--

DROP TABLE IF EXISTS `passengercarcompanies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passengercarcompanies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `review` varchar(255) NOT NULL,
  `comments` int NOT NULL,
  `image` text NOT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passengercarcompanies`
--

LOCK TABLES `passengercarcompanies` WRITE;
/*!40000 ALTER TABLE `passengercarcompanies` DISABLE KEYS */;
INSERT INTO `passengercarcompanies` VALUES (1,'Xe Sao Việt','10/2, District 12','<div className=\"text-green-400\">Test 1</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,'Xe Hải Âu','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,'Xe Văn Minh','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(4,'Xe Taxi Hoa Mai','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(5,'Xe Queen Cafe','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(6,'Xe Quang Nghị','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(7,'Xe Hạ Long Travel','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(8,'Xe Hưng Long','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(9,'Xe Xuân Trường','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(10,'Xe Quốc Đạt','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(11,'Xe Xuân Tráng Limousine','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(12,'Xe Hạnh Cafe','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(13,'Xe Thanh Bình Xanh','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(14,'Xe Nam Á Châu','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(15,'Xe Trọng Minh','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(16,'Xe Thiện Thành limousine','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(17,'Xe Khanh Phong','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(18,'Xe Ngọc Ánh Sài Gòn','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(19,'Xe Hồng Sơn Phú Yên','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(20,'Xe An Anh (Quê Hương)','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41'),(21,'Xe Hoa Mai','10/2, District 12','<div className=\'text-alibus>Hello</div>','{\"safety\":6.5,\"clear info\":7,\"facilities\":5,\"service quality\":8,\"employee\":5.5}',234,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg;https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','Note that in the previous example, we have created objects inside another class and accessed the members from that class.','2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `passengercarcompanies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentmethods`
--

DROP TABLE IF EXISTS `paymentmethods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymentmethods` (
  `id` int NOT NULL AUTO_INCREMENT,
  `logo` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `subTitle` varchar(255) DEFAULT NULL,
  `promo` varchar(255) DEFAULT NULL,
  `conditionLink` varchar(255) DEFAULT NULL,
  `paymentIntro` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentmethods`
--

LOCK TABLES `paymentmethods` WRITE;
/*!40000 ALTER TABLE `paymentmethods` DISABLE KEYS */;
INSERT INTO `paymentmethods` VALUES (1,'https://storage.googleapis.com/fe-production/httpImage/moca.svg','Ví điện Tử Moca trên ứng dụng Grab/ Ứng dụng ví Moca','Điện thoại của bạn phải được cài đặt ứng dụng Grab hoặc Moca','Thanh toán tại ví Moca - Nhập mã ALIBUS, giảm 10% tối đa 30K - ','#','<p>1. Bạn sẽ được chuyển đến ứng dụng Moca</p> <p> 2. Nhập thông tin thẻ thanh toán mới hoặc chọn thanh toán qua Moca thẻ đã liên kết với Moca </p> <p>3. Chọn \"Thanh toán\" để tiến thành thanh toán vé</p>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,'https://storage.googleapis.com/fe-production/httpImage/momo.svg','Ví MoMo','Điện thoại của bạn phải được cài đặt ứng dụng MoMo','Thanh toán tại ví MoMo - Nhập mã MOMOVXR, giảm 10% tối đa 30K - ','#','<p>1. Bạn sẽ được chuyển đến ứng dụng Momo</p> <p> 2. Nhập thông tin thẻ thanh toán mới hoặc chọn thanh toán qua Momo thẻ đã liên kết với Momo </p> <p>3. Chọn \"Thanh toán\" để tiến thành thanh toán vé</p>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,'https://storage.googleapis.com/fe-production/httpImage/zalo_pay.svg','Ví Zalopay','Điện thoại của bạn phải được cài đặt ứng dụng Zalopay','','#','<p>1. Bạn sẽ được chuyển đến ứng dụng ZaloPay</p> <p> 2. Nhập thông tin thẻ thanh toán mới hoặc chọn thanh toán qua ZaloPay thẻ đã liên kết với ZaloPay </p> <p>3. Chọn \"Thanh toán\" để tiến thành thanh toán vé</p>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(4,'https://storage.googleapis.com/fe-production/httpImage/airpay.svg','Ví ShopeePay','Điện thoại của bạn phải được cài đặt ứng dụng ShopeePay','','#','<p>1. Bạn sẽ được chuyển đến ứng dụng ShopeePay</p> <p> 2. Nhập thông tin thẻ thanh toán mới hoặc chọn thanh toán qua ShopeePay thẻ đã liên kết với ShopeePay </p> <p>3. Chọn \"Thanh toán\" để tiến thành thanh toán vé</p>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(5,'https://storage.googleapis.com/fe-production/httpImage/credit_card.svg','Thẻ thanh toán quốc tế','Thẻ Visa, MasterCard, JCB','','#','','2022-08-17 02:03:16','2022-08-17 02:21:41'),(6,'https://storage.googleapis.com/fe-production/httpImage/vn_pay.svg','Thanh toán VNPAY - QR','Thiết bị cần cài đặt Ứng dụng ngân hàng (Mobile Banking) hoặc Ví VNPAY','','#','<p>1. Bạn sẽ được chuyển đến ứng dụng Ví VNPAY</p> <p> 2. Nhập thông tin thẻ thanh toán mới hoặc chọn thanh toán qua Ví VNPAY thẻ đã liên kết với Ví VNPAY </p> <p>3. Chọn \"Thanh toán\" để tiến thành thanh toán vé</p>','2022-08-17 02:03:16','2022-08-17 02:21:41'),(7,'https://storage.googleapis.com/fe-production/httpImage/bank_transfer.svg','Chuyển khoản ngân hàng','Chuyển khoản đến tài khoản ngân hàng của VeXeRe','','#','','2022-08-17 02:03:16','2022-08-17 02:21:41'),(8,'https://storage.googleapis.com/fe-production/httpImage/atm.svg','Tài khoản phải có đăng ký Internet banking','Thẻ Visa, MasterCard, JCB','','#','','2022-08-17 02:03:16','2022-08-17 02:21:41'),(9,'https://storage.googleapis.com/fe-production/httpImage/local_convenience_store.svg','Tại cửa hàng tiện lợi hoặc siêu thị','Bạn có thể thanh toán tại các cửa hàng tiện lợi, Viettel post hoặc siêu thị','','#','','2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `paymentmethods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paymentstatuses`
--

DROP TABLE IF EXISTS `paymentstatuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paymentstatuses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paymentstatuses`
--

LOCK TABLES `paymentstatuses` WRITE;
/*!40000 ALTER TABLE `paymentstatuses` DISABLE KEYS */;
INSERT INTO `paymentstatuses` VALUES (1,'Done','2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,'Not yet','2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `paymentstatuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `points`
--

DROP TABLE IF EXISTS `points`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `points` (
  `id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `station` varchar(255) NOT NULL,
  `shuttle` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `points`
--

LOCK TABLES `points` WRITE;
/*!40000 ALTER TABLE `points` DISABLE KEYS */;
INSERT INTO `points` VALUES (1,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T17:30:28.123Z','Sân Bay Tân Sơn Nhất',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T17:35:28.123Z','Cây xăng 184 Nguyễn Văn Trỗi',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T17:45:28.123Z','Parkson Cantavil Quận 2',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(4,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T18:07:28.123Z','Công viên Lê Văn Tám',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(5,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T18:08:28.123Z','KDL Văn Thánh',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(6,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T18:10:28.123Z','Đầu cao tốc - Công viên Ngã Ba An Phú',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(7,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T18:30:28.123Z','Chùa Vạn Phật Quang - Đại Tòng Lâm Tự',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(8,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T18:40:28.123Z','Chợ Phước Hòa',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(9,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T18:40:28.123Z','Chùa Vạn Thông',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(10,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T18:45:28.123Z','Nhà thờ Lam Sơn',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(11,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T18:50:28.123Z','Ủy ban nhân dân xã Tân Hải',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(12,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T18:55:28.123Z','Cây xăng Kim Hải',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(13,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T18:55:28.123Z','Giáo xứ Chu Hải',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(14,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T18:55:28.123Z','Chợ Chu Hải',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(15,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T18:55:28.123Z','Nhà thờ Kim Hải',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(16,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T19:00:28.123Z','Bánh canh Trảng Bàng Năm Dung',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(17,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T09:00:28.123Z','Dọc QL 51 - Tân Thành',1,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(18,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T19:10:28.123Z','Cổng chào Bà Rịa',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(19,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T19:30:28.123Z','Văn Phòng Vũng Tàu',0,'2022-08-17 02:03:16','2022-08-17 02:21:41'),(20,'Đối diện Hẻm 353 Phạm Ngũ Lão, P.Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh','#','2022-08-22T09:40:28.123Z','Nội thành Vũng Tàu',1,'2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `points` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provinces`
--

DROP TABLE IF EXISTS `provinces`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `provinces` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provinces`
--

LOCK TABLES `provinces` WRITE;
/*!40000 ALTER TABLE `provinces` DISABLE KEYS */;
INSERT INTO `provinces` VALUES (1,'Điện Biên','2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,'Hòa Bình','2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,'Lai Châu','2022-08-17 02:03:16','2022-08-17 02:21:41'),(4,'Lào Cai','2022-08-17 02:03:16','2022-08-17 02:21:41'),(5,'Sơn La','2022-08-17 02:03:16','2022-08-17 02:21:41'),(6,'Yên Bái','2022-08-17 02:03:16','2022-08-17 02:21:41'),(7,'Bắc Giang','2022-08-17 02:03:16','2022-08-17 02:21:41'),(8,'Bắc Kạn','2022-08-17 02:03:16','2022-08-17 02:21:41'),(9,'Cao Bằng','2022-08-17 02:03:16','2022-08-17 02:21:41'),(10,'Hà Giang','2022-08-17 02:03:16','2022-08-17 02:21:41'),(11,'Lạng Sơn','2022-08-17 02:03:16','2022-08-17 02:21:41'),(12,'Phú Thọ','2022-08-17 02:03:16','2022-08-17 02:21:41'),(13,'Quảng Ninh','2022-08-17 02:03:16','2022-08-17 02:21:41'),(14,'Thái Nguyên','2022-08-17 02:03:16','2022-08-17 02:21:41'),(15,'Tuyên Quang','2022-08-17 02:03:16','2022-08-17 02:21:41'),(16,'Bắc Ninh','2022-08-17 02:03:16','2022-08-17 02:21:41'),(17,'Hà Nam','2022-08-17 02:03:16','2022-08-17 02:21:41'),(18,'Thành phố Hà Nội','2022-08-17 02:03:16','2022-08-17 02:21:41'),(19,'Hải Dương','2022-08-17 02:03:16','2022-08-17 02:21:41'),(20,'Thành phố Hải Phòng','2022-08-17 02:03:16','2022-08-17 02:21:41'),(21,'Hưng Yên','2022-08-17 02:03:16','2022-08-17 02:21:41'),(22,'Nam Định','2022-08-17 02:03:16','2022-08-17 02:21:41'),(23,'Ninh Bình','2022-08-17 02:03:16','2022-08-17 02:21:41'),(24,'Thái Bình','2022-08-17 02:03:16','2022-08-17 02:21:41'),(25,'Vĩnh Phúc','2022-08-17 02:03:16','2022-08-17 02:21:41'),(26,'Hà Tĩnh','2022-08-17 02:03:16','2022-08-17 02:21:41'),(27,'Nghệ An','2022-08-17 02:03:16','2022-08-17 02:21:41'),(28,'Quảng Bình','2022-08-17 02:03:16','2022-08-17 02:21:41'),(29,'Quảng Trị','2022-08-17 02:03:16','2022-08-17 02:21:41'),(30,'Thanh Hóa','2022-08-17 02:03:16','2022-08-17 02:21:41'),(31,'Thừa Thiên Huế','2022-08-17 02:03:16','2022-08-17 02:21:41'),(32,'Bình Định','2022-08-17 02:03:16','2022-08-17 02:21:41'),(33,'Bình Thuận','2022-08-17 02:03:16','2022-08-17 02:21:41'),(34,'Thành phố Đà Nẵng','2022-08-17 02:03:16','2022-08-17 02:21:41'),(35,'Khánh Hòa','2022-08-17 02:03:16','2022-08-17 02:21:41'),(36,'Ninh Thuận','2022-08-17 02:03:16','2022-08-17 02:21:41'),(37,'Phú Yên','2022-08-17 02:03:16','2022-08-17 02:21:41'),(38,'Quảng Nam','2022-08-17 02:03:16','2022-08-17 02:21:41'),(39,'Quảng Ngãi','2022-08-17 02:03:16','2022-08-17 02:21:41'),(40,'Đắk Lắk','2022-08-17 02:03:16','2022-08-17 02:21:41'),(41,'Đắk Nông','2022-08-17 02:03:16','2022-08-17 02:21:41'),(42,'Gia Lai','2022-08-17 02:03:16','2022-08-17 02:21:41'),(43,'Kon Tum','2022-08-17 02:03:16','2022-08-17 02:21:41'),(44,'Lâm Đồng','2022-08-17 02:03:16','2022-08-17 02:21:41'),(45,'Bà Rịa Vũng Tàu','2022-08-17 02:03:16','2022-08-17 02:21:41'),(46,'Bình Dương','2022-08-17 02:03:16','2022-08-17 02:21:41'),(47,'Bình Phước','2022-08-17 02:03:16','2022-08-17 02:21:41'),(48,'Đồng Nai','2022-08-17 02:03:16','2022-08-17 02:21:41'),(49,'Thành phố Hồ Chí Minh','2022-08-17 02:03:16','2022-08-17 02:21:41'),(50,'Tây Ninh','2022-08-17 02:03:16','2022-08-17 02:21:41'),(51,'An Giang','2022-08-17 02:03:16','2022-08-17 02:21:41'),(52,'Bạc Liêu','2022-08-17 02:03:16','2022-08-17 02:21:41'),(53,'Bến Tre','2022-08-17 02:03:16','2022-08-17 02:21:41'),(54,'Cà Mau','2022-08-17 02:03:16','2022-08-17 02:21:41'),(55,'Cần Thơ','2022-08-17 02:03:16','2022-08-17 02:21:41'),(56,'Đồng Tháp','2022-08-17 02:03:16','2022-08-17 02:21:41'),(57,'Hậu Giang','2022-08-17 02:03:16','2022-08-17 02:21:41'),(58,'Kiên Giang','2022-08-17 02:03:16','2022-08-17 02:21:41'),(59,'Long An','2022-08-17 02:03:16','2022-08-17 02:21:41'),(60,'Sóc Trăng','2022-08-17 02:03:16','2022-08-17 02:21:41'),(61,'Tiền Giang','2022-08-17 02:03:16','2022-08-17 02:21:41'),(62,'Trà Vinh','2022-08-17 02:03:16','2022-08-17 02:21:41'),(63,'Vĩnh Long','2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `provinces` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seats`
--

DROP TABLE IF EXISTS `seats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vehicledId` int DEFAULT NULL,
  `seatStatusId` int DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `vehicledId` (`vehicledId`),
  KEY `seatStatusId` (`seatStatusId`),
  CONSTRAINT `seats_ibfk_1` FOREIGN KEY (`vehicledId`) REFERENCES `vehicles` (`id`),
  CONSTRAINT `seats_ibfk_2` FOREIGN KEY (`seatStatusId`) REFERENCES `statusseat` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seats`
--

LOCK TABLES `seats` WRITE;
/*!40000 ALTER TABLE `seats` DISABLE KEYS */;
INSERT INTO `seats` VALUES (1,2,1,'A9','2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,3,1,'A19','2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,1,2,'A7','2022-08-17 02:03:16','2022-08-17 02:21:41'),(4,2,1,'A11','2022-08-17 02:03:16','2022-08-17 02:21:41'),(5,2,1,'A9','2022-08-17 02:03:16','2022-08-17 02:21:41'),(6,7,2,'B19','2022-08-17 02:03:16','2022-08-17 02:21:41'),(7,1,2,'B8','2022-08-17 02:03:16','2022-08-17 02:21:41'),(8,5,1,'B11','2022-08-17 02:03:16','2022-08-17 02:21:41'),(9,3,2,'C19','2022-08-17 02:03:16','2022-08-17 02:21:41'),(10,4,2,'C10','2022-08-17 02:03:16','2022-08-17 02:21:41'),(11,5,1,'C11','2022-08-17 02:03:16','2022-08-17 02:21:41'),(12,1,1,'B7','2022-08-17 02:03:16','2022-08-17 02:21:41'),(13,1,1,'B6','2022-08-17 02:03:16','2022-08-17 02:21:41'),(14,1,1,'B5','2022-08-17 02:03:16','2022-08-17 02:21:41'),(15,1,1,'B4','2022-08-17 02:03:16','2022-08-17 02:21:41'),(16,1,2,'B3','2022-08-17 02:03:16','2022-08-17 02:21:41'),(17,1,1,'B2','2022-08-17 02:03:16','2022-08-17 02:21:41'),(18,1,1,'B1','2022-08-17 02:03:16','2022-08-17 02:21:41'),(19,1,1,'A1','2022-08-17 02:03:16','2022-08-17 02:21:41'),(20,1,2,'A2','2022-08-17 02:03:16','2022-08-17 02:21:41'),(21,1,2,'A3','2022-08-17 02:03:16','2022-10-18 04:24:16'),(22,1,1,'A4','2022-08-17 02:03:16','2022-08-17 02:21:41'),(23,1,2,'A5','2022-08-17 02:03:16','2022-10-18 04:34:50'),(24,1,1,'A6','2022-08-17 02:03:16','2022-08-17 02:21:41'),(25,1,1,'A8','2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `seats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20220816042534-create-station.js'),('20220817085059-create-user.js'),('20220819014745-create-trip.js'),('20220822042914-create-passenger-car-companies.js'),('20220822050724-create-vehicle.js'),('20220822050803-create-seat.js'),('20221005075635-create-payment-method.js'),('20221006042643-create-bus-type.js'),('20221006052623-create-user-type.js'),('20221006052715-create-status-seat.js'),('20221006082148-create-hash-tag.js'),('20221006082255-create-banner.js'),('20221006083037-create-province.js'),('20221006094438-create-article.js'),('20221014093656-create-point.js'),('20221015082226-create-order-status.js'),('20221015082243-create-payment-status.js'),('20221015095124-create-ticket.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stations`
--

DROP TABLE IF EXISTS `stations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `provinceId` int DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `provinceId` (`provinceId`),
  CONSTRAINT `stations_ibfk_1` FOREIGN KEY (`provinceId`) REFERENCES `provinces` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stations`
--

LOCK TABLES `stations` WRITE;
/*!40000 ALTER TABLE `stations` DISABLE KEYS */;
INSERT INTO `stations` VALUES (1,49,'Bến xe miền Đông','292 Đinh Bộ Lĩnh, P. 26, Q. Bình Thạnh, Thành phố Hồ Chí Minh','https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,49,'Bến xe Gia Lâm','395 Kinh Đ. Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh','https://storage.googleapis.com/fe-production/images/bx-gia-lam.jpg','2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,49,'Bến xe Nước Ngầm','395 Kinh Đ. Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh','https://storage.googleapis.com/fe-production/images/bx-nuoc-ngam.jpg','2022-08-17 02:03:16','2022-08-17 02:21:41'),(4,49,'Bến xe Mỹ Đình','395 Kinh Đ. Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh','https://storage.googleapis.com/fe-production/images/bx-my-dinh.jpg','2022-08-17 02:03:16','2022-08-17 02:21:41'),(5,49,'Bến xe Trung tâm Đà Nẵng','395 Kinh Đ. Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh','https://storage.googleapis.com/fe-production/images/bx-gia-lam.jpg','2022-08-17 02:03:16','2022-08-17 02:21:41'),(6,49,'Bến xe An Sương','292 Đinh Bộ Lĩnh, P. 26, Q. Bình Thạnh, Thành phố Hồ Chí Minh','https://storage.googleapis.com/fe-production/images/bx-nuoc-ngam.jpg','2022-08-17 02:03:16','2022-08-17 02:21:41'),(7,49,'Bến xe miền Tây','395 Kinh Đ. Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh','https://storage.googleapis.com/fe-production/images/bx-my-dinh.jpg','2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `stations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statusseats`
--

DROP TABLE IF EXISTS `statusseats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statusseats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statusseats`
--

LOCK TABLES `statusseats` WRITE;
/*!40000 ALTER TABLE `statusseats` DISABLE KEYS */;
INSERT INTO `statusseats` VALUES (1,'AVAILABLE','2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,'BOOKED','2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `statusseats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tickets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `paymentMethodId` int DEFAULT NULL,
  `vehicledId` int DEFAULT NULL,
  `orderStatusId` int DEFAULT NULL,
  `paymentStatusId` int DEFAULT NULL,
  `point` varchar(255) NOT NULL,
  `seatSelected` varchar(255) NOT NULL,
  `identify` varchar(255) NOT NULL,
  `note` text,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `numberPhone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `paymentMethodId` (`paymentMethodId`),
  KEY `vehicledId` (`vehicledId`),
  KEY `orderStatusId` (`orderStatusId`),
  KEY `paymentStatusId` (`paymentStatusId`),
  CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`paymentMethodId`) REFERENCES `paymentmethods` (`id`),
  CONSTRAINT `tickets_ibfk_2` FOREIGN KEY (`vehicledId`) REFERENCES `vehicles` (`id`),
  CONSTRAINT `tickets_ibfk_3` FOREIGN KEY (`orderStatusId`) REFERENCES `orderstatuses` (`id`),
  CONSTRAINT `tickets_ibfk_4` FOREIGN KEY (`paymentStatusId`) REFERENCES `paymentstatuses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (1,1,1,2,2,'{\"dropoff\":10,\"pickup\":4}','[21]','025129525','<div>aaaaaaaa</div>','Ngô V A','hanh@yopmail.com','0987654321','2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,3,2,1,1,'{\"dropoff\":10,\"pickup\":4}','[1,4]','025129525','<div>aaaaaaaa</div>','Ngô V A','ango@yopmail.com','0987654321','2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,7,3,3,2,'{\"dropoff\":10,\"pickup\":4}','[2]','025129525','<div>aaaaaaaa</div>','Ngô V A','ango@yopmail.com','0987654321','2022-08-17 02:03:16','2022-08-17 02:21:41'),(4,4,2,3,1,'{\"dropoff\":10,\"pickup\":4}','[5]','025129525','<div>aaaaaaaa</div>','Ngô V A','hanh@yopmail.com','0987654321','2022-08-17 02:03:16','2022-08-17 02:21:41'),(5,6,4,2,1,'{\"dropoff\":10,\"pickup\":4}','[8,11]','025129525','<div>aaaaaaaa</div>','Ngô V A','ango@yopmail.com','0987654321','2022-08-17 02:03:16','2022-08-17 02:21:41'),(6,9,5,1,2,'{\"dropoff\":10,\"pickup\":4}','[8,11]','025129525','<div>aaaaaaaa</div>','Ngô V A','ango@yopmail.com','0987654321','2022-08-17 02:03:16','2022-08-17 02:21:41'),(7,1,1,1,2,'{\"dropoff\":8,\"pickup\":2}','[21]','097777777','Waiting','Nguyễn Thị Hồng Hạnh','hanh@yopmail.com','0987654321','2022-10-18 04:24:16','2022-10-18 04:24:16'),(8,6,1,1,2,'{\"dropoff\":10,\"pickup\":3}','[23]','122222222','22','Nguyễn Thị Hồng Hạnh','hanh@yopmail.com','0987654321','2022-10-18 04:34:50','2022-10-18 04:34:50');
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trips`
--

DROP TABLE IF EXISTS `trips`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trips` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fromStation` int DEFAULT NULL,
  `toStation` int DEFAULT NULL,
  `startTime` int NOT NULL,
  `price` float NOT NULL,
  `image` varchar(255) NOT NULL,
  `tripAt` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fromStation` (`fromStation`),
  KEY `toStation` (`toStation`),
  CONSTRAINT `trips_ibfk_1` FOREIGN KEY (`fromStation`) REFERENCES `stations` (`id`),
  CONSTRAINT `trips_ibfk_2` FOREIGN KEY (`toStation`) REFERENCES `stations` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trips`
--

LOCK TABLES `trips` WRITE;
/*!40000 ALTER TABLE `trips` DISABLE KEYS */;
INSERT INTO `trips` VALUES (1,3,7,120,450000,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','2022-09-29 13:03:16','2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,3,7,90,540000,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','2022-09-29 02:03:16','2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,2,4,120,1200000,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','2022-08-17 02:03:16','2022-08-17 02:03:16','2022-08-17 02:21:41'),(4,3,5,80,500000,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','2022-08-17 02:03:16','2022-08-17 02:03:16','2022-08-17 02:21:41'),(5,7,6,90,450000,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','2022-08-17 02:03:16','2022-08-17 02:03:16','2022-08-17 02:21:41'),(6,3,4,90,450000,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','2022-08-17 02:03:16','2022-08-17 02:03:16','2022-08-17 02:21:41'),(7,6,4,90,450000,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','2022-08-17 02:03:16','2022-08-17 02:03:16','2022-08-17 02:21:41'),(8,1,7,90,450000,'https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg','2022-08-17 02:03:16','2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `trips` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `typeId` int DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `typeId` (`typeId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`typeId`) REFERENCES `usertypes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,'Nguyễn Thị Hồng Hạnh','hanh@yopmail.com','$2a$10$5yCG87u4cTNoznBx5IKFRuiLiTlW3mDgQjb3fuymaxNxC3nbPLBjy','//www.gravatar.com/avatar/15852772572042c890c0cb5c222ddf96','0987654321','2022-08-17 02:03:16','2022-10-18 04:36:58'),(2,2,'Alice Nguyen','alice@yopmail.com','$2a$10$5yCG87u4cTNoznBx5IKFRuiLiTlW3mDgQjb3fuymaxNxC3nbPLBjy','//www.gravatar.com/avatar/15852772572042c890c0cb5c222ddf96','0987654321','2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,2,'Nhung Nguyen','nhung@yopmail.com','$2a$10$5yCG87u4cTNoznBx5IKFRuiLiTlW3mDgQjb3fuymaxNxC3nbPLBjy','//www.gravatar.com/avatar/15852772572042c890c0cb5c222ddf96','0987654321','2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertypes`
--

DROP TABLE IF EXISTS `usertypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertypes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertypes`
--

LOCK TABLES `usertypes` WRITE;
/*!40000 ALTER TABLE `usertypes` DISABLE KEYS */;
INSERT INTO `usertypes` VALUES (1,'admin','2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,'client','2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,'super admin','2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `usertypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicles`
--

DROP TABLE IF EXISTS `vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `passengerCarCompaniesId` int DEFAULT NULL,
  `tripId` int DEFAULT NULL,
  `busTypeId` int DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `numberFloor` int NOT NULL,
  `numberSeat` int NOT NULL,
  `promo` varchar(255) NOT NULL,
  `point` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `passengerCarCompaniesId` (`passengerCarCompaniesId`),
  KEY `tripId` (`tripId`),
  KEY `busTypeId` (`busTypeId`),
  CONSTRAINT `vehicles_ibfk_1` FOREIGN KEY (`passengerCarCompaniesId`) REFERENCES `passengercarcompanies` (`id`),
  CONSTRAINT `vehicles_ibfk_2` FOREIGN KEY (`tripId`) REFERENCES `trip` (`id`),
  CONSTRAINT `vehicles_ibfk_3` FOREIGN KEY (`busTypeId`) REFERENCES `bustype` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles`
--

LOCK TABLES `vehicles` WRITE;
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
INSERT INTO `vehicles` VALUES (1,1,1,3,'52-C1 0012','https://storage.googleapis.com/vex-config/cms-tool/post/images/163/img_card.png',2,16,'{\"percent\":0.2,\"max\":250}','{\"pickup\":[1,2,3,4,5,6],\"dropoff\":[7,8,9,10,11,12,13,14,15,16,17,18,19,20]}','2022-08-17 02:03:16','2022-08-17 02:21:41'),(2,2,3,2,'72-C1 0012','https://storage.googleapis.com/vex-config/cms-tool/post/images/163/img_card.png',2,45,'{\"percent\":0.5,\"max\":350}','{\"pickup\":[1,2,3,4,5,6],\"dropoff\":[7,8,9,10,11,12,13,14,15,16,17,18,19,20]}','2022-08-17 02:03:16','2022-08-17 02:21:41'),(3,3,6,2,'60-C1 0012','https://storage.googleapis.com/vex-config/cms-tool/post/images/163/img_card.png',2,24,'{\"percent\":0.3,\"max\":250}','{\"pickup\":[1,2,3,4,5,6],\"dropoff\":[7,8,9,10,11,12,13,14,15,16,17,18,19,20]}','2022-08-17 02:03:16','2022-08-17 02:21:41'),(4,3,1,2,'61-C1 0012','https://storage.googleapis.com/vex-config/cms-tool/post/images/163/img_card.png',2,24,'{\"percent\":0.5,\"max\":50}','{\"pickup\":[1,2,3,4,5,6],\"dropoff\":[7,8,9,10,11,12,13,14,15,16,17,18,19,20]}','2022-08-17 02:03:16','2022-08-17 02:21:41'),(5,3,1,3,'61-C1 0014','https://storage.googleapis.com/vex-config/cms-tool/post/images/163/img_card.png',2,24,'{\"percent\":0.5,\"max\":100}','{\"pickup\":[1,2,3,4,5,6],\"dropoff\":[7,8,9,10,11,12,13,14,15,16,17,18,19,20]}','2022-08-17 02:03:16','2022-08-17 02:21:41'),(6,2,1,3,'61-C1 0016','https://storage.googleapis.com/vex-config/cms-tool/post/images/163/img_card.png',2,24,'{\"percent\":0.4,\"max\":300}','{\"pickup\":[1,2,3,4,5,6],\"dropoff\":[7,8,9,10,11,12,13,14,15,16,17,18,19,20]}','2022-08-17 02:03:16','2022-08-17 02:21:41'),(7,2,2,1,'61-C1 0018','https://storage.googleapis.com/vex-config/cms-tool/post/images/163/img_card.png',2,24,'{\"percent\":0.3,\"max\":230}','{\"pickup\":[1,2,3,4,5,6],\"dropoff\":[7,8,9,10,11,12,13,14,15,16,17,18,19,20]}','2022-08-17 02:03:16','2022-08-17 02:21:41');
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-18 12:03:09
