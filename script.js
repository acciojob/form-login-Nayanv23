function getFormvalue() {
    // Get form elements by name attribute
    let firstName = document.querySelector('input[name="fname"]').value.trim();
    let lastName = document.querySelector('input[name="lname"]').value.trim();
    
    // Combine names with single space
    let fullName = firstName + " " + lastName;
    
    // Show alert with full name
    alert(fullName);
    
    // Prevent default form submission (no page reload)
    return false;
}
