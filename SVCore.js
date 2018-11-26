const request = require('request');
const cheerio = require('cheerio');
const { JSDOM } = require('jsdom');

var ICTU = require("./DataSource/ICTU");

var Schools = {
    "ICTU": ICTU,
    "DTC": ICTU,
};

function Open (schoolCode) {
    schoolCode = schoolCode.toUpperCase();
    if (!!Schools[schoolCode]) {
        return new Schools[schoolCode];
    }
};

module.exports.Schools = Schools;
module.exports.Open = Open;
