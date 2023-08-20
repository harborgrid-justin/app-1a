// FEH001.js

<template>
    <header class="app-header">
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/rules">Rules</router-link></li>
                <li><router-link to="/workflow">Workflow</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'AppHeader', // Component name
    data() {
        return {
            // Any reactive data specific to this component
        };
    },
    computed: {
        // Any computed properties
    },
    methods: {
        // Any methods specific to this component
    },
    created() {
        // Lifecycle hook when the component is created
    }
}
</script>

<style scoped>
.app-header {
    background-color: #333;
    color: #fff;
    padding: 1rem 0;
}
.app-header nav ul {
    list-style-type: none;
    padding: 0;
}
.app-header nav ul li {
    display: inline;
    margin-right: 20px;
}
</style>

