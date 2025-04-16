# Linux & Open Source Lovers Community

## Installation

Follow the steps below to install and run the project locally.

### Prerequisites

- PHP >= 8.2
- Composer
- Node & Npm or bun
- MySQL
- Git

### Installation Steps

1. **Clone the project:**

    ```bash
    git clone https://github.com/LOSL/website.git
    cd website
    ```

2. **Install dependencies:**

    ```bash
    composer install
    npm install
    ```

3. **Configure environment variables:**

    ```bash
    cp .env.example .env
    ```

    Then, open the `.env` file and configure the database settings and other necessary variables.

4. **Generate the application key:**

    ```bash
    php artisan key:generate
    ```

5. **Run the migrations:**

    ```bash
    php artisan migrate
    ```

    Follow the instructions in the terminal to complete the migrations.

6. **Create the symbolic link for file storage:**

    ```bash
    php artisan storage:link
    ```

7. **Start the development server:**

    ```bash
    npm run build
    php artisan serve
    ```

    The server will be started at [http://localhost:8000](http://localhost:8000).

## Usage

Access the application via your browser at [http://localhost:8000](http://localhost:8000).
