/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as GenerateImport } from './routes/generate'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const GenerateRoute = GenerateImport.update({
  id: '/generate',
  path: '/generate',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/generate': {
      id: '/generate'
      path: '/generate'
      fullPath: '/generate'
      preLoaderRoute: typeof GenerateImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/generate': typeof GenerateRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/generate': typeof GenerateRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/generate': typeof GenerateRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/generate'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/generate'
  id: '__root__' | '/' | '/generate'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  GenerateRoute: typeof GenerateRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  GenerateRoute: GenerateRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/generate"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/generate": {
      "filePath": "generate.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
