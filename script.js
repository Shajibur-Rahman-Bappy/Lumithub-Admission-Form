const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

const database = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'users'
});
database.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database');
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/registration', (req, res) => {
    try {
        const { admissionDate, sectionName, id, referanceName, name, nameBangla, fatherName, motherName, sex, nationality, nationalId, contactNo, whatsappNumber, email, presentAdd, presentPost, presentThana, presentDistrict, permanentAdd, permanentPost, permanentThana, permanentDistrict, educationalQualification, instituteName, passingYear, facultys, results, experience, preCourse, cCode, cType, cFee, cDuration, classTime, admissionPurpose, paymentMethod, amount, paymentDate, attachment, contactName, relationship, phoneNumber, studentSignature, announcementDate, attOther, authoritySignature } = req.body;
        const SQL_COMMAND = "INSERT INTO userdetails (admissionDate, sectionName, id, referanceName, name, nameBangla, fatherName, motherName, sex, nationality, nationalId, contactNo, whatsappNumber, email, presentAdd,presentPost,presentThana,presentDistrict, permanentAdd, permanentPost, permanentThana, permanentDistrict, educationalQualification, instituteName, passingYear, facultys, results, experience,preCourse,cCode,cType,cFee,cDuration,classTime,admissionPurpose,paymentMethod,amount,paymentDate,attachment,contactName,relationship,phoneNumber,studentSignature,announcementDate,attOther,authoritySignature) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        database.query(SQL_COMMAND, [admissionDate, sectionName, id, referanceName, name, nameBangla, fatherName, motherName, sex, nationality, nationalId, contactNo, whatsappNumber, email, presentAdd, presentPost, presentThana, presentDistrict, permanentAdd, permanentPost, permanentThana, permanentDistrict, educationalQualification, instituteName, passingYear, facultys, results, experience, preCourse, cCode, cType, cFee, cDuration, classTime, admissionPurpose, paymentMethod, amount, paymentDate, attachment, contactName, relationship, phoneNumber, studentSignature, announcementDate, attOther, authoritySignature], (err, result) => {
            if (err) {
                console.error(err);
                return res.send("Registration failed. Please try again.");
            }
            console.log(result);
            res.send("Registration successful!");
        });
    } catch (err) {
        console.error(err);
        res.send("Registration failed. Please try again.");
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});