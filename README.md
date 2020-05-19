# vue-leaflet-minimap

A [Vue2Leaflet](https://github.com/vue-leaflet/Vue2Leaflet) wrapper component for the [Leaflet-MiniMap](https://github.com/Norkart/Leaflet-MiniMap) plugin.

## Dependencies

- [Vue.js](https://github.com/vuejs/vue)
- [Vue2Leaflet](https://github.com/vue-leaflet/Vue2Leaflet)
- [Leaflet.js](https://leafletjs.com/)
- [Leaflet-MiniMap](https://github.com/Norkart/Leaflet-MiniMap)

## Installation

```bash
npm install leaflet-minimap vue-leaflet-minimap
```

or

```bash
yarn add leaflet-minimap vue-leaflet-minimap
```

You can add the plugin by either adding it as a `<script>` tag or importing it into a SFC.

## Usage

You will need to create a Leaflet TileLayer to pass to the minimap component. The [plugin authors recommend either making a copy of an existing base layer or using a different one](https://github.com/Norkart/Leaflet-MiniMap#using-the-minimap-control). Custom options can also be passed.

**Example:**

```js
<script>
import L from 'leaflet'
import { LMap, LTileLayer } from 'vue2-leaflet'
import VueLeafletMinimap from 'vue-leaflet-minimap'

export default {
  components: { LMap, LTileLayer, VueLeafletMinimap },
  data() {
    return {
      zoom: 5,
      center: [47.41322, -1.219482],
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'Map data &copy; OpenStreetMap contributors',
      layer: new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
      options: {
        position: 'bottomleft',
        width: 200,
        height: 175,
      },
    }
  },
}
</script>

<template>
  <l-map :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <vue-leaflet-minimap
      :layer="layer"
      :options="options"
    ></vue-leaflet-minimap>
  </l-map>
</template>
```

### Styling

This plugin does not include the default Minimap CSS. To include it you will need to add it as a `link rel="stylesheet"` tag in the head, or import it in the `<style>` section of a component.

```js
<style>@import '~leaflet-minimap/dist/Control.MiniMap.min.css';</style>
```

### Props

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| `layer` | `Object` | Yes | A Leaflet TileLayer. |
| `options` | `Object` | No | Options to pass to the plugin. See [Leaflet-MiniMap](https://github.com/Norkart/Leaflet-MiniMap) for a full list. |

### Events

| Name | Description |
| --- | --- |
| `ready` | Fired when plugin has been mounted. |
| `minimize` | Fired when minimap is minimized. Only works when the `toggleDisplay` option is set to `true`. |
| `restore` | Fired when minimap is expanded. Only works when the `toggleDisplay` option is set to `true`. |
| `toggle` | Fired both when minimap is minimized or expanded. Only works when the `toggleDisplay` option is set to `true`. |

### Methods

| Name | Arguments | Description |
| --- | --- | --- |
| `changeLayer` | `TileLayer` | Swaps out the minimap layer with the one provided. |

## Development

### Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Lints and fixes files

```bash
yarn lint
```

### Author

[Patrick Cate](https://github.com/patrickcate)
