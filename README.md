Kaplan Exam Schedule

A Laravel + React (Inertia.js + Vite) application that generates a clean, structured daily exam study schedule from JSON activity data.
The system groups activities into 120-minute daily sessions, skips weekends, avoids holidays, and presents everything through a modern UI.

🚀 Features

📁 Reads activities from a local JSON file (storage/app)

☁️ If the file is missing → Automatically fetches from API

💾 Automatically stores API response into storage/app/activities.json

🕒 Groups activities into 120 minutes per day

➕ Allows up to 130 minutes when exceeding boundary

📅 Skips weekends (Saturday, Sunday)

🎉 Skips holidays via HolidayService

📆 Generates schedule in chronological date order

⚡ Modern stack:

8.2 >= php version <= 8.4(Some functions are depricated in 8.5)

Install node to run react and vite(for faster development changs and faster deployments)
node version v20.19.5

Laravel 11

React + Inertia.js

Vite

MySQL / SQLite / psql

🧪 Fully testable with PHP Unit tests

📂 Tech Stack
Layer	Technology
Backend	Laravel 11
Frontend	React + Inertia.js
Build Tool	Vite
Database	MySQL or SQLite or Psql
Data Source	JSON file / API
Storage	storage/app
📥 Installation Guide
1. Clone the project
git clone https://github.com/siddartha4400-ui/kaplan.git
cd kaplan

2. Install Composer dependencies
composer install

3. Install NPM dependencies
npm install

4. Environment setup

Rename .env.example → .env and update database credentials:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=kaplan
DB_USERNAME=root
DB_PASSWORD=root


or use SQLite:

DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite


Create the SQLite file:

touch database/database.sqlite

5. Clear caches and run migrations

php artisan config:clear
php artisan cache:clear
php artisan migrate

6. Start front-end (Vite)
npm run dev

7. Start Laravel server

In a new terminal:

php artisan serve

📁 Activity Data Flow

The application loads activities using the following priority:

1️⃣ Local JSON file

Path:
storage/app/activities.json

2️⃣ If missing → Fetch from remote API

URL:
https://kp-lms-static.s3.us-east-2.amazonaws.com/activities.json

3️⃣ Save API response locally

So next requests use the local file (faster, offline-ready).

📅 Schedule Generation Rules

Each day contains maximum 120 minutes

If final activity exceeds limit → up to 130 minutes allowed

Automatically skips Saturday

Automatically skips Sunday

Skips holidays using HolidayService

Assigns new dates for each chunk of grouped activities

Output always sorted by date

🧪 Running Tests

To run all tests:

php artisan test


To run a specific test:

php artisan test --filter=GetActivitiesApiTest

📁 Project Structure
kaplan/
├── app/
│   ├── Models/Activity.php
│   ├── Services/ActivityService.php
│   ├── Services/HolidayService.php
│
├── routes/
│   ├── api.php
│   ├── web.php
│
├── storage/app/activities.json
│
├── resources/js/  # React + Inertia
│
└── database/


👤 Maintainer

siddu bandi