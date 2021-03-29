<script>
export default {
    name: 'SearchBar'    
}
</script>

<template>
    <form>
        <input class="search" type="text" placeholder="Search Twitter">
    </form>
</template>

<style lang="scss" scoped>
@import '../assets/scss/veriables.scss';
form {
    .search {
        padding: 13px 13px;
        border-radius: 30px;
        width: 100%;
        outline: none;
        background: $c-search-content;
        border: 1px solid transparent;
        margin: 2px auto;
        color: white;
        font-size: 15px;
        transition: 150ms all;
        margin-bottom: 16px;
        &::placeholder {
            color: $c-text-gray;
        }
        &::before {
            content: ""
        }
        &:focus {
            border: 1px solid $c-text-blue;
            background: $c-background;
        }
    }
}
</style>