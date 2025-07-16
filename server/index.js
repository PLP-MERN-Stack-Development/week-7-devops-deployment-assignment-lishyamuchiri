const express = require('express');
const app = express();
app.use(express.json());
app.get('/health', (req, res) => res.status(200).json({ status: 'OK' }));
app.listen(process.env.PORT || 5000, () => console.log('Server running'));