const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mockUserData = [{ name: "Make" }, { name: "Yeb" }];

app.get("/users", function(req, res) {
    res.json({
        success: true,
        message: "Success get user",
        users: mockUserData
    });
});

app.get("/users/:id", function(req, res) {
    console.log(req.param.id);
    res.json({
        success: true,
        message: "get one user",
        user: req.param.id
    });
});

app.post("/login", function(req, res) {
    const reqUser = req.body.user;
    const reqPass = req.body.pass;

    const mockUser = "admin";
    const mockPass = "123";
    if ((reqUser === mockUser) && (reqPass === mockPass)) {
        res.json({
            success: true,
            message: "Login success",
            toke: "this is token"
        });
    } else {
        res.json({
            success: false,
            message: "User name or password do not match"
     });
    }
});

app.listen(8000, function() {
    console.log("server is running");
});
