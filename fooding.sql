DROP TABLE IF EXISTS `STORE`;
DROP TABLE IF EXISTS `MENU`;
DROP TABLE IF EXISTS `ORDERS`;

CREATE TABLE `STORE` (
	`storeName`	VARCHAR(50)	NOT NULL,
	`storeCode`	VARCHAR(50)	NOT NULL,
	PRIMARY KEY (`storeName`)
);

CREATE TABLE `MENU` (
	`menuName`	VARCHAR(50)	NOT NULL,
	`menuPrice`	INT	NOT NULL,
	`menuImg`	VARCHAR(500)	NULL,
	`menuCNT`	INT	NOT NULL DEFAULT 0,
	`storeName`	VARCHAR(50)	NOT NULL,
	PRIMARY KEY (`menuName`),
	FOREIGN KEY (`storeName`) REFERENCES `STORE`(`storeName`)
);

CREATE TABLE `ORDERS` (
	`orderCode`	INT NOT NULL AUTO_INCREMENT,
	`menuList`	VARCHAR(200)	NOT NULL,
	`phone`	VARCHAR(30),
	`storeName`	VARCHAR(50)	NOT NULL,
	PRIMARY KEY (`orderCode`),
	FOREIGN KEY (`storeName`) REFERENCES `STORE`(`storeName`)
);
