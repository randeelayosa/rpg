import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { day } from './rpg.js';

$(document).ready(function() {

  $("#day").text(day());
});

// JavaScript goes here!




//Objectives: Inventory, Day counter that increases to a full month, Progress counter that increases the development of a laser gun
