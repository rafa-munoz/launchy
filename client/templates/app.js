'use strict';
import {accountsUIBootstrap3} from 'meteor/ian:accounts-ui-bootstrap-3';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';


accountsUIBootstrap3.setLanguage(Meteor.settings.public.language);

Template.appHeader.helpers({
  siteName() {
    return Meteor.settings.public.site_name;
  },
  urlHome() {
    return FlowRouter.path('home');
  },
  urlCars() {
    return FlowRouter.path('cars');
  },
  urlCreateAd() {
    return FlowRouter.path('createAd');
  }
});

Template.appFooter.helpers({
  urlCreateAd() {
    return FlowRouter.path('createAd');
  },
  urlTC() {
    return FlowRouter.path('termsAndConditions');
  }
});

Template._loginButtonsAdditionalLoggedInDropdownActions.helpers({
  urlMyAds() {
    return FlowRouter.path('myAds');
  }
});


Template.createAd.helpers({
  urlTC() {
    return FlowRouter.path('termsAndConditions');
  }
});
