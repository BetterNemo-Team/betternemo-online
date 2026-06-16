interface Window {
  isElementLoaded?: (element: string) => Promise<void>;
  reloadExtension?: () => Promise<void>;
}
