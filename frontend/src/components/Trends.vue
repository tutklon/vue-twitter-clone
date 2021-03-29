<script>
import icon from '../components/icons/icon'
import TrendArticle from './TrendArticle'
import UserArticle from './UserArticle'
export default {
    name: 'Trends',
    components: {
        icon,
        TrendArticle,
        UserArticle
    }, 
    props: {
        component_name: {type: String , required: true}
    }
}
</script>

<template>
    <section>
        <header>
            <h2 v-if="component_name == 'trends'">Trends for you</h2>
            <h2 v-else>Who to follow</h2>
            <icon v-if="component_name == 'trends'" class="settings-icon" name="settings" width="22.5" />
        </header>
        <div v-if="component_name == 'trends'">
            <TrendArticle  />
            <TrendArticle  />
            <TrendArticle  />
            <TrendArticle  />
        </div>
        <div v-else>
            <UserArticle />
            <UserArticle />
            <UserArticle />
        </div>
        <footer>
            <span>Show more</span>
        </footer>
    </section>
</template>

<style lang="scss" scoped>
@import '../assets/scss/veriables.scss';
section {
    width: 100%;
    background: $c-content;
    height: auto;
    border-radius: 16px;
    margin-bottom: 15px;
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 15px;
        height: 50px;
        border-bottom: 1px solid $c-tweet-border;
        h2 {
            font-size: 1.4em;
        }
        .settings-icon {
            margin-top: 6px;
            fill: $c-text-blue;
            transition: 250ms all;
            border-radius: 50%;
            background: transparent;
            position:relative;
            padding: 4px 7px;
            &:hover {
                background: rgba($c-text-blue, 0.1);
            }
        }
    }
    footer {
        height: 50px;
        display: flex;
        align-items: center;
        cursor: pointer;
        background: transparent;
        transition: 250ms all;
        &:hover {
            background: rgb(32, 46, 58);
        }
        span {
            padding-left: 20px;
            font-size: 16px;
            color: $c-text-blue;
        }
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
    }
}
</style>