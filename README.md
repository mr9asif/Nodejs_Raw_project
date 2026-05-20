# Node.js Core CRUD API

A simple CRUD API built with **Node.js Core Modules** and **TypeScript** without using Express, NestJS, Fastify, or any database.

This project uses a local JSON file as the data source and is designed to help understand how backend applications work under the hood before moving to frameworks and databases.

---

## Features

- Create Order
- Get All Orders
- Get Single Order
- Update Order
- Delete Order
- File-based Data Persistence
- Clean Service & Route Separation
- JSON API Responses

---

## Project Structure

```txt
src/
│
├── db/
│   └── db.json
│
├── routes/
│   └── order.routes.ts
│
├── services/
│   └── order.service.ts
│
├── types/
│   └── index.ts
│
├── utils/
│   └── sendResponse.ts
│
└── index.ts
```

### Architecture

```txt
Client
   │
   ▼
Routes
   │
   ▼
Services
   │
   ▼
db.json
```

### Responsibilities

#### Routes

- Handle incoming requests
- Match routes and HTTP methods
- Call service methods
- Send API responses

#### Services

- Handle business logic
- Read data from JSON database
- Create, update, delete records
- Write updated data back to the database

#### Database

- Stores application data inside `db.json`
- Simulates a real database for learning purposes

---

## Available Endpoints

### Get All Orders

```http
GET /orders
```

### Get Order By ID

```http
GET /orders/:id
```

### Create Order

```http
POST /orders
```

Example Body:

```json
{
  "name": "Laptop",
  "price": 1200
}
```

### Update Order

```http
PATCH /orders/:id
```

Example Body:

```json
{
  "price": 1500
}
```

### Delete Order

```http
DELETE /orders/:id
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to Project

```bash
cd project-name
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

### 5. Build Project

```bash
npm run build
```

### 6. Run Production Build

```bash
npm start
```

The server will start on:

```txt
http://localhost:5000
```

---

## Future Roadmap

This project is intended to grow gradually while exploring more Node.js Core features.

### Planned Features

- Custom Router System
- Middleware Support
- Request Validation
- Environment Variables
- Authentication & Authorization
- Error Handling Layer
- Logging System
- Pagination & Filtering
- Search Functionality
- Configuration Management

---

## Node.js Core Concepts To Explore Next

### File System (fs)

- File creation
- File deletion
- Directory management
- File uploads

### Streams

- Readable Streams
- Writable Streams
- Transform Streams
- Large file processing

### Event Emitter

- Custom events
- Event-driven architecture
- Application notifications

### Buffers

- Binary data handling
- File manipulation

### Path Module

- Dynamic path resolution
- Cross-platform compatibility

### Process API

- Environment variables
- Process management
- Runtime configuration

### HTTP Module

- Advanced routing
- Request lifecycle
- Middleware implementation

### WebSockets

- Real-time communication
- Chat applications
- Live notifications

### Worker Threads

- Background processing
- CPU-intensive tasks

### Cluster Module

- Multi-core application scaling

---

## Long-Term Goals

After mastering Node.js Core, the next steps are:

- Express.js
- Fastify
- NestJS
- MongoDB
- PostgreSQL
- Prisma ORM
- Authentication Systems
- Scalable Backend Architecture

---

## Purpose

The goal of this project is to build backend fundamentals from scratch and understand what frameworks abstract away behind the scenes.
