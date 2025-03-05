import type { DefaultTheme } from 'vitepress';

export const localSearchOptions: DefaultTheme.LocalSearchOptions = {
  locales: {
    root: {
      translations: {
        button: {
          buttonText: 'Search',
          buttonAriaLabel: 'Search documents'
        },
        modal: {
          noResultsText: 'No relevant results found',
          resetButtonTitle: 'Clear query',
          footer: {
            selectText: 'Select',
            navigateText: 'Navigate'
          }
        }
      }
    }
  }
};