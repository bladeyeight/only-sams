# Game Review Website

A full-stack application for game reviews with a React frontend and Node.js/MongoDB backend.

## Project Structure

- **Frontend**: React application in `only-sams-frontend`
- **Backend**: Node.js/Express API in `only-sams-backend`
- **Database**: MongoDB for storing game reviews

## Features

- Create, read, update, and delete game reviews
- Rate games on a scale of 1-10
- Filter reviews by platform, genre, and rating
- Responsive design for all devices

## Technologies Used

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **Containerization**: Docker, Docker Compose

## Getting Started

### Prerequisites

- Docker and Docker Compose installed on your machine

### Running the Application

1. Clone the repository
2. Navigate to the project root directory
3. Run the following command to start all services:

```bash
docker-compose up
```

4. Access the frontend at: http://localhost:3000
5. The backend API is available at: http://localhost:5000

## Development

### Frontend Development

```bash
cd only-sams-frontend
npm install
npm start
```

### Backend Development

```bash
cd only-sams-backend
npm install
npm run dev
```

## API Endpoints

- `GET /api/reviews` - Get all reviews
- `GET /api/reviews/:id` - Get a specific review
- `POST /api/reviews` - Create a new review
- `PATCH /api/reviews/:id` - Update a review
- `DELETE /api/reviews/:id` - Delete a review
