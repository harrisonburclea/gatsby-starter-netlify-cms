export interface IQueryMarkdownData<TQueryData, TNodeKey extends string = string> {
  data: {
    allMarkdownRemark: {
      [key in TNodeKey]: [
        { [key: string]: TQueryData }
      ];
    },
    [key: string]: any;
  },
  pageContext?: any;
  count?: any;
}

export interface IQueryMenuData {
  data: {
    allMenuJson: {
      nodes: [{
        menuItems: [{
          title: string;
          link: string;
        }]
      }]
    }
  }
}
