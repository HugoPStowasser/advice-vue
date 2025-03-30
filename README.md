# Advice Management System

Web application for managing and visualizing advice with advanced filtering and sorting capabilities.

<img src="https://imgur.com/pyLJqsn" alt="Application Screenshot">
![Application Screenshot](https://imgur.com/pyLJqsn)

## ✨ Features

- Data grid with multi-column sorting
- Combined filters by:
  - ID (substring search)
  - External ID (substring search)
  - Advice text
- Responsive design
- Real-time data updates
- Automatic date formatting
- Visual sorting indicators
- Error handling and loading states

## 🛠 Technologies

- Vue 3 Composition API
- TypeScript
- Vite
- Axios (HTTP Client)
- Modern CSS (Grid/Flexbox)
- RESTful API

## ⚙️ Requirements

- Node.js 18+
- NPM 9+
- Backend API (https://localhost:7206)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/advice-management.git
   ```

2. Install dependencies:
   ```bash
   cd advice-management/frontend
   npm install
   ```

3. Configure the API (optional):
   ```bash
   # Create a .env file in the project root with:
   VITE_API_BASE_URL=https://localhost:7206/api
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🔧 Backend Configuration

Make sure the API is configured with:
* CORS enabled for `http://localhost:5173`
* Endpoints according to Swagger documentation
* Initialized database

## 📚 API Endpoints

| Method | Endpoint           | Description              |
|--------|--------------------| ------------------------ |
| GET    | /api/Advice        | List all advice          |
| GET    | /api/Advice/{id}   | Search by External ID    |
| POST   | /api/Advice        | Create new advice        |

## 🗂 Project Structure

```
src/
├─ assets/           # Static resources
├─ components/       # Vue components
│  └─ AdviceGrid.vue # Main component
├─ types/            # TypeScript types
├─ api/              # HTTP client configuration
├─ App.vue           # Root component
└─ main.ts           # Entry point
```

## 📸 Screenshots

1. **Overview**
   ![Overview](https://imgur.com/pyLJqsn)
2. **Filtering**
   ![Filtering](https://imgur.com/cmxssRS)
3. **Sorting**
   ![Sorting](https://imgur.com/UCHxurV)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
