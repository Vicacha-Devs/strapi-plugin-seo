import type { Context } from 'koa';

export const seoController = {
  findSeoComponent(ctx: Context) {
    ctx.body = strapi.plugin('seo').service('seo').getSeoComponent();
  },
  findContentTypes(ctx: Context) {
    ctx.body = strapi.plugin('seo').service('seo').getContentTypes();
  },
  async createSeoComponent(ctx: Context) {
    strapi.reload.isWatching = false;

    try {
      const data = await strapi.plugin('seo').service('seo').createSeoComponent();
      if (data) setImmediate(() => strapi.reload());
      ctx.body = data;
    } catch (error) {
      console.log(error);
    }
  },
};
