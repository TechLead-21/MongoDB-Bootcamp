//?  Inserting and Finding Customers

db.createCollection("customers");

db.customers.insert({ first_name: "John", last_name: "Doe" });

db.customers.find();

pretty();

db.customers.find().pretty();

db.customers.insert([
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

db.customers.insert({
  first_name: "Wendy",
  last_name: "Samson",
  Occupation: "Nurse"
});

db.customers.insert({
  first_name: "Mike",
  last_name: "Samson",
  Age: 43
});

db.customers.insert({
  first_name: "Bob",
  last_name: "Jackson",
  Occupation: "Technician",
  Birthday: new Date("Sep 12. 1980")
});

db.customers.findOne();
db.customers.findOne({ first_name: "Wendy" });

//?    Updating and Removing Customers

db.customers.find().pretty();

db.customers.update(
  { first_name: "Mike" },
  { first_name: "Mike", last_name: "Hill" }
);

db.customers.update(
  { first_name: "Mike" },
  {
    $set: {
      last_name: "Valley",
      Occupation: "Fisherman",
      Age: 48
    }
  }
);

db.customers.find({ first_name: "Mike" });

//?    Upsert()

db.customers.update(
  {
    first_name: "Beth"
  },
  {
    $set: {
      last_name: "Jonas",
      Age: 26
    }
  }
);

db.customers.update(
  {
    first_name: "Beth"
  },
  {
    $set: {
      last_name: "Jonas",
      Age: 26
    }
  },
  { upsert: true } //! condition
);

db.customers.update(
  { first_name: "Mike" },
  {
    //! remove Age
    $unset: {
      Age: 1
    }
  }
);

db.customers.remove({
  first_name: "Michelle"
});

//? Remove older than 25

db.customers.remove({
  Age: { $gt: 25 }
});

//? Arrays & Embedded Objects

db.customers.insert({
  first_name: "Peter",
  last_name: "Carey",
  Age: 32,
  Address: {
    street: "120 Main St.",
    city: "Chicago",
    state: "IL",
    zipcode: 37477
  }
});

db.customers.find({ first_name: "Peter" });

db.customers.insert({
  first_name: "George",
  last_name: "Lopez",
  Services: [
    {
      service_Id: "linux_hosting",
      service_name: "Linux Hosting"
    },
    {
      service_Id: "email_hosting",
      service_name: "Email Hosting"
    }
  ],
  Services_count: 2
});

db.customers.find({ first_name: "George" }).pretty();

//! only show Services
db.customers.find(
  {
    first_name: "George"
  },

  {
    Services: 1
  }
);

//!  Only services

db.customers.find(
  {
    first_name: "George"
  },

  {
    "Services.service_name": 1
  }
);

//?  Add more services to Peter account

db.customers.update(
  {
    first_name: "George"
  },
  {
    $push: {
      Services: {
        services_Id: "domain_register",
        service_name: "Domain Registration"
      }
    }
  }
);

db.customers.find({ first_name: "George" }).pretty();
