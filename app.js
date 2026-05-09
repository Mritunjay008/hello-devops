const express = require('express')
const app = express()

const PORT = process.loadEnvFile.PORT || 3000;
app.get('/', (req, res)=>{
    res.send('Hello world from Azure devops CI/CD');
})

app.listen(PORT, ()=>{
    console.log(`Server running on {PORT}`);
});