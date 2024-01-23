document.addEventListener("DOMContentLoaded", function () {
    const billingForm = document.querySelector(".billing-form");
    const placeOrderBtn = document.getElementById("place-order-btn");

    function areBillingDetailsFilled() {
        const requiredFields = document.querySelectorAll(".billing-form [required]");
        let allFilled = true;

        requiredFields.forEach(function (field) {
            if (!field.value.trim()) {
                allFilled = false;
            }
        });

        return allFilled;
    }

    function handleFormSubmission(event) {
        if (!areBillingDetailsFilled()) {
            alert("Please fill out all required billing details before placing the order.");
            event.preventDefault();
        } else {
            // Save billing details to localStorage
            saveBillingDetails();
        }
    }

    function saveBillingDetails() {
        const billingDetails = {
            ORDER_NUMBER: generateOrderNumber(),
            EMAIL: document.getElementById("email").value,
            // Add other billing details as needed
        };

        localStorage.setItem("billingDetails", JSON.stringify(billingDetails));
    }

    function generateOrderNumber() {
        // Implement your logic to generate an order number
        // For simplicity, you can use a timestamp or a random number
        return Date.now().toString();
    }

    billingForm.addEventListener("submit", handleFormSubmission);

    placeOrderBtn.addEventListener("click", function () {
        if (!areBillingDetailsFilled()) {
            alert("Please fill out all required billing details before placing the order.");
        } else {
            saveBillingDetails();
            window.location.href = "Summary.html"; // Redirect to summary page after saving details
        }
    });
});
