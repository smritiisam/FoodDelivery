# 🍔 Food Delivery Web App (Full Stack MERN)

A minimal yet production-ready **food delivery platform** built with the **MERN stack (MongoDB, Express, React, Node.js)**, deployed using **Docker** and **Traefik**.

This project demonstrates scalable full-stack architecture, authentication, API design, and containerized deployment — following real-world engineering practices.

## Tech Stack

**Frontend:**

- React (Vite, JSX, CSS)
- React Router for client-side routing
- Fetch API for backend integration

**Backend:**

- Node.js with Express
- MongoDB with Mongoose ORM
- JWT Authentication & Role-Based Access
- Bcrypt password hashing
- RESTful API architecture
- Helmet, CORS, Rate Limiting (Security)

**DevOps & Deployment:**

- Dockerized (client, server, MongoDB)
- Traefik reverse proxy with routing
- Environment variable configuration
- MongoDB volume persistence
- Ready for deployment to DigitalOcean / Render / AWS

## Core Features

**Authentication** JWT-based login/signup for customers & restaurant owners  
 **Restaurants** CRUD for restaurants and menu items  
 **Orders** Order creation, status tracking (Placed → Accepted → Preparing → Out for delivery → Delivered)
**Dashboard** Role-based (Restaurant owners see orders, customers see history)  
 **Security** Hashed passwords, protected routes, input validation  
 **Architecture** MVC structured backend, reusable React components  
 **Deployment** Docker Compose with MongoDB & Traefik proxy

## To Implement

### Prerequisites

Make sure the following are installed before running the project:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (or Docker Engine + Compose v2)
- Git
- Internet connection (for pulling base images)

---

### How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/smritiisam/FoodDelivery.git
cd food-delivery
```

---

### 2️. Create a .env File

At the project root (same folder as `docker-compose.yml`), create a `.env` file with the following:

```bash
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=secret123
JWT_SECRET=your_jwt_secret
```

You can change these values if you want, but keep them consistent.

## API Test

Once containers are up, you can test the backend directly:

Linus:
curl http://localhost/api/restaurants

For Windows(VS Code prefereably):
Invoke-WebRequest -Uri "http://localhost/api/restaurants" -Method GET

Expected output:

[
{ "_id": "r1", "name": "sunsettt dinnerr", "cuisine": "Indian", "address": "MG Road" },
{ "_id": "r2", "name": "Pasta Palace", "cuisine": "Italian", "address": "Sector 12" }
]
