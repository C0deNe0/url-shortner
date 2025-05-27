"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//if the env file is in the root folder itself then we keep the config empty
dotenv_1.default.config();
const port = process.env.PORT || 5001;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("hello from get api");
});
app.listen(port, () => {
    console.log(`The server started at ${port}`);
});
