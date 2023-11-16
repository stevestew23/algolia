import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import { searchBox, hits, pagination, refinementList } from 'instantsearch.js/es/widgets';

import resultHit from '../templates/result-hit';
import {createInsightsMiddleware} from "instantsearch.js/es/middlewares";

/**
 * @class ResultsPage
 * @description Instant Search class to display content on main page
 */
class ResultPage {
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_API_KEY
    );

    /*const insightsMiddleware = createInsightsMiddleware({
      insightsClient: window.aa,
    })

    this._searchInstance.use(insightsMiddleware);*/

    this._searchInstance = instantsearch({
      indexName: process.env.ALGOLIA_INDEX,
      searchClient: this._searchClient,
    });

    const insightsMiddleware = createInsightsMiddleware({
      insightsClient: aa,
    });

    // aa('setUserToken', 'user-1');

    this._searchInstance.use(insightsMiddleware);

    /*this._searchClient.use(
      instantsearch.middlewares.createInsightsMiddleware({
        insightsClient: window.aa,
      })
    );*/
  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() {
    aa('setUserToken', 'myUser')

    this._searchInstance.addWidgets([
      searchBox({
        container: '#searchbox',
      }),
      hits({
        container: '#hits',
        templates: {
          item: resultHit,
        },
        // *** This is where I tried to implement sending click and conversion events to Algolia. When it is commented
        // clicks are picked up in the Insights Validator Chrome Ext and the price of products go away.

/*         templates: {
           item: (resultHit, bindEvent) => {
             const productUrl = 'product.html?objectID=' + resultHit.objectID;

             return `
               <a class="hit-card" href="${productUrl}" ${bindEvent(
                 'click',
                 resultHit,
                 'Search Result Clicked'
               )}>
                 <div class="hit-content">
                     <img src="${resultHit.image}" alt="${resultHit.name}" />
                     <div class="hit-name">${resultHit._highlightResult.name.value}</div>
                 </div>
               </a>
             `;
           },
         },*/
      }),
      pagination({
        container: '#pagination',
      }),
      refinementList({
        container: '#brand-facet',
        attribute: 'brand',
      }),
      refinementList({
        container: '#categories-facet',
        attribute: 'categories',
      }),
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {

    this._searchInstance.start();
  }
}

export default ResultPage;
