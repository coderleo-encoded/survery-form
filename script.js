document
    .getElementById("surveyForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();
        
        let nameField = document.getElementById("name");
        let ageField = document.getElementById("age");
        let errorText = document.getElementById("errorText");

        let name = nameField.value;
        let age = ageField.value;

        let nameRegex = /^[A-Za-z ]+$/; 

        // Clear errors first before re-validating
        nameField.classList.remove("error");
        ageField.classList.remove("error");
        errorText.classList.remove("errorText");
        errorText.classList.remove("successText");
        errorText.innerHTML = "";

        // Validate name field
        if (!name.match(nameRegex)) {
            nameField.classList.add("error");
            errorText.innerHTML = 
                "Name field should only contain English alphabets and spaces";
            errorText.classList.add("errorText");
            return;
        }

        // Validate age field
        else if (isNaN(age) || age < 1 || age > 150) {
            ageField.classList.add("error");
            errorText.innerHTML = 
                "Age should only contain valid value (1-150)";
            errorText.classList.add("errorText");
            return;
        }


        // Show success message
        errorText.innerHTML = "Submitted Successfully";
        errorText.classList.add("successText");

        // Collect form data
        const formData = new FormData(event.target);
        const formValues = {};

        formData.forEach((value, key) => {
            formValues[key] = value;
        });

        // Convert to CSV and trigger download
        const csvContent = convertToCSV(formValues);
        const blob = new Blob([csvContent], {type: "text/csv"});

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "survey_data.csv";
        link.click();

        // Reset form after 2 seconds
        setTimeout(() => {
            document.getElementById("surveyForm").reset();
            
        }, 2000);
    });

function convertToCSV(objArr) {
    const object = 
        typeof objArr !== "object" ? JSON.parse(objArr) : objArr;
    
    let result = "";

    const header = Object.keys(object).join(",") + "\n";
    result += header;

    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            result += object[key] + ",";
        }
    }

    result = result.slice(0, -1);
    result += "\n";

    return result;
}