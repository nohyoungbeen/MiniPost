# create table
CREATE TABLE `minipost` (
    `id` int NOT NULL AUTO_INCREMENT,
    `title` varchar(45) NOT NULL,
    `content` text NOT NULL,
    `like` tinyint NOT NULL DEFAULT '0',
    PRIMARY KEY (`id`),
    UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# insert
INSERT INTO minipost (title,content) VALUES ('안녕하세요','감사합니다'),('감사합니다','안녕하세요');