import * as React from 'react';
import { unstable_useContentManagerContext as useContentManagerContext } from '@strapi/strapi/admin';
import { Summary } from './Summary';

export const SeoChecker = () => {
  const { form } = useContentManagerContext();
  const values = (form as { values?: Record<string, any> }).values;

  if (values?.seo) {
    return <Summary />;
  }

  return <React.Fragment />;
};
