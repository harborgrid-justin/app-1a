// FEH002.js

<template>
    <header class="sub-header">
        <div class="sub-header-title">
            {{ title }}
        </div>
        <div class="sub-header-actions">
            <!-- Potentially buttons or actions relevant to this section -->
            <button v-if="showAction" @click="performAction">{{ actionLabel }}</button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'SubHeader', 
    props: {
        title: {
            type: String,
            default: "Sub Header"
        },
        showAction: {
            type: Boolean,
            default: false
        },
        actionLabel: {
            type: String,
            default: "Action"
        }
    },
    methods: {
        performAction() {
            // Logic for the action button
            this.$emit('actionPerformed');
        }
    }
}
</script>

<style scoped>
.sub-header {
    background-color: #f5f5f5;
    color: #333;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.sub-header-title {
    font-weight: bold;
}

.sub-header-actions {
    display: flex;
    align-items: center;
}
</style>
