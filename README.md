# Todo List

A simple and efficient **Todo List** application built using Flask and Docker. This project helps users manage their daily tasks effectively by allowing them to add, update, delete, and track tasks in a streamlined manner.

---

##  Features

 Add new tasks  
 Mark tasks as completed  
 Delete tasks  
 User-friendly interface  
 Persistent storage using a database  
 Containerized with Docker for easy deployment  

---

- **Backend:** Flask (Python)
- **Frontend:** HTML, CSS, JavaScript
- **Database:** SQLite (or any other configured database)
- **Containerization:** Docker
- **Deployment:** AWS ECR (Amazon Elastic Container Registry)

---

##  Installation

###  Prerequisites

Ensure you have the following installed on your system:

- Python (3.x)
- Docker
- Git

### Steps to Run Locally

1. Clone the repository:
   ```sh
   git clone https://github.com/Srireddy88/Todo-List.git
   cd Todo-List
   ```
2. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run the Flask application:
   ```sh
   python app.py
   ```
5. Open the app in your browser:
   ```sh
   http://127.0.0.1:5000/
   ```

---

##  Running with Docker

1. Build the Docker image:
   ```sh
   docker build -t todo-list .
   ```
2. Run the container:
   ```sh
   docker run -p 5000:5000 todo-list
   ```

---

##  Deployment to AWS ECR

1. Authenticate Docker with AWS ECR:
   ```sh
   aws ecr get-login-password --region <your-region> | docker login --username AWS --password-stdin <your-ecr-repository-url>
   ```
2. Tag the Docker image:
   ```sh
   docker tag todo-list:latest <your-ecr-repository-url>:latest
   ```
3. Push the image to AWS ECR:
   ```sh
   docker push <your-ecr-repository-url>:latest
   ```
4. Deploy the container on an EC2 instance or any other AWS service
