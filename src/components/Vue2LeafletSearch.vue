<template>
    <div></div>
</template>
<script>
    import LeafletSearch from 'leaflet-search';
    import GeoCoder from 'google-geocoder';
    export default{
        props: ['api_key'],
        data(){
            return {
                myKey: this.api_key,
            }
        },
        mounted(){
            this.GeoCoder = new
            GeoCoder({
                key: this.myKey
            });
            this.$parent.$refs.map.mapObject.addControl(new L.Control.Search({
                sourceData: this.googleGeocoding,
                formatData: this.formatJSON,
                filterData: this.filterResults,
                autoType: true,
                autoCollapse: true,
                minLength: 2
            }));
        },
        methods: {
            googleGeocoding(text, callResponse)
            {
                this.GeoCoder.find(text, function (err, res) {
                    callResponse(res);
                });
            },

            formatJSON(rawjson)
            {

                let json = {},
                    key, loc;

                rawjson.forEach(item => {
                    key = item.formatted_address;

                    loc = L.latLng(item.location.lat, item.location.lng);

                    json[key] = loc;	//key,value format
                });
                return json;
            },
            filterResults(text, records){
                return records;
            }
        }
    }
</script>
<style>
  @import "~leaflet-search/src/leaflet-search.css";
</style>