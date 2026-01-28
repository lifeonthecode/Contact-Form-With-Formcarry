📝 React Contact Form with Formcarry

A fully functional, production-ready Contact Form built in React with Formcarry integration and dark mode support.

This project demonstrates frontend form validation, API integration, and modern UX best practices using React and Tailwind CSS.

⚡ Features
Form Validation:
Name ≥ 3 characters
Valid email address
Message ≥ 15 characters

API Integration with Formcarry:
Submits form data directly to Formcarry
Handles success, validation errors, and network errors
User Experience:
Success and error messages
Dark mode toggle
Form resets only after successful submission
Production Considerations:
Async/await API handling
Loading state optional for better UX
Environment variable for API URL (VITE_API_URL)

📦 Installation
1. Clone the repository

git clone https://github.com/lifeonthecode/Contact-Form-With-Formcarry.git
cd react-formcarry-contact


2. Install dependencies
npm install
# or
yarn install


3. Setup environment variables
Create a .env.local file in the project root:

VITE_API_URL=https://formcarry.com/s/your-form-id


Replace your-form-id with your Formcarry form ID.

Usage
Run locally

npm run dev
# or
yarn dev


Open http://localhost:5173 to view in the browser.
Toggle Dark Mode with the switch in the top-right corner.
Fill out the form and click Send to submit to Formcarry.

Production Deployment
Build the project:

npm run build
# or
yarn build

Deploy to Vercel or any static hosting provider.

Vercel Setup:
Add environment variable in the dashboard:
VITE_API_URL = https://formcarry.com/s/your-form-id

Push your code to GitHub and connect your repository to Vercel.

💡 Tips
Test your Formcarry integration using a professional test message before going live.
Always validate data server-side; frontend validation is for UX only.
Optional: Add a loading spinner when the form is submitting.

🎨 Technologies Used
React 18
TypeScript
Tailwind CSS
Formcarry API
Vite

📄 License

This project is open source under the MIT License