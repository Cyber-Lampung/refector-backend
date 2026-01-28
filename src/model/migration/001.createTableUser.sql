create table users (
    `user_id` VARCHAR(100) not null,
    `email` VARCHAR(50) not null,
    `username` VARCHAR(100) not null,
    `password` VARCHAR(255) not null,
    `created_at` DATETIME not null default CURRENT_TIMESTAMP,
    `updated_at` DATETIME not null default CURRENT_TIMESTAMP
)

-- insert into users ("user_id", "email", "username", "password", "created_at" ) values ("1", "test@gmail.com", "test", "test", "26-01-2026, 21:34")