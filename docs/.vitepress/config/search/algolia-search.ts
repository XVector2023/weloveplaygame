import type { DefaultTheme } from 'vitepress';

export const algoliaSearchOptions: DefaultTheme.AlgoliaSearchOptions = {
  appId: 'GO202SKWWG',
  apiKey: 'd398769f7339c4f6b4db75c2f91e4d5a',
  indexName: 'xvector',
  locales: {
    root: {
      placeholder: 'Search documents',
      translations: {
        button: {
          buttonText: 'Search documents',
          buttonAriaLabel: 'Search documents'
        },
        modal: {
          searchBox: {
            resetButtonTitle: 'Clear query',
            resetButtonAriaLabel: 'Clear query',
            cancelButtonText: 'Cancel',
            cancelButtonAriaLabel: 'Cancel'
          },
          startScreen: {
            recentSearchesTitle: 'Search history',
            noRecentSearchesText: 'No search history',
            saveRecentSearchButtonTitle: 'Save to search history',
            removeRecentSearchButtonTitle: 'Remove from search history',
            favoriteSearchesTitle: 'Favorites',
            removeFavoriteSearchButtonTitle: 'Remove from favorites'
          },
          errorScreen: {
            titleText: 'Unable to get results',
            helpText: 'You may need to check your network connection'
          },
          footer: {
            selectText: 'Select',
            navigateText: 'Navigate',
            closeText: 'Close',
            searchByText: 'Search provider'
          },
          noResultsScreen: {
            noResultsText: 'No relevant results found',
            suggestedQueryText: 'You can try searching for',
            reportMissingResultsText: 'Do you think this query should have results?',
            reportMissingResultsLinkText: 'Click to report'
          }
        }
      }
    }
  }
};