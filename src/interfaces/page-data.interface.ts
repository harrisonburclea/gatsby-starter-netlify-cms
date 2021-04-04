export interface IQueryData<TQueryData, TNodeKey extends string = string> {
  data: {
    allMarkdownRemark: {
      [key in TNodeKey]: [
        { [key: string]: TQueryData }
      ] | number;
    },
    [key: string]: any;
  },
  pageContext?: any;
  count?: any;
}
