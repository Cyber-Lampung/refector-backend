CREATE TABLE jobs_testing (
    jobs_testing_id varchar(100) not null primary key,
    jobs_testing json not null,
    created_at datetime not null
)