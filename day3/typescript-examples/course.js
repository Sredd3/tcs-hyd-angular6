"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course = /** @class */ (function () {
    /*private title:string;
    private desc:string;
    private durationInDays:number;*/
    function Course(_title, _durationInDays, _desc) {
        this._title = _title;
        this._durationInDays = _durationInDays;
        this._desc = _desc;
        /*this.title = title;
        this.desc = desc;
        this.durationInDays = durationInDays;*/
    }
    Object.defineProperty(Course.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "desc", {
        get: function () {
            return this._desc || '';
        },
        set: function (desc) {
            this._desc = desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "durationInDays", {
        get: function () {
            return this._durationInDays;
        },
        set: function (duration) {
            this._durationInDays = duration;
        },
        enumerable: true,
        configurable: true
    });
    return Course;
}());
exports.Course = Course;
