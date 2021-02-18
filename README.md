# react-query-string-poc

A simple react app to demonstrate using a query string, or more appropriately called the [search parameter](https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams).

## Quick Start

```shell
git clone https://github.com/nicc777/react-query-string-poc.git

cd react-query-string-poc

yarn && yarn start
```

Got to http://localhost:3000/

You should see the following text:

```text
The requested target: /
```

To test the functionality, add a query string: http://localhost:3000?target=/some/target

You should see the following text:

```text
The requested target: /some/target
```

## Credits

This is a simple implementation of the [blog post](https://dev.to/brettfishy/the-easiest-way-to-use-query-parameters-in-react-1ioe) by [Brett Fisher](https://dev.to/brettfishy). He also created [a GitHub project](https://github.com/bandrewfisher/use-query-param) with his version of the demo.

