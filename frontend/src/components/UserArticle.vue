<script>
import icon from './icons/icon'
export default {
    name: 'UserArticle',
    components: {
        icon
    },
    data(){
        return {
            url: "https://pbs.twimg.com/profile_images/1351199776877010950/-NWmnV9a_400x400.jpg",
            fullname: "tutku",
            username: "@" + "tutklon",
            tweet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At sequi praesentium necessitatibus, esse voluptatum quasi. Nostrum ducimus, eum dolor sint rerum, odit, pariatur veniam voluptatem placeat excepturi error a est!",
            verified: true
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="avatar">
            <img :src="url" />
        </div>
        <div class="content">
            <div>
                <router-link to="#">{{fullname}}</router-link>
                <icon class="verified" v-if="verified == true" name="verified" width="18" />
            </div>
            <span>{{username}}</span>
        </div>
        <div class="follow">
            <button>Follow</button>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import '../assets/scss/veriables.scss';
.container {
    width: 100%;
    display: grid;
    grid-template-columns: 50px auto 80px;
    grid-template-rows: 50px;
    grid-template-areas: "avatar" "content" "follow";
    padding: 10px 15px;
    border-bottom: 1px solid $c-tweet-border;
    cursor: pointer;
    background: transparent;
    transition: 250ms all;
    border-radius: 0 !important;
    &:hover {
        background: rgb(32, 46, 58);
    }
    .avatar {
        grid-area: avatar;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        img {
            width: 48px;
            object-fit: cover;
            border-radius: 50%;
            margin-bottom: 5px;
            transition: 300ms all;
            &:hover {
                opacity: 0.8;
            }
        }
    }
    .content {
        grid-area: content;
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        div {
            display: flex;
            a {
                margin-right: 4px;
                font-weight: bolder;
                font-size: 15px;
                color: white;
                &:hover {
                    text-decoration: underline;
                }
            }
            .verified {
                fill: $c-text-blue;
            }
        }
        span {
            font-size: 15px;
            color: $c-text-gray;
        }
    }
    .follow {
        grid-area: follow;
        grid-column: 3 / 4;
        grid-row: 1 / 2;
        display: grid;
        place-items: center;
        button {
            font-size: 15px;
            padding: 5px 10px;
            font-weight: bolder;
            border-radius: 30px;
            border: 2px solid $c-text-blue;
            background: transparent;
            transition: 250ms all;
            color: $c-text-blue;
            cursor: pointer;
            &:hover {
                background: rgba($c-text-blue, 0.1);
            }

        }
    }
}

</style>