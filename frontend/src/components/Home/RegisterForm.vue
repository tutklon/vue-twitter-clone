<script>
import Exit from '../icons/exit.vue'
export default {
    name: 'LoginForm',
    components: {
        Exit
    },
    methods: {
        closePopup(){
            this.$emit("closePopup" , false)
        }
    }
}
</script>

<template>
    <div class="background">
        <form>
            <div>
                <div class="header-line">
                    <svg viewBox="0 0 24 24" class="r-jwli3a r-4qtqp9 r-yyyyoo r-rxcuwo r-1777fci r-m327ed r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                    <button @click.prevent="closePopup()" class="close-btn"><Exit /></button>
                </div>
                <h1>Sign Up</h1>
            </div>
            <input type="text" placeholder="Phone, e-mail or username">
            <input type="password" placeholder="Password">
            <input type="password" placeholder="Confrim Password">
            <button class="sign">Sign Up</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.header-line {
    display: flex;
    justify-content: space-between;
    height: 30px;
}
.background {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100vh;
    background: rgba(#000000, 0.9);
    display: grid;
    place-items: center;
    grid-column: 1 / 9;
}
form {
    z-index: 2;
    background: #15202b;
    border-radius: 10px;
    width: 35%;
    max-width: 40%;
    padding: 30px;
    margin-top: -5%;
    display: flex;
    flex-direction: column;
    div {
        display: block;
        margin-bottom: 30px;
    }
}
input {
    border: 1px solid rgb(61, 84, 102);
    padding: 15px;
    background: transparent;
    outline: none;
    width: 100%;
    border-radius: 4px;
    color: white;
    font-size: 15px;
    margin-bottom: 20px;
    &:focus {
        border: 1px solid  rgb(29, 161, 242);
    }
}
.sign {
    font-size: 15px;
    border: 1px solid rgb(29, 161, 242);
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 50px;
    background:rgb(29, 161, 242);
    color: white;
    cursor: pointer;
    transition: 250ms all;
}
.close-btn {
    background: none;
    border: none;
    outline: none;
}
svg {
    fill: #fff;
    width: 40px;
    height: 40px;
}
</style>