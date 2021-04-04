import { graphql, useStaticQuery } from 'gatsby'
import { Resolvable } from '../interfaces/types';

interface MetaData {
  title: string;
  description: string;
}

const useSiteMetadata: Resolvable<MetaData> = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );
  return site.siteMetadata
};

export default useSiteMetadata
