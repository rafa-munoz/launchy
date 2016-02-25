'use strict';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Template} from 'meteor/templating';

import {Images} from '/client/imports/collections.js';
import {Cars} from '/collections/collections.js';


Template.cars.helpers({
  cars() {
    var cars = Cars.find({'published': true, 'active': true}).fetch();  // TODO: limit fields
    cars.forEach(function(car) {
      car.image = Images.findOne({assigned: car['_id']});
    });
    return cars;
  }
});

Template.car.helpers({
  urlCarDetails() {
    var car = this;
    var params = {
        _id: car._id
    };
    var routeName = 'carDetails';
    var path = FlowRouter.path(routeName, params);
    return path;
  }
});
