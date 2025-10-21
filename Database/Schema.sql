# Tables


//Role 
     create table roles(
       role_id int auto_increment primary key,
       role_name varchar(100) not null unique
    );

// User 
   create table users(
     user_id int auto_increment primary key,
     email varchar(100) not null unique,
     password_hash varchar(255) not null,
     role_id int not null,
     created_at timestamp default current_timestamp,
     last_login timestamp Null,
     foreign key(role_id) references roles(role_id)
     );

// User Profile 
    create table user_profiles(
       profile_id int auto_increment primary key,
       user_id int not null,
       full_name varchar(100),
       phone varchar(50),
       location varchar(100),
       profile_pic_url varchar(255),
       foreign key (user_id) references users(user_id)
    );
// Users
 create table users(
     user_id int auto_increment primary key,
     email varchar(100) not null unique,
     password_hash varchar(255) not null,
     role_id int not null,
     created_at timestamp default current_timestamp,
     last_login timestamp Null,
     foreign key(role_id) references roles(role_id)
     );

//user Profiles
 create table user_profiles(
     profile_id int auto_increment primary key,
     user_id int not null,
     full_name varchar(100),
     phone varchar(50),
     location varchar(100),
     profile_pic_url varchar(255),
     foreign key (user_id) references users(user_id)
     );

// Candidates
 create table candidates(
     candidate_id int primary key,
     resume_url varchar(255),
     experience_years decimal(3,1),
     education text,
     skills text,
     protfolio_link varchar(255),
     foreign key (candidate_id) references users(user_id)
     );

// Job
create table jobs(
         job_id int auto_increment primary key,
         recruiter_id int not null,
         title varchar(100) not null,
         decription text not null,
         location varchar(100),
         salary_range varchar(50),
         job_type enum('Full-Time', 'Part_Time', 'Internship', 'Contract') default 'Full-Time',
         status enum('Open', 'Close') default 'Open',
         created_at timestamp default current_timestamp,
         deadline date,
         foreign key(recruiter_id) references users(user_id)
       );

//Job Requirement table

    create table job_requirements(
    requirement_id int auto_increment primary key,
    job_id int not null,
    skill_name varchar(100),
    experince_required varchar(50),
    qualification varchar(100),
    foreign key(job_id) references jobs(job_id)
    );

// Application Table
 create table applications(
     application_id int auto_increment primary key,
     candidate_id int not null,
     job_id int not null,
     company_name varchar(100),
     position_title varchar(100) not null,
     job_link varchar(255),
     location varchar(100),
     work_type enum('Remote', 'Hybrid','On-site', 'Flexible') default 'Flexible',
     application_status ENUM ('Applied', 'Under Review', 'Interview', 'Offer', 'Accepted', 'Rejected', 'Withdrawn') default 'Applied',
     date_applied date not null,
     follow_up_date date default null,
     notes text,
     created_at timestamp default current_timestamp,
     updated_at timestamp defauld current_timestamp on update current_timestamp,
     foreign key(candidate_id) references candidates(candidate_id) on delete cascade,
     foreign key(job_id) references jobs(job_id) on delete set null
     );

// Candidate Pipeline
 create table candidate_pipeline(
     id int auto_increment primary key,
     application_id int not null,
    changed_by int null,
     stage_name enum('Applied', 'Under Review', 'Interview','Offer', 'Accepted', 'Rejected',' Withdrawn') not null,
     moved_at timestamp default current_timestamp,
     foreign key(application_id) references application (application_id) on delete cascade
     );

    
//Saved Jobs
CREATE TABLE saved_jobs (
    saved_id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT NOT NULL,
    job_id INT NOT NULL,
    saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (candidate_id) REFERENCES candidates(candidate_id),
    FOREIGN KEY (job_id) REFERENCES jobs(job_id)
);

// Recruiter
CREATE TABLE recruiters (
    recruiter_id INT PRIMARY KEY,
    company_name VARCHAR(100),
    company_website VARCHAR(255),
    position_title VARCHAR(100),
    FOREIGN KEY (recruiter_id) REFERENCES users(user_id)
);

//Pipeline Stage

CREATE TABLE pipeline_stages (
    stage_id INT AUTO_INCREMENT PRIMARY KEY,
    recruiter_id INT NOT NULL,
    stage_name VARCHAR(100),
    order_index INT DEFAULT 0,
    FOREIGN KEY (recruiter_id) REFERENCES recruiters(recruiter_id)
);

//Pipeline applications
CREATE TABLE pipeline_applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    application_id INT NOT NULL,
    stage_id INT NOT NULL,
    moved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (application_id) REFERENCES applications(application_id),
    FOREIGN KEY (stage_id) REFERENCES pipeline_stages(stage_id)
);

//Messages
CREATE TABLE messages (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    message_text TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_status BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (sender_id) REFERENCES users(user_id),
    FOREIGN KEY (receiver_id) REFERENCES users(user_id)
);


//Notifications
CREATE TABLE notifications (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    message TEXT,
    type ENUM('System', 'Application', 'Message', 'Reminder') DEFAULT 'System',
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

// Job Analystics
CREATE TABLE job_analytics (
    analytics_id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT NOT NULL,
    views_count INT DEFAULT 0,
    applications_count INT DEFAULT 0,
    hires_count INT DEFAULT 0,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (job_id) REFERENCES jobs(job_id)
);


//Recruiter Analytics
CREATE TABLE recruiter_analytics (
    recruiter_id INT PRIMARY KEY,
    total_jobs_posted INT DEFAULT 0,
    total_hires INT DEFAULT 0,
    avg_time_to_hire DECIMAL(5,2),
    total_messages_sent INT DEFAULT 0,
    FOREIGN KEY (recruiter_id) REFERENCES recruiters(recruiter_id)
);

// Activity logs
CREATE TABLE activity_logs (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    action VARCHAR(255),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
