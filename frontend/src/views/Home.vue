<script>
import LoginForm from '../components/Home/LoginForm.vue'
import RegisterPopup from '../components/Home/RegisterForm.vue'
import LoginBanner from '../components/Home/LoginBanner.vue'
export default {
    name: 'LoginPage',
    components: {
        LoginForm,
        RegisterPopup,
        LoginBanner,
    },
    data(){
        return {
            popup: false
        }
    }
}
</script>

<template>
    <div class="grid">
        <RegisterPopup @closePopup="popup = $event" v-if="popup == true" />
        <div class="banner">
            <svg viewBox="0 0 24 24" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1n7nint r-10m99ii r-u8s1d r-1n2wx2z r-1plcrui r-1l2rav9 r-lrvibr"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
        </div>
        <div class="log">
            <LoginForm />
            <LoginBanner @openPopup="popup = $event" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: "left-banner left-banner" "log log log log";
}
.banner {
    display: grid;
    grid-area: left-banner;
    grid-column: 1 / 4;
    place-items: center;
    overflow: hidden;
    width: 100%;
    background: url('../assets/images/banner.png') center center;
    background-repeat: no-repeat;
    background-size: auto 100%;
    height: 100vh;
    background-color: rgb(116,202,254);
    svg {
        width: 60%;
        height: 60%;
        fill: white;
    }
}
.log {
    grid-area: log;
    grid-column: 4 / 9;
    padding: 20px 20px;
    display: grid;
    justify-items: center;
}
form {
    display: flex;
    label {
        border: 1px solid blue;
        border-radius: 4px;
    }
}
</style>