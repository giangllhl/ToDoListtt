var mongoose = require("mongoose");
var Item = require("../model/Item");

exports.read_item = function (req, res) {
  Item.find({}, { __v: 0 }, (err, data) => {
    if (err) res.send(err);
    res.json(data);
  });
};

exports.create_item = function (req, res) {
  const data = req.body;
  const newItem = new Item(data);
  newItem.save((err, data) => {
    if (err) res.send(err);
    res.json(data);
  });
};

exports.update_item = function (req, res) {
  const id = req.params.id;
  const name = req.body.name;
  Item.findByIdAndUpdate({ _id: id }, {name : name}, { new: true }, (err, data) => {
    if (err) res.send(err);
    res.json(data);
  });
};

exports.delete_item = function (req, res) {
  const id = req.params.id;
  Item.findByIdAndDelete({_id: id },(err, data) => {
    if (err) res.send(err);
    res.json('DA XOA');
  });
};
