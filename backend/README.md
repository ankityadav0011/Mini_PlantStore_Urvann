# Plant Store Backend

This is the backend API for the Plant Store application, built with **Node.js**, **Express**, and **MongoDB**.

---

## Features

- RESTful API for managing plants
- MongoDB database integration (via Mongoose)
- CORS enabled for all origins
- Environment variable support with `.env`
- Plant seeding script for demo data

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <repo-url>
cd PlantStore/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the `backend` directory:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Seed Demo Data (Optional)

To seed the database with sample plants:

```bash
node seed/plantSeed.js
```

### 5. Start the Server

```bash
npm run dev
```

The server will run on `http://localhost:3000` (or your specified port).

---

## API Endpoints

### Base URL

```
/api/plants
```

### Endpoints

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| GET    | `/api/plants`      | Get all plants (with filters)|
| POST   | `/api/plants`      | Add a new plant              |


---

## Example Plant Object

```json
{
  "name": "Money Plant",
  "price": 199,
  "categories": ["Indoor", "Air Purifying", "Home Decor"],
  "inStock": true
}
```

---

## Project Structure

```
backend/
│
├── config/           # Database connection
├── models/           # Mongoose models
├── routes/           # API routes
├── seed/             # Seed scripts
├── index.js          # Entry point
└── package.json
```

---

## License