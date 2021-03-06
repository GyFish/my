'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1522252947230_4724';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
    methodnoallow: {
      enable: false
    }, 
    // domainWhiteList: ['http://127.0.0.1:7001'],
    xframe: {
      enable: false
    }
  }

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  }

  return config;
};
