# graphql-geojson-demo

```bash
npm start
```

GraphQL endpoint: http://localhost:8000/graphql

## Full query

```graphql
query {
  point {
    type
    coordinates
  }
  multiPoint {
    type
    coordinates
  }
  lineString {
    type
    coordinates
  }
  multiLineString {
    type
    coordinates
  }
  polygon {
    type
    coordinates
  }
  multiPolygon {
    type
    coordinates
  }
  feature {
    type
    id
    properties
    geometry {
      type
      coordinates
    }
  }
  featureCollection {
    type
    features {
      type
      properties
      geometry {
        type
        coordinates
      }
    }
  }
  geometryCollection {
    type
    geometries {
      type
      coordinates
    }
  }
}
```
