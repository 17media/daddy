"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var suffix00 = function suffix00(date) {
  var len = date.length;

  if (len === 10) {
    return date + " 00:00:00";
  }

  if (len === 13) {
    return date + ":00:00";
  }

  if (len === 16) {
    return date + ":00";
  }

  return date;
};

exports.default = suffix00;