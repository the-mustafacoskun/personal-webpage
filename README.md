Personal Terminal Portfolyo
A high-performance, modern web portfolio built with React and Redux, featuring a unique terminal-inspired aesthetic and seamless localization.

🚀 Live Demo
View the Live Project

🛠 Tech Stack
Core: React 18

State Management: Redux (Global Store) & Context API (Theme/Localization)

Styling: Tailwind CSS (Dark Mode supported)

Icons: Lucide React & Custom Dynamic SVGs

Networking: Axios (GitHub API Integration)

🌟 Key Features
1. Centralized State & Context Architecture
The application utilizes a multi-provider strategy to handle global concerns:

LanguageContext: Handles instant switching between English and Turkish across the entire UI.

ThemeContext: Manages Dark/Light mode persistence and system preference detection.

ProjectContext: Dynamically fetches and filters my latest repositories directly from the GitHub API using Axios.

2. Dynamic SVG & UI Layering
Unlike static icons, this project uses a "Zero-Component" SVG strategy:

Custom Geometric Icons: Bar, Rect, Circle, and BigBar are treated as first-class React components.

currentColor Strategy: SVGs are injected with Tailwind classes to allow dynamic color changes based on the theme or parent state.

Advanced Layering: Leverages absolute positioning and complex z-index management to create "highlight" effects where decorative bars sit perfectly behind or below text headers (e.g., the "About Me" and "Hero" sections).

3. Responsive & Thematic Design
Mobile-First: Fully responsive layouts using Tailwind's grid and flex utilities.

Dark Mode: A deep-thematic dark mode integration that swaps colors and inverts specific assets for optimal readability.

Terminal Aesthetic: Incorporates monospace font-inspired layouts and decorative elements that mimic a professional developer's terminal environment.

📁 Project Structure
Plaintext
src/
├── components/       # Functional UI components
│   ├── icons/        # Custom-built dynamic SVG components
│   └── ToggleTheme/  # Dark mode logic
├── contexts/         # Theme, Language, and Project Contexts
├── data.js           # Centralized localized content
└── App.jsx           # Main layout and Provider orchestration
⚙️ Installation & Setup
Clone the repository:

Bash
git clone https://github.com/the-mustafacoskun/personal-terminal.git
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
📬 Contact
Mustafa Coşkun

LinkedIn: mustafacskn00

Email: the.mustafacoskun@gmail.com
