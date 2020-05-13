/*
 * @Descripttion: 
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const config = exports = {};

  config.next = {
    dir: './ssr',
    dev: false,
  };

  return {
    ...config,
  };
};
