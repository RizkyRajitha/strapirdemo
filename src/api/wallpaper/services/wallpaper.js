'use strict';

/**
 * wallpaper service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wallpaper.wallpaper');
