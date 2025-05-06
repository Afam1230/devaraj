import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";


// Create a custom theme with mystical purple and indigo colors
const theme = extendTheme({
	colors: {
	  purple: {
		50: '#f5e9ff',
		100: '#dac1fa',
		200: '#c09af1',
		300: '#a672e8',
		400: '#8c4adf',
		500: '#7231c6',
		600: '#59269b',
		700: '#401b70',
		800: '#271146',
		900: '#14061d',
	  },
	  indigo: {
		50: '#edf2ff',
		100: '#d0d7ff',
		200: '#8a94d6',
		300: '#6470c4',
		400: '#4957b6',
		500: '#3544a5',
		600: '#2d3a8c',
		700: '#242e72',
		800: '#1b2358',
		900: '#111640',
	  },
	  gold: {
		50: '#fef9e7',
		100: '#faeec7',
		200: '#f7e3a6',
		300: '#f3d884',
		400: '#efcd62',
		500: '#dec754',
		600: '#cbb446',
		700: '#b9a139',
		800: '#a6902d',
		900: '#947e22',
	  }
	},
	fonts: {
	  body: "'Lato', sans-serif",
	  heading: "'Playfair Display', serif",
	},
	styles: {
	  global: {
		body: {
		  bg: 'gray.900',
		  color: 'white',
		},
	  },
	},
  });

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
);