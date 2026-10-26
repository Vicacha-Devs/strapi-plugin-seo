import { useFetchClient } from '@strapi/strapi/admin';

import type { SeoSettingsMap } from '../../../shared';

export const useSettingsApi = () => {
  const { get, post } = useFetchClient();

  const getSettings = async () => {
    const resultData = await get<SeoSettingsMap>('/seo/settings');

    return resultData;
  };

  const setSettings = async (data: SeoSettingsMap) => {
    const resultData = await post<SeoSettingsMap>('/seo/settings', data);

    return resultData;
  };

  return { getSettings, setSettings };
};
