import express from 'express';
import path from 'path';
import {fileURLToPath} from "url";
import {dirname} from "path";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const app = express();
const port = process.env.PORT || 7000;

// Your Express API routes go here...

// Serve your Vue.js application as static content
app.use(express.static(path.join(__dirname, 'dist')));

// all express apis here
app.get('/test_api',(req,res)=>{
    res.send('I am the Express API')
})

// Define a catch-all route to serve the Vue app's HTML file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
