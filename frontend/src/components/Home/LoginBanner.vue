<script>
export default {
    methods: {
        async openPopup(){
            await this.$emit("openPopup" , true)
        }
    }
}
</script>

<template>
    <div class="container">
        <div>
            <svg viewBox="0 0 24 24" class="r-jwli3a r-4qtqp9 r-yyyyoo r-rxcuwo r-1777fci r-m327ed r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
            <h1 class="t">See what's happening in <br> the world  right now</h1>
            <br>
            <h2 class="h">Join Twitter today.</h2>
        </div>
        <button @click.prevent="openPopup()" class="sgn-up">Sign Up</button><br>
        <button>Sign In</button>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: block;
    div {
        .t {
            font-size: 1.5rem;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-weight: 700;
            margin-bottom: 20px;
        }
        .h {
            margin-bottom: 40px;
        }
    }
}
svg {
    fill: #fff;
    width: 50px;
    height: 50px;
    margin-bottom: 45px;
}
button {
    font-size: 15px;
    font-weight: bold;
    border: 1px solid rgb(29, 161, 242);
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 50px;
    width: 390px;
    background:rgb(29, 161, 242);
    color: white;
    cursor: pointer;
    outline: none;
    transition: 250ms all;
    &:last-child {
        background: #15202b;
        color: rgb(29, 161, 242);
    }

}
</style>