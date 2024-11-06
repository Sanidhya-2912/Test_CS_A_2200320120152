
        const validUsername = "admin";
        const validPassword = "admin";
    
        function validateLogin() {
          const username = document.getElementById("username").value;
          const password = document.getElementById("password").value;
          const message = document.getElementById("message");
    
          if (username === validUsername && password === validPassword) {
            message.textContent = "Login successful! ";
            setTimeout(() => {
              window.location.href = "currencyconverter.html";
            }, 1500);
          } else {
            message.textContent = "Login failed.";
          }
        }
        function resetForm() {
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            document.getElementById("message").textContent = "";
        }
      