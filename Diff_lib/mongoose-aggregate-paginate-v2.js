/*

### What is Mongoose?
Before we dive into `mongoose-aggregate-paginate-v2`, it's important to understand Mongoose. Mongoose is a tool that helps you work with MongoDB (a type of database) in Node.js. It lets you define how your data should look (schemas) and provides an easy way to interact with that data.

### What is Aggregation?
Aggregation in MongoDB is like performing a series of operations on your data to transform it or get specific results. For example, you might want to filter out certain records, group data together, calculate averages, or sort the results.

### Why Use Pagination?
Pagination is when you split a large set of data into smaller "pages" or chunks. For example, if you have 1,000 items, you might want to show them 10 at a time. This makes it easier to browse through the data without overwhelming the user (or the server).

### What is `mongoose-aggregate-paginate-v2`?

`mongoose-aggregate-paginate-v2` is a plugin for Mongoose that makes it easy to add pagination to your aggregation queries. In other words, it helps you take the results from a complex data operation (aggregation) and break them down into pages.

### Why is it useful?

- **Simplifies Pagination:** Without this plugin, you would have to manually calculate how many items to skip and how many to limit in your results. This plugin handles all of that for you.

- **Works with Aggregation:** If you're using aggregation to get complex results (like combining, filtering, and sorting data), this plugin lets you paginate those results easily.

### How to Use It

1. **Install the Plugin:**
   First, you need to install `mongoose-aggregate-paginate-v2` in your project.

   ```bash
   npm install mongoose-aggregate-paginate-v2
   ```
*/
// 2. **Add the Plugin to Your Schema:**
//    You need to tell Mongoose to use this plugin with your data model.

  
   const mongoose = require('mongoose');
   const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

   const mySchema = new mongoose.Schema({
       name: String,
       age: Number,
       // other fields...
   });

   mySchema.plugin(aggregatePaginate);

   const MyModel = mongoose.model('MyModel', mySchema);


// 3. **Use the Pagination in an Aggregation Query:**
//    When you run an aggregation query, you can now easily paginate the results.


   const myAggregation = MyModel.aggregate([
       { $match: { age: { $gte: 18 } } },  // Example: Find people 18 or older
       { $sort: { age: -1 } }  // Example: Sort by age in descending order
   ]);

   MyModel.aggregatePaginate(myAggregation, {
       page: 1,  // The page number you want
       limit: 10 // How many items per page
   }).then(result => {
       console.log(result.docs); // The paginated results
       console.log(result.totalDocs); // Total number of documents found
       console.log(result.totalPages); // Total number of pages
   });

/*
### In Summary:
- **Aggregation:** Think of it as combining and filtering your data to get just what you want.
- **Pagination:** Breaking a large set of results into smaller chunks.
- **`mongoose-aggregate-paginate-v2`:** A handy tool that makes it easy to paginate the results of your aggregation queries in Mongoose.

So, when you're dealing with large sets of data and want to show it in smaller pieces, `mongoose-aggregate-paginate-v2` makes the job much easier!

*/