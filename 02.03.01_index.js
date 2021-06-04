// Tạo Project và Ghi nhận thông tin liên quan
// npm init --y
// npm install --save express
// Mở thư viện fs, express
// const fs = require("fs");
const express = require("express");
// Tham số - Web lắng nghe tại xport
xport = process.env.PORT || 3000;
// Tạo App Web
const app = express();
const router = express.Router();
// Routing WEB
// MCV


//--- Home
router.get('/',
    (req, res) => {
     res.sendFile(__dirname + "/home.html");
    }
);

//--- Profile
router.get('/profile',
    (req, res) => {
       res.sendFile(__dirname + "./procfile.html");
    }
);

//--- Login
router.get('/login',
    (req, res) => {
         res.sendFile(__dirname + "./login.html");
    }
);

//--- Logout
router.get('/logout',
    (req, res) => {
         res.sendFile("./view/logout.html");
    }
);

// START WEB
app.use("/", router);
app.listen(xport,
    (err) => {
        console.log("\n Tạo Web tại ", xport, " với ", err);
    }
);
