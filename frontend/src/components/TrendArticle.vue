<script>
import icon from '../components/icons/icon'
export default {
    name : 'TrendArticle',
    components: {icon}
}
</script>

<template>
    <div class="trend-article">
        <div>
            <span class="child-string">Trending in Turkey</span>
            <h4 class="tt">Bugün neler oluyor?</h4>
            <span class="child-string">23.5k Tweets</span>
        </div>
        <div>
            <icon class="more-icon" name="more" width="22.5" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/veriables.scss';
.trend-article {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5px 15px;
    border-bottom: 1px solid $c-tweet-border;
    cursor: pointer;
    background: transparent;
    transition: 250ms all;
    &:hover {
        background: rgb(32, 46, 58);
    }
    .child-string {
        font-size: 13px;
        color: $c-text-gray;
    }
    .more-icon {
        fill: $c-text-blue;
        padding: 5px 7px !important;
        transition: 250ms all;
        border-radius: 50%;
        background: transparent;
        &:hover {
            background: rgba($c-text-blue, 0.1);
        }
    }
    div {
        &:first-child {
            padding: 4px 0px 5px 0px;
        }
    }
}
</style>