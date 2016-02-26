'use strict';
import expect from 'expect';
import {Meteor} from 'meteor/meteor';
import {chai, assert} from 'meteor/practicalmeteor:chai';

import {Districts} from '/collections/collections.js';


describe('District', () => {
  beforeEach(() => {
    Districts.remove({});
  });

  it('should be inserted successfuly', () => {
    const insertSync = Meteor.wrapAsync(Districts.insert, Districts);
    const result = insertSync({country: 'España', region: 'País Vasco', district: 'Vizcaya'});
    assert.typeOf(result, 'string', 'insert method return a string on success');
  });

  it('should not be inserted successfuly', () => {
    let errored;
    var insertSync = Meteor.wrapAsync(Districts.insert, Districts);
    try {
      insertSync({country: 'España', region: 'País Vasco'});
      errored = false;
    } catch(error) {
      errored = true;
    }
    assert.isTrue(errored, 'insert failed raising an exception');
  });
});
