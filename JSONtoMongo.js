'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect('config')
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
*/
var listings
fs.readFile('listings.json', 'utf8', function(err, data) {
    /*
        This callback function should save the data in the listingData variable, 
        then start the server. 
    */
    listings = data;
    console.log(listings);
});
console.log(listings);
/*
Listing.collection.insertMany(listings, function(err, r) {
  assert.equal(null, err);
  assert.equal(3, r.insertedCount);

  db.close();
})
*/
/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
*/