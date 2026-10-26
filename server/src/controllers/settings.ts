import type { Core } from '@strapi/strapi';
import type { Context } from 'koa';

export const settingsController = ({ strapi }: { strapi: Core.Strapi }) => {
  const settingsService = strapi.plugins['seo'].services.settings;

  const getSettings = async (ctx: Context) => {
    try {
      return settingsService.getSettings();
    } catch (err) {
      ctx.throw(500, err);
    }
  };
  const setSettings = async (ctx: Context) => {
    const { body } = ctx.request;
    try {
      await settingsService.setSettings(body);
      return settingsService.getSettings();
    } catch (err) {
      ctx.throw(500, err);
    }
  };
  return {
    getSettings,
    setSettings,
  };
};
