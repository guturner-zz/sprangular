"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var RandomNumberResponse = (function () {
    function RandomNumberResponse() {
    }
    /**
     * Helper method to map JSON to an object.
     */
    RandomNumberResponse.prototype.fromJSON = function (json) {
        for (var propName in json) {
            this[propName] = json[propName];
        }
        return this;
    };
    return RandomNumberResponse;
}());
exports.RandomNumberResponse = RandomNumberResponse;
var RandomNumberService = (function () {
    function RandomNumberService(http) {
        this.http = http;
    }
    RandomNumberService.prototype.getRandomNumber = function () {
        return this.http.get('http://localhost:8080/randomNumber').map(function (response) { return new RandomNumberResponse().fromJSON(response.json()); });
        /**
         * Before, our service was simply returning a single string representing a random number.
         * We used
         *  .map(response => response.text())
         * because we were simply grabbing the number as plain text and returning it.
         */
    };
    return RandomNumberService;
}());
RandomNumberService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RandomNumberService);
exports.RandomNumberService = RandomNumberService;
//# sourceMappingURL=RandomNumberService.js.map