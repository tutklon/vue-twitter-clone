<script>
import icon from '../icons/icon'
export default {
    name: 'TweetForm',
    components: {
        icon
    },
    data(){
        return {
            img: "https://pbs.twimg.com/profile_images/1351199776877010950/-NWmnV9a_400x400.jpg",
            text: ""
        }
    },
    methods: {
        watchEditor(e){
            console.log(e)
        }
    }
}
</script>


<template>
    <section>
        <div>
            <img :src="img">
        </div>
        <form>
            <div contenteditable id="editor"></div>
        </form>
        <footer>
            <div>
                <icon class="icons" name="media" width="22.5" />
                <icon class="icons" name="gif" width="22.5" />
                <icon class="icons" name="poll" width="22.5" />
                <icon class="icons" name="emoji" width="22.5" />
                <icon class="icons" name="date" width="22.5" />
            </div>
            <button>Tweet</button>
        </footer>
    </section>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/veriables.scss';

section {
    display: grid;
    grid-template-columns: 50px repeat(4 , 1fr);
    grid-template-areas: "header" "content";
    grid-gap: 10px;
    padding: 10px 15px;
    div {
        grid-area: header;
        grid-column: 1 / 2;
    }
    form {
        grid-column: 2 / 6;
        #editor {
            width: 100%;
            padding: 5px;
            font-size: 18px;
            outline: none;
            background: transparent;
            color: white;
            border: 0;
            &::before {
                content: "What's happening?";
                color: $c-text-gray;
                cursor: text;
            }
            &:focus {
                &::before {
                    content: " ";
                }
            }
        }
    }
    footer {
        grid-column: 2 / 6;
        display: flex;
        justify-content: space-between;
        div {
            display: flex;
        }
        button {
            padding: 0px 18px;
            font-size: 15px;
            font-weight: bolder;
            border-radius: 30px;
            border: none;
            cursor: pointer;
            color: white;
            background: $c-text-blue;
            transition: 250ms all;
            &:hover {
                background: rgba($c-text-blue, 0.8)
            }
        }
    }
}
img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
}
.icons {
    fill: $c-text-blue;
    padding: 10px;
    border-radius: 50%;
    transition: 250ms all;
    &:hover {
        background: $c-hover;
    }
}
</style>