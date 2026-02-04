CREATE TABLE jobs (
    jobs_id varchar(30) not null primary key unique,
    jobs_title varchar(255) not null unique,
    jobs_contry varchar(100) not null,
    jobs_city varchar(50) not null,
    jobs_region varchar(50) not null,
    jobs_created datetime not null,
    jobs_publish_at datetime not null,
    jobs_logo_company varchar(255) not null,
    jobs_name_hiring varchar(50) not null,
    extra_jobs_desc json not null
)