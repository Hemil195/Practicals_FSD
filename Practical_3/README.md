# Practical 3 - Digital Clock & Calendar

A modern React application displaying real-time date and time with dynamic greetings and timezone switching functionality.

## Overview
This React application provides a beautiful digital clock and calendar interface with real-time updates. It features dynamic greetings based on the time of day and the ability to switch between local time and UTC.

## Features
- **Real-time Clock**: Updates every second automatically
- **Dynamic Greetings**: Shows "Good Morning", "Good Afternoon", or "Good Evening"
- **Full Date Display**: Complete weekday, month, day, and year
- **12-hour Time Format**: AM/PM format for easy reading
- **Timezone Toggle**: Switch between Local Time and UTC
- **Clean UI**: Consistent with other practicals' design language

## Technologies Used
- **React 19.1.1**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **JSX**: JavaScript XML for component structure
- **CSS-in-JS**: Inline styling for consistency
- **ESLint**: Code quality and linting

## How to Use

### Development Mode
1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open browser to `http://localhost:5173`

### Production Build
1. Build for production: `npm run build`
2. Preview build: `npm run preview`

## Key Features

### Real-time Updates
- Clock updates every second using `setInterval`
- Proper cleanup with `useEffect` hook
- Automatic re-rendering with React state

### Dynamic Greetings
- Morning: 12:00 AM - 11:59 AM
- Afternoon: 12:00 PM - 4:59 PM  
- Evening: 5:00 PM - 11:59 PM

### Timezone Support
- **Local Time**: Your system's current timezone
- **UTC Time**: Coordinated Universal Time
- Easy toggle between both formats

## Design Features
- Light gray background (#f5f5f5)
- White card container with subtle shadow
- Clean typography with proper hierarchy
- Interactive buttons matching other practicals
- Responsive design for all devices

## File Structure
```
practical-3/
├── src/
│   ├── App.jsx       # Main React component
│   └── main.jsx      # React entry point
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
├── vite.config.js    # Vite configuration
├── eslint.config.js  # ESLint rules
└── README.md         # This documentation
```

## React Concepts Demonstrated
- **Functional Components**: Modern React component pattern
- **useState Hook**: State management for time and settings
- **useEffect Hook**: Side effects and cleanup
- **Event Handling**: Button clicks and interactions
- **Conditional Rendering**: Dynamic content based on state
- **Component Lifecycle**: Mount, update, and unmount patterns

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
Run `npm run dev` to start the development server and see the digital clock in action!
