# Magnete
## Build

### Running Locally
To run the project locally, follow these steps:
1. Clone the repository:
    ```sh
    git clone https://github.com/Parfaitv/Magnete.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Magnete
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Build project:
    ```sh
    npm run build
    ```
5. Start the development server:
    ```sh
    npm run dev
    ```

### Running with Docker
To run the project using Docker, follow these steps:
1. Build the Docker image:
    ```sh
    docker build -t magnete .
    ```
2. Run the Docker container:
    ```sh
    docker run -p 3000:3000 magnete
    ```

### Running with Docker Compose
To run the project using Docker Compose, follow these steps:
1. Up compose:
    ```sh
    docker compose up -d
    ```