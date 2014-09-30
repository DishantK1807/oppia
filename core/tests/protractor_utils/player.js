// Copyright 2014 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Utilities for playing through an exploration and checking its
 * contents when carrying out end-to-end testing with protractor.
 *
 * @author Jacob Davis (jacobdavis11@gmail.com)
 */

// The get functions return promises rather than values.

var getExplorationName = function() {
  return element(by.css('.conversation-skin-exploration-header')).
    element(by.tagName('h3')).getText();
};

var getCurrentQuestionText = function() {
  return element.all(by.repeater('response in responseLog track by $index')).
    last().element(by.css('.protractor-test-conversation-content')).getText();
};

var getLatestFeedbackText = function() {
  return element.all(by.repeater('response in responseLog track by $index')).
    last().element(by.css('.protractor-test-conversation-feedback')).getText();
};


var getContinueButtonText = function() {
  return element(by.tagName('oppia-interactive-continue')).
    element(by.tagName('button')).getText();
};

var answerContinueWidget = function() {
  element(by.tagName('oppia-interactive-continue')).click();
};


var answerNumericWidget = function(answer) {
  element(by.tagName('oppia-interactive-numeric-input')).
    element(by.tagName('input')).sendKeys(answer + '\n');
};


var getMultipleChoiceOptions = function() {
  return element.all(by.repeater('choice in choices track by $index')).
      map(function(elem) {
    return elem.getText();
  })
};

var answerMultipleChoiceWidget = function(answerText) {
  element(by.tagName('oppia-interactive-multiple-choice-input')).
    element(by.buttonText(answerText)).click();
};


var expectExplorationToBeOver = function() {
  expect(element(by.css('.conversation-skin-response-finished')).
    isDisplayed()).toBe(true);
};

var expectExplorationToNotBeOver = function() {
  expect(element(by.css('.conversation-skin-response-finished')).
    isDisplayed()).toBe(false);
};

exports.getExplorationName = getExplorationName;
exports.getCurrentQuestionText = getCurrentQuestionText;
exports.getLatestFeedbackText = getLatestFeedbackText;

exports.getContinueButtonText = getContinueButtonText;
exports.answerContinueWidget = answerContinueWidget;

exports.answerNumericWidget = answerNumericWidget;

exports.getMultipleChoiceOptions = getMultipleChoiceOptions;
exports.answerMultipleChoiceWidget = answerMultipleChoiceWidget;

exports.expectExplorationToBeOver = expectExplorationToBeOver;
exports.expectExplorationToNotBeOver = expectExplorationToNotBeOver;