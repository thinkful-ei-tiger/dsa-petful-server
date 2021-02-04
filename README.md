# Petful Server

This is an app that allows to adopt a cat, a dog or both of them. The first person in the queue will be have the option to adopt the oldest pets in the selter.

## API Documentation

```text

├── /people
│   └── GET
│       ├── /
│   └── POST
│       ├── /
│   └── DELETE
│       ├── /
├── /pets
│   └── GET
│       ├── /
│   └── DELETE
│       ├── /
```

### GET `/people/

```js
// res.body
['Randy Lahey', 'Trevor Cory', 'Jim Lahey'];
```

### POST `/people/

```js
// req.body
{"name":"Andy Crux"}

```

### DELETE `/people/

```js
// req.body
{
}
// res.body
{
}
```

### GET `/pets/

```js
// res.body
{
    "cat": {
        "age": 2,
        "breed": "Bengal",
        "description": "Orange bengal cat with black stripes lounging on concrete.",
        "gender": "Female",
        "imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Steve French",
        "story": "Thrown on the street"
    },
    "dog": {
        "age": 3,
        "breed": "Golden Retriever",
        "description": "A smiling golden-brown golden retreiver listening to music.",
        "gender": "Male",
        "imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Zim",
        "story": "Owner Passed away"
    }
}
```

### DELETE `/pets/

```js
// req.body
{
    "type":"cat"
}
// res.body
{
}
```

These server is developed with:
Node.js, express.
