<script>
import L from 'leaflet'
import { LMap, LTileLayer } from 'vue2-leaflet'
import VueLeafletMinimap from './vue-leaflet-minimap.vue'

const mapUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const mapAttribution = 'Map data &copy; OpenStreetMap contributors'

export default {
  name: 'Example',
  components: { LMap, LTileLayer, VueLeafletMinimap },
  data() {
    return {
      zoom: 5,
      url: mapUrl,
      attribution: mapAttribution,
    }
  },
  created() {
    this.layer = new L.TileLayer(mapUrl)
  },
}
</script>

<template>
  <div id="example" style="height: 700px; width: 100%">
    <l-map :zoom="zoom" :center="[47.41322, -1.219482]">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <vue-leaflet-minimap :layer="layer" :options="{}"></vue-leaflet-minimap>
    </l-map>
  </div>
</template>

<style>
@import '~leaflet/dist/leaflet.css';

html,
body {
  margin: 0;
  padding: 0;
}
</style>
