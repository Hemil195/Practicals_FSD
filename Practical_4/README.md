# Practical 4 - React Counter App

A beautiful React counter application with form inputs, featuring elegant design and interactive elements.

## Overview
This React application combines a counter functionality with a user profile form. It demonstrates state management, event handling, and modern UI design with smooth animations and colorful interactions.

## Features
- **Interactive Counter**: Increment, decrement, reset, and add 5 functionality
- **User Profile Form**: First name and last name input fields
- **Real-time Display**: Live updates of form data as you type
- **Beautiful UI**: Modern design with purple buttons and pink output section
- **Smooth Animations**: Hover effects and focus states
- **Responsive Design**: Works on all device sizes

## Technologies Used
- **React 19.1.1**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **JSX**: JavaScript XML for component structure
- **CSS-in-JS**: Inline styling with interactive effects
- **ESLint**: Code quality and linting

## How to Use

### Development Mode
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open browser to `http://localhost:5173`

### Production Build
1. Build for production: `npm run build`
2. Preview build: `npm run preview`

## Application Features

### Counter Functionality
- **Reset**: Set counter back to 0
- **Increment**: Add 1 to current count
- **Decrement**: Subtract 1 from current count
- **Increment 5**: Add 5 to current count

### User Profile
- **First Name Input**: Enter your first name
- **Last Name Input**: Enter your last name
- **Live Display**: See your inputs reflected immediately
- **Form Validation**: Clean, user-friendly interface

## Design Features
- **Purple Theme**: Beautiful purple buttons (#6c5ce7) with darker hover states
- **Pink Output**: Attractive pink display section (#fd79a8)
- **Smooth Interactions**: Hover effects with lift animations
- **Focus States**: Input fields highlight when focused
- **Card Layout**: Clean white container with subtle shadow
- **Consistent Design**: Matches other practicals' design language

## File Structure
```
Practical_4/
├── src/
│   ├── App.jsx       # Main React component
│   ├── App.css       # Legacy CSS file (now minimal)
│   └── main.jsx      # React entry point
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
├── vite.config.js    # Vite configuration
├── eslint.config.js  # ESLint rules
└── README.md         # This documentation
```

## React Concepts Demonstrated
- **State Management**: Multiple useState hooks for counter and form data
- **Event Handling**: Button clicks and form input changes
- **Controlled Components**: Form inputs controlled by React state
- **Inline Styling**: CSS-in-JS with dynamic style changes
- **Component Structure**: Clean, organized component code
- **Interactive Effects**: Hover and focus event handlers

## Color Scheme
- **Primary Background**: Light gray (#f5f5f5)
- **Card Background**: White (#fff)
- **Button Color**: Purple (#6c5ce7)
- **Button Hover**: Darker purple (#5b4ddb)
- **Output Background**: Pink (#fd79a8)
- **Text Colors**: Various shades of gray for hierarchy

## Interactive Features
- **Button Hover**: Buttons lift up and shadow increases
- **Input Focus**: Border color changes and glow effect appears
- **Smooth Transitions**: All interactions have 0.3s ease transitions
- **Visual Feedback**: Clear indication of interactive elements

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Tools
- **Vite**: Fast development server with HMR
- **ESLint**: Code linting and quality checks
- **React DevTools**: Browser extension for debugging (recommended)

## Demo
Run `npm run dev` to start the development server and interact with the counter and form!
