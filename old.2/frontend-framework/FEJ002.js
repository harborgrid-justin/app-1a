// FEJ002.js

export default {
    data() {
        return {
            userInput: '',
            validationMessage: '',
            formSubmitted: false
        };
    },
    methods: {
        /**
         * Handles user input and validates it.
         * @param {Event} event - The input event.
         */
        handleInput(event) {
            this.userInput = event.target.value;
            this.validateInput();
        },

        /**
         * Validates user input and sets a validation message if necessary.
         */
        validateInput() {
            // Example validation: input must not be empty and must be under 100 characters.
            if (this.userInput.length === 0) {
                this.validationMessage = 'Input cannot be empty.';
            } else if (this.userInput.length > 100) {
                this.validationMessage = 'Input must be under 100 characters.';
            } else {
                this.validationMessage = '';
            }
        },

        /**
         * Handles form submission.
         */
        handleSubmit() {
            if (this.validationMessage === '') {
                this.formSubmitted = true;
                // Logic for submitting the data goes here, e.g., making an API call.
            }
        },

        /**
         * Resets the form.
         */
        resetForm() {
            this.userInput = '';
            this.validationMessage = '';
            this.formSubmitted = false;
        }
    }
};
