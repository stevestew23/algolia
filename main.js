const algoliasearch = require('algoliasearch');

// Connect and authenticate with my Algolia app
const client = algoliasearch('9RAXH3QAFG', '4d4f6fcd583cc1b8630fae658f045c0c');

// Create my index to store the data I want to make searchable in Algolia.
const index = client.initIndex('spencerWilliam_store');

const urlParams = new URLSearchParams(window.location.search);
const objectID = urlParams.get('objectID');

index.setSettings({
  searchableAttributes: [
    'brand',
    'categories'
  ]
}).then(() => {
  // done
});

// Read raw data from file
const data = require('./data/products.json');

// Transform and filter data
const Main = () => {
  const discountedCamera = data.filter((product) => { // filtering out the items in Camera category
    console.log("Before", product.price);
    const isCameraSale = product.categories.find((category) => // checking if product is in camera category
      category.includes('Camera')
  );
    if (isCameraSale) {
      product.price = Math.floor(product.price * 0.8); // reduce price by 20%, .floor rounds downs as .round rounds to nearest whole
      console.log("after:", product.price);
      return true; // keeping product in filtered array
    }
    return false; // remove the product from filtered array
  });

  // Sending the transformed data to Algolia
  try {
      index.saveObjects(discountedCamera);
      console.log('Data uploaded successfully!');
  } catch (error) {
    console.log('Error uploading data: ', error);
  }
};

// Execute data transformation and upload
Main();

