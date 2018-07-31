CREATE TABLE IF NOT EXISTS `student`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `code` VARCHAR(100) ,
   `name` VARCHAR(40) ,
   `sex` integer,
   `age` integer,
   `political` VARCHAR(40),
   `origin`  VARCHAR(40),
   `professional` VARCHAR(40),
    PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;