# Connect fronted to backend

## use proxy in react project
 vite.config.js file use like this
server: {
proxy: {
"/api": "http://localhost:5000",
},
},

## start frontend
use axios
npm run dev

## start backend
npm install
.env file 
use Cors
