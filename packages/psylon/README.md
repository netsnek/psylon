<p align="center">
  <a href="https://netsnek.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://avatars.githubusercontent.com/u/148873257?s=400&u=db7fa77c9a2a16eec51871024811abd21f734787&v=4" alt="SNEK Logo" height="150">
  </a>
</p>


<div align="center"><strong>Psylon</strong></div>
<div align="center">The next generation of building APIs.<br />Automatic schema generation for your service logic.</div>
<br />
<div align="center">
<a href="https://netsnek.com">Website</a>
<span> · </span>
<a href="https://github.com/netsnek/psylon">GitHub</a>
<span> · </span>
<a href="https://discord.com/invite/cbJjkVrnHe">Discord</a>

<br />
<br />

[![Documentation](https://img.shields.io/badge/documentation-documentation?color=000000)](https://pylon.cronit.io/docs)
[![NPM](https://img.shields.io/npm/v/psylon)](https://www.npmjs.com/package/psylon)
[![Discord](https://img.shields.io/discord/1270327745662029854)](https://discord.com/invite/cbJjkVrnHe)

</div>

## Introduction

A framework for building GraphQL APIs without defining any kind of schema.
It reduces the time spent on writing and maintaining API definitions, allowing you to focus solely on writing your service logic.

## Why

We believe that the current approach to building APIs is outdated. Writing and maintaining API definitions is time-consuming and error-prone. When you already have TypeScript definitions, why not use them to infer the API schema? Psylon does exactly that.

Psylon also provides a set of tools to help you build, test, and deploy your APIs. We believe that building services should be easy and fun. Major functionalities like authentication, authorization, and context management are built-in, so you can focus on what matters most: your service logic.

With Psylon, you can build APIs faster, with fewer errors, and with less code.

## About

Psylon is a Pylon v2 fork maintained by Netsnek e. U., tuned to behave like its
predecessor snek-functions and laser-focused on seamless microservice interoperability.

Unlike Pylon v3, which aims to become a full-stack framework, Psylon is and will
remain a GraphQL-based microservice framework. Security fixes and compatible
behavioural changes from Pylon v3 that improve the v2 runtime will be backported
to Psylon where appropriate.

Canonical repository: https://github.com/netsnek/psylon

## Version lineage

Psylon is a fork of Pylon v2.

- `pylon@2.9.6` – last upstream Pylon v2 release from @schettn under the `@getcronit` scope.
- `psylon@2.9.6` – first Psylon release, based on `pylon@2.9.6` with rebranding, new package names,
  and essentially the same feature set as that upstream release.
- `psylon@2.9.7` and later – new releases maintained by Netsnek e. U. under the `psylon` and
  `@netsnek/*` package names.

From `psylon@2.9.6` onwards, the histories diverge: Psylon keeps the Pylon v2 runtime, focuses on
GraphQL-based microservices, and selectively backports security fixes and compatible improvements
from Pylon v3.

## Roadmap

Psylon uses pgqty (a fork of GQty) as its GraphQL client layer. For current plans and discussion, see
[gqty-dev/gqty#2051](https://github.com/gqty-dev/gqty/issues/2051).

## Create

To create a new Psylon project, run the following command:

```bash
npm create psylon@latest
```

Afterwards, you can navigate to the newly created project and start the development server:

```bash
cd my-psylon
npm run dev
```

This will start the development server on `http://localhost:3000`.

Open the [Psylon Playground](https://pylon.cronit.io/docs/getting-started#built-in-graphql-playground) in your browser and start building your API.

## Develop

Update your service logic in the `src` directory.

```typescript
import {app} from 'psylon'

export const graphql = {
  Query: {
    user: (id: string) => {
      return {
        id,
        name: 'John Doe',
        email: 'johndoe@example.com'
      }
    },
    products: () => [
      {id: '1', name: 'Laptop', price: 999.99},
      {id: '2', name: 'Smartphone', price: 499.99},
      {id: '3', name: 'Tablet', price: 299.99}
    ]
  },
  Mutation: {
    updateUserEmail: (id: string, newEmail: string) => {
      return {
        id,
        email: newEmail
      }
    },
    createOrder: (userId: string, productIds: string[]) => {
      return {
        id: 'order-123',
        userId,
        productIds,
        status: 'PENDING'
      }
    }
  }
}

export default app
```

**Query:**

```graphql
query GetUser {
  user(id: "1") {
    id
    name
    email
  }
}

query GetProducts {
  products {
    id
    name
    price
  }
}
```

**Mutation:**

```graphql
mutation UpdateUserEmail {
  updateUserEmail(id: "1", newEmail: "johndoe2@example.com") {
    id
    email
  }
}

mutation CreateOrder {
  createOrder(userId: "1", productIds: ["1", "2"]) {
    id
    userId
    productIds
    status
  }
}
```

## Deploy

Psylon is fully compatible with Cloudflare Workers, allowing you to deploy your service to the edge in just one minute.
Watch the video below to see how easy it is to deploy a Psylon.

![Cloudflare Workers](https://github.com/user-attachments/assets/8e9f96a7-47e3-4c66-8426-fe09329de598)

If you prefer to deploy your service to a different platform, you can use the provided Dockerfile to build a Docker image and deploy it to your favorite cloud provider.

```bash
docker build -t my-pylon .
docker run -p 3000:3000 my-pylon
```

## Runtimes

Designed to be flexible, Psylon can be run on various platforms, including:

| <img src="https://bun.sh/logo.svg" width="48px" height="48px" alt="Bun.js logo"> | <img src="https://nodejs.org/static/logos/jsIconWhite.svg" width="48px" height="48px" alt="Node.JS"> | <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgW7cAlhYN23JXGKy9Uji4Ae2mnHOR9eXX9g&s" width="48px" height="48px" alt="Gmail logo"> | <img src="https://deno.land/logo.svg" width="48px" height="48px" alt="Deno logo"> |
| :------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------------------------------------------- |
|                                      Bun.js                                      |                                               Node.js                                                |                                                                  Cloudflare Workers                                                                  | Deno                                                                              |

## Features

Psylon offers a comprehensive set of features to streamline the development of modern web services:

| Feature                              | Description                                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Automatic Schema Generation**      | Psylon generates GraphQL schemas based on your TypeScript definitions, ensuring type safety and reducing manual coding effort.        |
| **Type Safety**                      | By leveraging TypeScript, Psylon ensures that your services are type-safe, catching errors at compile time.                           |
| **Authentication and Authorization** | Built-in support for OIDC standard and integration with ZITADEL for managing user authentication and role-based access control.      |
| **Logging and Monitoring**           | Sentry for error tracking, providing robust monitoring capabilities.                                                                 |
| **Database Integration**             | Seamlessly works with Prisma to generate extended models that support automatic resolution of relations and paginatable connections. |
| **Deployment Ready**                 | Includes pre-configured Dockerfile for easy deployment using Docker or manual methods.                                               |

## Playground

You can try Psylon in the [Playground](https://pylon.cronit.io/playground) without installing anything.
Or simply click the image below to open the Playground.

[![Playground](https://github.com/user-attachments/assets/39df08d0-4094-4836-a36b-37ad62e292cf)](https://pylon.cronit.io/playground)

## Contributing

Documentation, bug reports, pull requests, and other contributions are welcomed!
See [`CONTRIBUTING.md`](CONTRIBUTING.md) for more information.

## Support

- **Community Support:** Join the Psylon community on GitHub to report bugs and request features.
- **Professional Support:** For professional support and consulting services, contact [office@cronit.io](mailto:office@cronit.io).
- Join the [Psylon Discord server](https://discord.gg/cbJjkVrnHe) to connect with other users and contributors.

---

Psylon is brought to you by Cronit.
