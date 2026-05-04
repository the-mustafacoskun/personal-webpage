# Personal Terminal Portfolyo 🚀

A modern, high-performance web portfolio built with **React** , featuring a unique terminal-inspired aesthetic and seamless localization.

## 🔗 Live Demo
[Explore the Project](https://personal-webpage-l2wv-oso68kb88-the-mustafacoskuns-projects.vercel.app/)

## 🛠 Tech Stack
*   **Core:** React 19
*   **State Management:** Context API (Theme/Localization)
*   **Styling:** Tailwind CSS V4.2 (Dark Mode & Responsive Design)
*   **Icons:** Lucide React & Custom Dynamic SVGs
*   **Networking:** Axios (GitHub API Integration)

## 🌟 Key Features

### 1. Centralized State & Context Architecture
The application utilizes a multi-provider strategy to handle global concerns:
*   **LanguageContext**: Handles instant switching between English and Turkish across the entire UI.
*   **ThemeContext**: Manages Dark/Light mode persistence and system preference detection.
*   **ProjectContext**: Dynamically fetches and filters repositories directly from the GitHub API using Axios.

### 2. Dynamic SVG & UI Layering
This project implements a specialized **"Zero-Component" SVG strategy**:
*   **Custom Geometric Components**: `Bar`, `Rect`, `Circle`, and `BigBar` are developed as standalone React components.
*   **currentColor Strategy**: SVGs are styled with Tailwind classes, allowing dynamic color adaptation based on the theme or parent state.
*   **Precision Layering**: Leverages `absolute positioning` and `z-index` management to create decorative highlight effects that sit perfectly behind or below text elements.

### 3. Responsive & Thematic Design
*   **Dark Mode**: Full thematic integration that swaps colors and adjusts assets for optimal readability.
*   **Terminal Aesthetic**: Incorporates monospace-inspired layouts and decorative elements that mimic a professional developer's terminal environment.
*   **Fluid Layouts**: Built with a mobile-first approach using Tailwind's flex and grid utilities.


## 📁 Project Structure
```text
src/
├── assets/           # Static assets and media
├── components/       # Functional UI components
│   ├── icons/        # Custom SVG components (Anot, Bar, BigBar, Circle, Rect)
│   ├── Footer.jsx    # Page footer with social links
│   ├── Header.jsx    # Navigation and language toggle
│   ├── Hero.jsx      # Introduction section with profile image
│   ├── Profile.jsx   # Personal information and about me section
│   ├── Projects.jsx  # Dynamic GitHub projects display
│   ├── Skills.jsx    # Tech stack and skills grid
│   └── ToggleTheme.jsx # Dark/Light mode switch
├── contexts/         # Theme, Language, and Project Context Providers
├── hooks/            # Custom hooks (useLocalStorage.jsx)
├── App.css           # Global component styles
├── App.jsx           # Main application logic and provider orchestration
├── data.js           # Centralized localized content (EN/TR)
├── index.css         # Tailwind directives and base styles
└── main.jsx          # Application entry point

```

  📬 Contact
Mustafa Coşkun

LinkedIn: mustafacskn00

GitHub: the-mustafacoskun

Email: the.mustafacoskun@gmail.com
