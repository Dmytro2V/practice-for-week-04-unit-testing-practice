const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let testWord
  before(function() {
    testWord = new Word;
  })
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(testWord).to.have.property('word');
    });
  
    it('should set the "word" property when a new word is created', function () {
      let testWord = new Word('TestWord')      
      expect(testWord.word).to.eql('TestWord');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      let testWord = new Word('RemovingWowels')
      expect(testWord.removeVowels()).to.eql('RmvngWwls');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      let testWord = new Word('RemovingConsonannts')
      expect(testWord.removeConsonants()).to.eql('eoiooa');
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const str1 = 'About'
      const word1 = new Word(str1);      
      const str2 = 'Consonant'
      const word2 = new Word(str2);
      const str3 = 'ooo'
      const word3 = new Word(str3);
      const str4 = 'hm'
      const word4 = new Word(str4);
  
      const actual1 = word1.pigLatin();
      const actual2 = word2.pigLatin(); 
      const actual3 = word3.pigLatin(); 
      const actual4 = word4.pigLatin(); 

      const expected1 = 'Aboutyay';
      const expected2 = 'onsonantCay';
      const expected3 = 'oooyay';
      const expected4 = undefined;

      expect(actual1).to.equal(expected1);
      expect(actual2).to.equal(expected2);
      expect(actual3).to.equal(expected3);
      expect(actual4).to.equal(expected4);




    });
  });
});