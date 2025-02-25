# Project Name

This is the backend project for the [AOpy app](https://ao-py.netlify.app/).

## Description

## Description

Inventory management for the Paraguayan store AO. Admin users can manage products. Users can search for products and favorite them.

#### [Client Repo here](https://github.com/somorales/ao-frontend)

#### [Server Repo here](https://github.com/somorales/ao-backend)

## Technologies, Libraries & APIs used

- **Frontend:** React, HTML5, CSS3, JavaScript
- **Backend:** Node.js
- **Styling:** Tailwind
- **HTTP client:** Axios
- **Deployment:** Netlify (Frontend), Render & Mongo Atlas (Backend)

# Server Structure

## Models

User model

```javascript
{
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    name: {
      type: String,
      required: [true, 'Name is required.']
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },
    basket: {
      products: [{ type : Schema.Types.ObjectId, ref: 'Product' }],
      kits: [{ type : Schema.Types.ObjectId, ref: 'Kit' }]
    }
}
```

Product model

```javascript
{
    name: {
        type: String,
        required: [true, "Name is required."],
    },
    description: {
        type: String,
        required: [true, "Description is required."],
    },
    image: {
        type: String,
        required: [true, "Image is required."]
    },
    price: {
        type: Number,
        required: [true, "Price is required."]
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required."]
    },
    size: {
        type: String
    },
    color: {
        type: String
    }
}
```

Kit model

```javascript
{
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    description: {
        type: String,
        required: [true, "Description is required."],
    },
    image: {
        type: String,
        required: [true, "Image is required."]
    },
    price: {
        type: Number,
        required: [true, "Price is required."]
    },
    quantity: {
        type: Number,
        required: [true, "Quantity is required."]
    },
    products: [
        { type: Schema.Types.ObjectId, ref: "Product" }
    ]
}
```


## API Endpoints (backend routes)


| HTTP Method | URL                     | Request Body                                    | Success Status | Error Status | Description                                   |
|-------------|-------------------------|------------------------------------------------|----------------|--------------|-----------------------------------------------|
| GET         | `/kits`                 |                                                | 200            | 400          | Returns an array with all available kits.     |
| GET         | `/kits/:id`             |                                                | 200            | 404          | Returns details of a specific kit.            |
| GET         | `/kits/:id/details`     |                                                | 200            | 404          | Returns a kit along with its product details. |
| DELETE      | `/kits/:id`             |                                                | 200            | 404          | Deletes a kit by its ID.                      |
| POST        | `/kits`                 | { name, description, image, price, quantity, products } | 201            | 400          | Creates a new kit.                            |
| PUT         | `/kits`                 | { name, description, image, price, quantity, products } | 200            | 400          | Updates an existing kit.                      |
| GET         | `/products`             |                                                | 200            | 400          | Returns an array with all available products. |
| GET         | `/products/:id`         |                                                | 200            | 404          | Returns details of a specific product.        |
| DELETE      | `/products/:id`         |                                                | 200            | 404          | Deletes a product by its ID.                  |
| POST        | `/products`             | { name, description, image, price, quantity, size, color } | 201            | 400          | Creates a new product.                        |
| PUT         | `/products/:id`         | { name, description, image, price, quantity, size, color } | 200            | 400          | Updates an existing product.                  |



## Links


### Project

[Repository Link Client](https://github.com/somorales/ao-frontend)

[Repository Link Server](https://github.com/somorales/ao-frontend)

[Deploy Link](https://ao-py.netlify.app)

### Model Planning

[Model Planning Link](https://www.figma.com/design/kY44d1N2H39t7OH9vyGksz/AOPY?node-id=0-1&t=tHlnQvChYWUkUYn0-1)

### Slides
[Slides Link](https://www.figma.com/design/fHX6sMQJantPEe3rtz3lXV/Ao?node-id=0-1&t=TKpestibuvMdKwTW-1)
