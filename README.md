# Shared Project

![Made using Typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label&color=purple)
[![Release npm package](https://github.com/joedysonbezerra/shared/actions/workflows/release.yaml/badge.svg?branch=master)](https://github.com/joedysonbezerra/shared/actions/workflows/release.yaml)

Library for important resources when there is a chance that these resources will be used in many projects

## How to use this lib

```bash
$ npm install @kernelsoftware/shared
```

## 💻 Requirements

Before starting, make sure you've met the following requirements:

- You have installed both [`node@18.x` and `npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm);

## 🚀 Features

This library provides a robust set of functionalities designed to assist in application development:

- **Logging**: A logging system using the `Logger` module.
- **Base Entity**: The `BaseEntity` offers an initial structure for your entities.
- **Response Management**: Effortlessly manage your application's responses with a variety of tools, including:
  - `ApplicationResult`: A generic application response manager.
  - `ApplicationResultSuccess`: Specifically designed for handling successful responses.
  - `ApplicationResultError`: For handling generic error responses.
  - `ApplicationResultNotFound`: To address 'Not Found' scenarios.
  - `ApplicationResultUnauthorized`: For handling unauthorized accesses.
  - `ApplicationResultForbidden`: To manage 'Access Forbidden' scenarios.
- **Currency Conversion**:
  - `centavosToReal`: Convert centavo values (integer representation of currency) to its real (BRL) formatted string counterpart, e.g., converting 100 centavos to R$1,00.
  - `realToCentavos`: Convert a real (BRL) formatted string to its centavo integer representation, e.g., converting R$1,00 to 100 centavos.
- **Environment Variable Management**:
  - `getEnvOrThrow`: Retrieve the value of a specified environment variable or throw an error if it's not set.
  - `getEnvOrDefault`: Retrieve the value of a specified environment variable or return a default value if it's not set.
