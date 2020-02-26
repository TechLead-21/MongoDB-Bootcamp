* ## Some basic commands :

To show the **current** Database that we are handling.
> db

To **switch** database :
> use <database_name>


Now, we need to create a **collection** in current _database_ :
> db.createCollection("customers");


After creating we need data to populate our `customers` collection :

![insert query](https://res.cloudinary.com/techlead/image/upload/v1582714297/Mongo_playlist/gcrou21sfzk2u2gakiyp.png)

![hi](https://res.cloudinary.com/techlead/image/upload/c_scale,h_300,w_500/v1582714297/Mongo_playlist/gcrou21sfzk2u2gakiyp.png)

We can **insert** multiple _fields_ at once :

> db.customers.insert([
  {
    first_name: "Sam",
    last_name: "Smith"
  },
  {
    first_name: "Michelle",
    last_name: "Johnson"
  },
  {
    first_name: "Mike",
    last_name: "Williams"
  }
]);

![hi](https://res.cloudinary.com/techlead/image/upload/c_scale,h_297,w_557/v1575040626/Dev.to%20posts/nwvkgjypvrm5eo3b1n26.png)
