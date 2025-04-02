/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as StalemodeImport } from './routes/stalemode'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const StalemodeRoute = StalemodeImport.update({
  id: '/stalemode',
  path: '/stalemode',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/solid-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/stalemode': {
      id: '/stalemode'
      path: '/stalemode'
      fullPath: '/stalemode'
      preLoaderRoute: typeof StalemodeImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/stalemode': typeof StalemodeRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/stalemode': typeof StalemodeRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/stalemode': typeof StalemodeRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/stalemode'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/stalemode'
  id: '__root__' | '/' | '/stalemode'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  StalemodeRoute: typeof StalemodeRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  StalemodeRoute: StalemodeRoute,
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
        "/stalemode"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/stalemode": {
      "filePath": "stalemode.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
