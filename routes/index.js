const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.conntect(process.env.MONGODB_URI || 'mongodb://localhost/back-end,', {
    useFindAndModify: false,
    useNewUrlPArser: true,
    useUnifedTopology: true
});

mongoose.set('debug', true);

app.use(required('./routes'));

app.listen(PORT, () => console.log(`Conntected to ${PORT}`))
