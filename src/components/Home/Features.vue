<template>
    <div id="features" style="position: relative; z-index: 3;" class="features_wrapper">
        <div class="features-block">
            <div class="left-side">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas corporis at eius ipsam expedita provident perferendis, cum, fugit eveniet dolorum modi commodi autem eaque dolores optio quidem cupiditate sapiente quaerat?
            </div>
            <div class="right-side">
                <div class="image_">

                </div>
            </div>
        </div>
        <div class="features-block">
            
            <div class="right-side">
                <div class="image_">

                </div>
            </div>
            <div class="left-side">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus libero ipsa aspernatur nostrum doloribus molestiae accusantium dolor ipsam nisi! Distinctio impedit expedita nam iusto fuga velit commodi tenetur vero est!
            </div>
        </div>
        <div class="features-block">
            <div class="left-side">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas corporis at eius ipsam expedita provident perferendis, cum, fugit eveniet dolorum modi commodi autem eaque dolores optio quidem cupiditate sapiente quaerat?    
            </div>
            <div class="right-side">
                <div class="image_">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Features',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>

    .i {
        height: 100vh;
    }
    .features-block {
        display: flex;
        align-items: center;
        .left-side,
        .right-side {
            flex: 0 0 50%;
        }
        .left-side {
            padding: 40px;
            box-sizing: border-box;
        }
        .right-side {

        }
    }
    .image_ {
        height: 400px;
    }
</style>