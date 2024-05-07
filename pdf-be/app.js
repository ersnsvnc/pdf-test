const express = require('express');
const path = require('path');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload());

const filePath = path.join(__dirname, 'docs');

if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath);
}

app.post('/pdf', (req, res) => {
    const { file } = req.files;
    const finalUploadPath = path.join(filePath, file.name);

    file.mv(finalUploadPath, err => {
        if (err) {
            console.log(err);
        }

        res.send('success');
    })
})


app.listen(port, () => {
    console.log('server is running on ' + ' ' + port);
})