
        // Function to log a message to the console
        console.log("Script loaded");

        // Function to change background color
        function changeBackgroundColor() {
            document.body.style.backgroundColor = "#f2f2f2";
        }

        // Function to submit the form
        function submitForm() {
            alert("We'll get back to you soon!");

            // Using String function to concatenate and log a message
            console.log(String("Form submitted by: " + document.getElementById("firstname").value));

            // If statement to check a condition
            if (document.getElementById("registrationtype").value === "Professional") {
                console.log("Professional registration selected");
            }

            // Object creation
            var formData = {
                firstName: document.getElementById("firstname").value,
                lastName: document.getElementById("lastname").value,
                email: document.getElementById("email").value,
                dob: document.getElementById("dob").value,
                phone: document.getElementById("phone").value,
                idProof: document.getElementById("ID proof").value,
                registrationType: document.getElementById("registrationtype").value,
                venue: document.getElementById("Venue").value,
                ageGroup: document.querySelector('input[name="U17"]:checked') ? "U17" : "U19",
                comments: document.getElementById("subject").value
            };

            // Object function to log the form data
            function logFormData(data) {
                console.log("Form Data:");
                for (var key in data) {
                    console.log(key + ": " + data[key]);
                }
            }

            // Calling the object function to log the form data
            logFormData(formData);

            // Using getElementById
            var container = document.getElementById("container");
            container.innerHTML = "<p>Form submitted successfully!,We'll get back to you soon!</p>";

            // Using getElementsByClassName
            var buttons = document.getElementsByClassName("contact-form button");
            console.log("Number of buttons: " + buttons.length);

            // Using getElementsByTagName
            var legends = document.getElementsByTagName("legend");
            console.log("Number of legends: " + legends.length);

            // Using addEventListener
            var submitButton = document.querySelector(".contact-form button[type='submit']");
            submitButton.addEventListener("click", function () {
                console.log("Submit button clicked");
            });

            // Using createElement
            var newElement = document.createElement("p");
            newElement.innerHTML = "New element";
            container.appendChild(newElement);

            // Using createTextNode
            var textNode = document.createTextNode("This is a text node");
            container.appendChild(textNode);

            // Using createComment
            var comment = document.createComment("This is a comment");
            container.appendChild(comment);

            // Using .append
            container.append("Text appended ", newElement);

            // Using .remove()
            setTimeout(function () {
                newElement.remove();
            }, 3000);

            return false;
        }