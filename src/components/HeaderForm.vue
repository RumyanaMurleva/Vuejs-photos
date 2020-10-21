<template>
    <div class="headerForm">
        <h1>TodoList: stupid header</h1>
    </div>        
</template>

<script>


export default {
    name: "HeaderForm"

}
</script>


<style scoped>

    .headerForm a{
        color: #fff;
        padding-right: 5px;
    }

    .headerForm {
        position: sticky;
        height: 300px;
        background: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
        top: 0;
        border-bottom-left-radius: 20% 80%;
        border-bottom-right-radius: 20% 80%;
}
  
</style>