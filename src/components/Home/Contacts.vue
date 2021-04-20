<template>
    <div class="home-contacts_wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.8" d="M0,64L80,64C160,64,320,64,480,85.3C640,107,800,149,960,165.3C1120,181,1280,171,1360,165.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        <div class="map_wrapper">
            <GmapMap
                ref="Gmap"
                :center="{lat:46.11155496203064, lng:32.90025177180636}"
                :zoom="15"
                map-type-id="terrain"
                style="width: 100%; height: 500px"
                >
                <!-- <GmapMarker
                    :key="index"
                    :position="{lat:46.11155496203064, lng:32.90025177180636}"
                    :clickable="true"
                    :draggable="true"
                    @click="center={lat:46.11155496203064, lng:32.90025177180636}"
                /> -->
            </GmapMap>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contacts',
    data() {
        return {
        }
    },
    mounted() {
        this.$refs.Gmap.$mapPromise.then((map) => {
            map.panTo({lat:46.11155496203064, lng:32.90025177180636})
        })
    }
}
</script>

<style lang="scss" scoped>
.map_wrapper {
    padding: 0 10% 140px;
    background: rgba(0, 153, 255, 0.8);
    top: -4px;
    position: relative;
}
</style>