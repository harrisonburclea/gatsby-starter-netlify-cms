export default interface IPreviewProps {
  entry?: {
    getIn<TReturn>(arr: Array<string>): TReturn
  };
  widgetFor?: (pos: string) => string;
  getAsset?: (image: string) => any;
}
