<template>
  <div id="full_div">
    <div style="height: 10%; overflow: auto;">
      <h3>Simple map</h3>
      Marker is placed at {{ marker.lat }}, {{ marker.lng }}
    </div>

    <v-map ref="map" style="height: 90%" :zoom="zoom" :center="center">
      <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
      <v-marker :lat-lng="marker"></v-marker>
    </v-map>
    <v-search :api_key="'AIzaSyCyds_KBQshLNSnYSpptV64pOb8dItoS5c'"></v-search>

  </div>
</template>

<script>
    import Vue2Leaflet from 'vue2-leaflet';
    import Search from './components/Vue2LeafletSearch.vue';
    export default {
        components: {
            'v-map': Vue2Leaflet.Map,
            'v-tilelayer' :Vue2Leaflet.TileLayer,
            'v-marker': Vue2Leaflet.Marker,
            'v-search': Search
        },
        data () {
            return {
                zoom:13,
                center: L.latLng(47.413220, -1.219482),
                url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                marker: L.latLng(47.413220, -1.219482),
            }
        }
    }
</script>
<style>

  @import "~leaflet/dist/leaflet.css";

  #full_div {
    position: absolute;
    overflow-x: auto;
    top: 0;
    right: 0;
    left: 208px;
    bottom: 0;
    padding-left: 8px;
    border-left: 1px solid #ccc;
  }
</style>