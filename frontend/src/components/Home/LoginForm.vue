<script>
export default {
    name: 'LoginForm',

}
</script>

<template>
    <form>
        <input type="text" placeholder="Phone, e-mail or username">
        <div>
            <input type="text" placeholder="Password">
            <br>
            <a href="#">Forget Password?</a>
        </div>
        <button>Sign In</button>
    </form>
</template>

<style lang="scss" scoped>
form {
    display: flex;
    justify-content: flex-start;
    div {
        display: block;
        a {
            font-size: 14px;
            color: rgb(29, 161, 242);
            margin-left: 5px;
        }
    }
    height: 0px;
}
input {
    border: 1px solid rgb(61, 84, 102);
    padding: 15px;
    background: transparent;
    outline: none;
    width: 215px;
    height: 50px;
    border-radius: 4px;
    color: white;
    font-size: 15px;
    margin-bottom: 20px;
    margin-right: 20px;
    &:focus {
        border: 1px solid  rgb(29, 161, 242);
    }
    &:nth-child(1) {
        margin-bottom: 5px;
    }
}
button {
    font-size: 15px;
    border: 1px solid rgb(29, 161, 242);
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 50px;
    width: 130px;
    height: 47px;
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
.sgn-up:hover {
     background-color: rgba(#15202b , 0.5);
}
</style>