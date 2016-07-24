'use strict';
var expect = require('chai').expect;

function titleCase(title){
  var words = title.split(' ');
  var titleCaseWords = words.map(function(word){
    return word[0].toUpperCase() + word.substring(1);
  });

  return titleCaseWords.join(' ');
}

expect(titleCase('the great war for earth')).to.be.a('string');

expect(titleCase('a')).to.equal('A');
expect(titleCase('vertigo')).to.equal('Vertigo');
expect(titleCase('the great war for earth')).to.equal('The Great War For Earth');
