let patientSymptoms = '';
let prescription = '';

function showForm(type) {
    document.querySelectorAll('.form-container, .payment-container, .success-container, .symptoms-container, .prescription-container, .patient-prescription-container').forEach(el => el.style.display = 'none');
    document.getElementById(`${type}-form`).style.display = 'block';
}

function saveSymptoms() {
    patientSymptoms = document.getElementById('patient-symptoms').value;
}

function showPayment() {
    document.getElementById('patient-form').style.display = 'none';
    document.getElementById('payment-container').style.display = 'block';
}

function showSuccessPage() {
    document.getElementById('payment-container').style.display = 'none';
    document.getElementById('success-container').style.display = 'block';
}

function showSymptoms() {
    document.getElementById('doctor-form').style.display = 'none';
    document.getElementById('symptoms-container').style.display = 'block';
    document.getElementById('symptoms-data').textContent = patientSymptoms || 'No symptoms available';
}

function showPrescriptionForm() {
    document.getElementById('symptoms-container').style.display = 'none';
    document.getElementById('prescription-container').style.display = 'block';
}

function savePrescription() {
    prescription = document.getElementById('prescription').value;
    alert('Prescription saved successfully!');
}

function showPatientPrescription() {
    document.getElementById('success-container').style.display = 'none';
    document.getElementById('patient-prescription-container').style.display = 'block';
    document.getElementById('patient-prescription').textContent = prescription || 'No prescription available';
}
