# HRIS Frontend Application

A scalable Human Resource Information System built with AngularJS and AdminLTE.

## Project Structure

```
hris-frontend/
├── index.html                 # Main HTML file
├── views/                     # HTML templates
│   ├── login.html            # Login page
│   ├── register.html         # Registration page
│   └── dashboard.html        # Dashboard page
├── js/
│   ├── app.js                # Main application module
│   ├── config/
│   │   └── routes.js         # Routing configuration
│   ├── controllers/
│   │   ├── authController.js # Authentication controllers
│   │   └── dashboardController.js # Dashboard controller
│   └── services/
│       ├── authService.js    # Authentication service
│       └── apiService.js     # HTTP interceptor and API service
├── css/                       # AdminLTE stylesheets
├── img/                       # Images and assets
└── README.md                  # This file
```

## Features

- **Authentication**: Login and registration with JWT token handling
- **Authorization**: Route protection and automatic redirects
- **Responsive Design**: AdminLTE theme with Bootstrap 3
- **Scalable Architecture**: Modular structure for easy maintenance

## Getting Started

1. **Backend Setup**: Ensure your backend is running on `http://localhost:3000` with authentication endpoints:
   - `POST /api/auth/login`
   - `POST /api/auth/register`

2. **Frontend Setup**:
   - Open `index.html` in a web browser
   - The application will automatically redirect based on authentication status

## Architecture Principles

### Separation of Concerns
- **Routes** (`js/config/routes.js`): All routing logic and HTTP configuration
- **Controllers** (`js/controllers/`): Handle user interactions and update views
- **Services** (`js/services/`): Business logic, API calls, and data management
- **Views** (`views/`): HTML templates for different pages

### Scalability Features
- **Modular Structure**: Easy to add new features without affecting existing code
- **Service Layer**: Centralized API calls and business logic
- **Route Guards**: Authentication checks at the routing level
- **Dependency Injection**: AngularJS DI for testable and maintainable code

## Adding New Features

### 1. New Page/Route
1. Create controller in `js/controllers/`
2. Create view template in `views/`
3. Add route configuration in `js/config/routes.js`

### 2. New Service
1. Create service file in `js/services/`
2. Include script in `index.html`
3. Inject into controllers as needed

### 3. New API Endpoint
1. Add method to `ApiService` in `js/services/apiService.js`
2. Use in controllers: `ApiService.get('/endpoint')`

## Development Guidelines

- **File Naming**: Use camelCase for files, PascalCase for controllers/services
- **Dependency Injection**: Always use AngularJS DI array syntax
- **Error Handling**: Implement proper error handling in services
- **Code Organization**: Keep related functionality together
- **Documentation**: Comment complex business logic

## API Integration

The application expects the following API response formats:

### Login Response
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin"
  }
}
```

### Registration Response
```json
{
  "message": "User registered successfully",
  "user": { ... }
}
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Contributing

1. Follow the established folder structure
2. Maintain separation of concerns
3. Test new features thoroughly
4. Update documentation as needed
