"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var stripe_1 = require("stripe");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var pg_1 = require("pg");
dotenv_1.default.config();
// Initialize the Stripe library
var stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY_TEST, {
    apiVersion: '2023-08-16',
});
var pool = new pg_1.Pool({
    user: 'kentosaurren',
    host: 'localhost',
    database: 'Webshop',
    password: 'parkerWilson01',
    port: 5432,
});
var app = (0, express_1.default)();
var port = 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello, worldss!');
});
// Create Payment Intent API
app.post('/api/create-payment-intent', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var amount, paymentIntent, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('Inside /api/create-payment-intent'); // <-- New log here
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                amount = req.body.amount;
                return [4 /*yield*/, stripe.paymentIntents.create({
                        amount: amount,
                        currency: 'nok',
                    })];
            case 2:
                paymentIntent = _a.sent();
                res.status(200).send({ clientSecret: paymentIntent.client_secret });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.status(400).send({ error: 'An error occurred while creating a payment intent' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Confirm Payment API
app.post('/api/confirm-payment', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
// Retrieve Payment History API
app.get('/api/payment-history', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
// Refund Payment API
app.post('/api/refund-payment', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/];
    });
}); });
app.post('/api/save-delivery-info', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deliveryInfo, rows, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Received request to /api/save-delivery-info");
                deliveryInfo = req.body;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 7, , 8]);
                return [4 /*yield*/, pool.query('SELECT * FROM Users WHERE email = $1', [deliveryInfo.email])];
            case 2:
                rows = (_a.sent()).rows;
                if (!(rows.length === 0)) return [3 /*break*/, 4];
                // Insert new record
                return [4 /*yield*/, pool.query('INSERT INTO Users(email, firstName, lastName, phone, shippingAddress, billingAddress) VALUES($1, $2, $3, $4, $5, $5)', [deliveryInfo.email, deliveryInfo.firstName, deliveryInfo.lastName, deliveryInfo.phone, deliveryInfo.street + ', ' + deliveryInfo.zip + ' ' + deliveryInfo.city])];
            case 3:
                // Insert new record
                _a.sent();
                return [3 /*break*/, 6];
            case 4: 
            // Update existing record
            return [4 /*yield*/, pool.query('UPDATE Users SET firstName = $2, lastName = $3, phone = $4, shippingAddress = $5, billingAddress = $5 WHERE email = $1', [deliveryInfo.email, deliveryInfo.firstName, deliveryInfo.lastName, deliveryInfo.phone, deliveryInfo.street + ', ' + deliveryInfo.zip + ' ' + deliveryInfo.city])];
            case 5:
                // Update existing record
                _a.sent();
                _a.label = 6;
            case 6:
                res.status(200).send({ message: 'Delivery info saved successfully!' });
                return [3 /*break*/, 8];
            case 7:
                error_2 = _a.sent();
                res.status(500).send({ error: 'An error occurred while saving the delivery info.' });
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); });
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port, "/"));
    console.log('Server started...'); // <-- New log here
});
