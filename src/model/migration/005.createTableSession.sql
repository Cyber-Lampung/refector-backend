 
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` VARCHAR(100) NOT NULL PRIMARY KEY ,
  `user_id` VARCHAR(100) not null,
  `session_token` VARCHAR(255) not null,
  `created_at` DATETIME not null default CURRENT_TIMESTAMP,
  `expires_at` DATETIME not null,
  `used` BOOLEAN DEFAULT FALSE
) 
