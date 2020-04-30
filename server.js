const express = require("express");
const app = express();

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

app.listen(8000, function() {
    console.log("server is running");
});
