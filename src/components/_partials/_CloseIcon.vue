<script>
export default {
    name: 'CloseIcon'
}
</script>
<template>
    <div class="container">
        <div></div>
        <div></div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-top: 15px;
    div {
        width: 100%;
        height: 3px;
        background-color: white;
        position: relative;
        transition: 250ms all;
        &:first-child {
            transform: rotate(45deg);
            top: 3px;
        }
        &:last-of-type {
            transform: rotate(-45deg);
        }
    }
}
</style>