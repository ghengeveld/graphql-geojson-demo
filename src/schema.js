import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql'
import {
  PointObject,
  MultiPointObject,
  LineStringObject,
  MultiLineStringObject,
  PolygonObject,
  MultiPolygonObject,
  GeometryCollectionObject,
  FeatureObject,
  FeatureCollectionObject,
} from 'graphql-geojson'
import {
  point,
  multiPoint,
  lineString,
  multiLineString,
  polygon,
  multiPolygon,
  feature,
  featureCollection,
  geometryCollection,
} from './data.json'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      point: {
        type: PointObject,
        resolve: () => point,
      },
      multiPoint: {
        type: MultiPointObject,
        resolve: () => multiPoint,
      },
      lineString: {
        type: LineStringObject,
        resolve: () => lineString,
      },
      multiLineString: {
        type: MultiLineStringObject,
        resolve: () => multiLineString,
      },
      polygon: {
        type: PolygonObject,
        resolve: () => polygon,
      },
      multiPolygon: {
        type: MultiPolygonObject,
        resolve: () => multiPolygon,
      },
      feature: {
        type: FeatureObject,
        resolve: () => feature,
      },
      featureCollection: {
        type: FeatureCollectionObject,
        resolve: () => featureCollection,
      },
      geometryCollection: {
        type: GeometryCollectionObject,
        resolve: () => geometryCollection,
      },
    }),
  }),
})
