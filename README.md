# Personal Portfolio Website 🚀

A modern, high-performance web portfolio built with **React**, featuring a sleek terminal-inspired aesthetic, multi-language support, and dynamic GitHub API integration. Designed to showcase developer projects and skills with a professional, responsive interface.

## 🌐 Live Demo

**[View Portfolio](https://personal-webpage-l2wv-oso68kb88-the-mustafacoskuns-projects.vercel.app/)**

---

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#-tech-stack-with-versions)
- [Features](#-key-features)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Development](#-development)
- [Build & Deployment](#-build--deployment)
- [Testing](#-testing)
- [Architecture](#-architecture)
- [Contributing](#-contributing)
- [Contact](#-contact)

---

## Overview

This project is a fully responsive, dynamic portfolio website that demonstrates modern web development practices. Built with a component-driven architecture, it features real-time theme switching, bilingual support (English & Turkish), and seamless integration with GitHub's API to display live project data.

The design prioritizes performance, accessibility, and user experience with a custom terminal-inspired UI aesthetic that resonates with developers.

---

## 🛠 Tech Stack with Versions

### Core Framework
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2.5 | UI framework & component library |
| **React DOM** | 19.2.5 | DOM rendering |
| **React Router** | 7.14.2 | Client-side routing & navigation |

### Build Tools & Development
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Vite** | 8.0.10 | Next-gen build tool & dev server |
| **@vitejs/plugin-react** | 6.0.1 | Fast Refresh support for React |

### Styling & UI
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Tailwind CSS** | 4.2.4 | Utility-first CSS framework |
| **@tailwindcss/vite** | 4.2.4 | Tailwind CSS Vite plugin |
| **Lucide React** | 1.14.0 | Modern icon library |

### API & Networking
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Axios** | 1.15.2 | HTTP client for GitHub API calls |

### Notifications
| Technology | Version | Purpose |
|-----------|---------|---------|
| **react-toastify** | 11.1.0 | Toast notifications |

### Code Quality
| Technology | Version | Purpose |
|-----------|---------|---------|
| **ESLint** | 10.2.1 | JavaScript linting |
| **@eslint/js** | 10.0.1 | ESLint core configuration |
| **eslint-plugin-react-hooks** | 7.1.1 | React hooks linting |
| **eslint-plugin-react-refresh** | 0.5.2 | React refresh validation |
| **eslint-plugin-cypress** | 6.4.0 | Cypress testing linting |

### Testing
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Cypress** | 15.14.2 | End-to-end testing framework |
| **cypress.io** | 0.0.2 | Cypress utilities |

### Type Definitions
| Technology | Version | Purpose |
|-----------|---------|---------|
| **@types/react** | 19.2.14 | React TypeScript definitions |
| **@types/react-dom** | 19.2.3 | React DOM TypeScript definitions |

### Utilities
| Technology | Version | Purpose |
|-----------|---------|---------|
| **globals** | 17.5.0 | Global JavaScript objects |

---

## 🌟 Key Features

### 1. **Multi-Language Support**
- Seamless switching between English and Turkish
- **LanguageContext** manages translations globally across the entire application
- All UI content is localized and dynamically rendered based on user preference
- Language preference is persisted in local storage

### 2. **Theme Management**
- **Dark/Light Mode Toggle** with system preference detection
- **ThemeContext** handles theme state and persistence
- Smooth transitions between themes using Tailwind CSS
- Theme preference is saved to local storage for persistence across sessions

### 3. **Dynamic Project Showcase**
- **Real-time GitHub API Integration** using Axios
- **ProjectContext** fetches and filters repositories directly from GitHub
- Displays live project data including stars, forks, and descriptions
- Responsive project grid layout

### 4. **Advanced SVG & UI Components**
- **Custom Geometric Components**: `Bar`, `Rect`, `Circle`, and `BigBar` for decorative effects
- **currentColor Strategy**: SVGs dynamically adapt colors based on theme or parent state
- **Precision Layering**: Z-index management creates visual hierarchy and decorative overlays
- Professional terminal-inspired aesthetic

### 5. **Responsive Design**
- **Mobile-First Approach** using Tailwind CSS utilities
- **Flexible Layouts** with Flex and Grid systems
- **Optimal Performance** across all device sizes
- Adaptive typography and spacing

### 6. **Performance Optimized**
- Built with Vite for ultra-fast development and production builds
- Optimized React components with minimal re-renders
- Efficient asset loading and code splitting
- Production-ready bundle optimization

---

## 📁 Project Structure

```
personal-webpage/
├── src/
│   ├── assets/                 # Static files (images, fonts, media)
│   │
│   ├── components/             # React components
│   │   ├── icons/              # Custom SVG icon components
│   │   │   ├── Anot.jsx
│   │   │   ├── Bar.jsx
│   │   │   ├── BigBar.jsx
│   │   │   ├── Circle.jsx
│   │   │   └── Rect.jsx
│   │   │
│   │   ├── Footer.jsx          # Footer with social links & contact info
│   │   ├── Header.jsx          # Navigation & language toggle
│   │   ├── Hero.jsx            # Hero section with intro & profile image
│   │   ├── Profile.jsx         # About section & personal information
│   │   ├── Projects.jsx        # GitHub projects showcase
│   │   ├── Skills.jsx          # Tech stack & skills grid
│   │   └── ToggleTheme.jsx     # Theme switcher component
│   │
│   ├── contexts/               # React Context Providers
│   │   ├── LanguageContext.jsx # Multi-language state management
│   │   ├── ThemeContext.jsx    # Dark/Light mode state management
│   │   └── ProjectContext.jsx  # GitHub API data fetching & caching
│   │
│   ├── hooks/                  # Custom React hooks
│   │   └── useLocalStorage.jsx # Local storage persistence hook
│   │
│   ├── App.jsx                 # Main app component & provider orchestration
│   ├── App.css                 # Global component styles
│   ├── main.jsx                # Application entry point
│   ├── index.css               # Tailwind directives & base styles
│   └── data.js                 # Centralized localized content (EN/TR)
│
├── public/                     # Static assets served as-is
├── cypress/                    # End-to-end tests
├── dist/                       # Production build output
│
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
├── cypress.config.js           # Cypress testing configuration
├── index.html                  # HTML entry point
├── package.json                # Project dependencies & scripts
├── package-lock.json           # Dependency lock file
└── README.md                   # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** 16+ and **npm** (or **yarn**)
- Git

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/the-mustafacoskun/personal-webpage.git
   cd personal-webpage
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create Environment Variables** (if needed)
   ```bash
   # Copy example env file if it exists
   cp .env.example .env
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

---

## 🔧 Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm preview

# Run linting checks
npm run lint

# Run end-to-end tests (Cypress)
npm run test:e2e
```

### Key Development Practices

- **Component-Based Architecture**: Modular, reusable components
- **Context API**: Centralized state management (no Redux needed)
- **Custom Hooks**: Encapsulated logic for local storage, API calls, etc.
- **Tailwind CSS**: Utility-first styling with dark mode support
- **ESLint**: Code quality enforcement with strict rules

---

## 🏗 Build & Deployment

### Production Build

```bash
npm run build
```

This generates an optimized build in the `dist/` directory:
- Minified JavaScript and CSS
- Image optimization
- Code splitting for better performance
- Tree-shaking of unused code

### Deployment Options

#### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

#### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

#### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

---

## 🧪 Testing

### End-to-End Testing with Cypress

```bash
# Run Cypress interactive test runner
npm run cypress:open

# Run tests in headless mode
npm run cypress:run
```

Test files are located in the `cypress/` directory and follow the pattern `*.cy.js`.

---

## 🏛 Architecture

### State Management Flow

```
App.jsx
├── ThemeProvider
│   └── LanguageProvider
│       └── ProjectProvider
│           └── All Components
```

### Data Flow

1. **Theme Context**: User toggle → Local Storage → Component re-render
2. **Language Context**: User selection → Local Storage → UI update
3. **Project Context**: API fetch → Cache → Display in Projects component

### API Integration

- **GitHub API**: Fetches repositories via Axios
- **Caching Strategy**: Data cached to minimize API calls
- **Error Handling**: Graceful fallbacks with user notifications

---

## 📝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure code follows ESLint rules and includes appropriate tests.

---

## 📄 License

This project is open source and available under the MIT License.

---

## 📬 Contact

**Mustafa Coşkun**

- **Email**: [the.mustafacoskun@gmail.com](mailto:the.mustafacoskun@gmail.com)
- **GitHub**: [@the-mustafacoskun](https://github.com/the-mustafacoskun)
- **LinkedIn**: [mustafacskn00](https://linkedin.com/in/mustafacskn00)

Feel free to reach out for inquiries, suggestions, or collaboration opportunities!

---

**Made with ❤️ by Mustafa Coşkun**
