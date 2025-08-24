# Plant Store Frontend

This is the frontend for the Plant Store application, built with **React** and **Redux Toolkit**.

---

## Features

- Browse, search, and filter plants
- Add new plants (with modal form)
- Responsive design (works on laptop and mobile)
- Connects to backend API for data
- Loading and error handling UI

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <repo-url>
cd PlantStore/frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure API Endpoint

If your backend runs on a different URL or port, update the API base URL in your frontend code (commonly in `src/features/plantSlice.js` or an `.env` file):

```
REACT_APP_API_URL=http://localhost:3000/api
```

### 4. Start the Development Server

```bash
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000) by default.

---

## Project Structure

```
frontend/
│
├── public/                # Static files
├── src/
│   ├── components/        # React components
│   ├── features/          # Redux slices
│   ├── App.jsx            # Main app component
│   ├── index.js           # Entry point
│   └── ...                # Other files
├── package.json
└── README.md
```

---

## Main Scripts

- `npm start` — Run the app in development mode
- `npm run build` — Build for production

---

## Technologies Used

- React
- Redux Toolkit
- Tailwind CSS (for styling)
- Axios or Fetch API (for HTTP requests)

---

##