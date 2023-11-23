let currentStep = 1;

function showStep(step) {
    document.querySelectorAll('.form-step').forEach((el) => {
        el.classList.remove('active');
    });

    document.getElementById(`step${step}`).classList.add('active');
}

function nextStep() {
    if (currentStep < 3) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function submitForm() {
    // Add your form submission logic here
    alert('Form submitted successfully!');
}
