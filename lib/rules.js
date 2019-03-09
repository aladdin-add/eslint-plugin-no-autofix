/**
 * @fileoverview expored all rules in the plugin.
 * @author 唯然<weiran.zsd@outlook.com>
 */

"use strict";

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const builtInRules = require("eslint/lib/built-in-rules-index");
const { getNonFixableRule } = require("./utils");
const allRules = {};

Object.keys(builtInRules).reduce((acc, cur) => {
    acc[cur] = getNonFixableRule(cur);
    return acc;
}, allRules);


module.exports = allRules;
