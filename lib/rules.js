/**
 * @fileoverview expored all rules in the plugin.
 * @author 唯然<weiran.zsd@outlook.com>
 */

"use strict";

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const builtInRules = require("eslint/lib/built-in-rules-index");
const ruleComposer = require("eslint-rule-composer");
const allRules = {};

/**
 * the fixer to overwrite built-in fixer.
 * @returns {null} null
 */
function fixer() {
    return null;
}

Object.keys(builtInRules).reduce((acc, cur) => {
    acc[cur] = ruleComposer.mapReports(builtInRules[cur], problem => (problem.fix = fixer, problem)); //eslint-disable-line
    acc[cur].meta.fixable = null;
    return acc;
}, allRules);


module.exports = allRules;
