<script>
import icon from './icons/icon'
export default {
    name: 'Tweet',
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
    props: {
        tweets: {type: Object /*, required: true */}
    }
}
</script>

<template>
    <main>
        <header>
            <img :src="url" alt="">
        </header>
        <section>
            <div class="header">
                <router-link to="/" class="user-link">{{ fullname }}</router-link>
                <icon class="verified" name="verified" width="20" height="20" />
                <p>{{ username }}</p>
                <span>·</span>
                <p>4h</p>
            </div>
            <div class="content">
                <p>{{ tweet }}</p>
            </div>
        </section>
        <footer>
            <button>
                <icon class="footer-icons" name="reply" width="19" />
            </button>
            <button>
                <icon class="footer-icons retweet" name="retweet" width="19" />
            </button>
            <button>
                <icon class="footer-icons like" name="like" width="19" />
            </button>
            <button>
                <icon class="footer-icons" name="share" width="19" />
            </button>
        </footer>
    </main>
</template>


<style lang="scss" scoped>
@import '../assets/scss/veriables.scss';
main {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 50px repeat(4 , 1fr);
    grid-template-areas: "header" "section";
    grid-gap: 12px;
    padding: 10px 15px;
    border-bottom: 1px solid $c-tweet-border;
    cursor: pointer;
    background: transparent;
    transition: 250ms all;
    &:hover {
        background: rgb(28, 39, 50);
    }
    header {
        grid-column: 1 / 2;
        grid-area: header;
        img {
            width: 48px;
            object-fit: cover;
            border-radius: 50%;
            transition: 300ms all;
            &:hover {
                opacity: 0.8;
            }
        }
    }
    section {
        grid-column: 2 / 6;
        //grid-area: section;
        .header {
            display: flex;
            .user-link {
                font-weight: bolder;
                margin-right: 3px;
                color: white;
                &:hover {
                    text-decoration: underline;
                }
            }
            span {
                padding: 0 5px;
                color: $c-text-gray;
            }
            p {
                color: $c-text-gray;
                &:first-of-type {
                    margin-left: 5px;
                }
            }
        }
    }
    footer {
        grid-column: 1 / 7;
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin: -4px 0px -5px 0px;
        button {
            border: none;
            background: transparent;
            cursor: pointer;
            .footer-icons {
                border-radius: 50%;
                transition: 250ms all;
                background: transparent;
                padding: 6px 8px;
                fill: $c-text-gray;
                &:hover {
                    background: $c-hover;
                    fill: $c-text-blue;
                }
            }
            .retweet {
                &:hover {
                    background: rgba(23, 191, 99, 0.1);;
                    fill: rgb(23, 191, 99);
                }
            }
            .like {
                &:hover {
                    fill: rgb(224, 36, 94);
                    background: rgba(224, 36, 94 , 0.1);
                }
            }
        }
    }
}
.verified {
    fill: $c-text-blue;
}
</style>