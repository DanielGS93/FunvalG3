 async function fetchUsers() {
      const container = document.getElementById("users-container");
      const errorDiv = document.getElementById("error-message");

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }

        const users = await response.json();

        // Vaciar contenedor (por si ya hay contenido)
        container.innerHTML = "";

        users.forEach(user => {
          const col = document.createElement("div");
          col.className = "col-12 col-md-6 col-lg-4";

          col.innerHTML = `
            <div class="card h-100 shadow">
              <div class="card-body">
                <h5 class="card-title">Nombre: ${user.name}</h5>
                <p class="card-text"><strong>Usuario:</strong> ${user.username}</p>
                <p class="card-text"><strong>Email:</strong> ${user.email}</p>
                <p class="card-text"><strong>Empresa:</strong> ${user.company.name}</p>
              </div>
            </div>
          `;

          container.appendChild(col);
        });

      } catch (error) {
        console.error(error);
        errorDiv.textContent = "Error al cargar los usuarios. Inténtalo de nuevo más tarde.";
      }
    }

    // Ejecutar al cargar la página
    fetchUsers();
