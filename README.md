E-Commerce Frontend
Un moderno frontend para una plataforma de comercio electrónico, construido con React, diseñado para ofrecer una experiencia de usuario fluida, segura y atractiva. Integra autenticación basada en JWT, control de roles, gestión de carrito de compras, y una interfaz responsiva con estilos elegantes usando Tailwind CSS. El proyecto utiliza React Context para el manejo de estado global, rutas protegidas, y componentes reutilizables para garantizar escalabilidad y mantenibilidad.


📋 Descripción
Este proyecto frontend forma parte de una aplicación de comercio electrónico que permite a los usuarios registrarse, iniciar sesión, explorar productos, filtrarlos, y realizar compras a través de un carrito. La autenticación se gestiona con tokens JWT, que incluyen roles de usuario para controlar el acceso a funcionalidades específicas. La interfaz es intuitiva, con validación de formularios en tiempo real, paginación de productos, y un diseño responsivo optimizado para todos los dispositivos.


✨ Características Principales
Autenticación y Control de Roles

Registro e Inicio de Sesión: Formularios validados para crear cuentas e iniciar sesión, con retroalimentación visible para errores (por ejemplo, correo inválido o contraseña corta).
JWT: Generación y almacenamiento seguro de tokens JWT en el cliente (localStorage o cookies), incluyendo el rol del usuario (por ejemplo, admin o customer).
Control de Acceso: Solo usuarios autenticados pueden acceder al carrito y realizar compras. Las rutas están protegidas según el rol.

Gestión de Productos

Visualización de Productos: Lista de productos con nombre, descripción, precio, e imagen, obtenidos desde una API usando Axios.
Filtros y Búsqueda: Filtrado por nombre o categoría (por ejemplo, "Ropa", "Electrónica") con una barra de búsqueda interactiva.
Paginación: Muestra hasta 10 productos por página, con controles de navegación para explorar más elementos.

Interfaz de Usuario

Información del Usuario: Muestra el nombre del usuario autenticado en la barra de navegación.
Cerrar Sesión: Botón para cerrar sesión, eliminando el token y redirigiendo al inicio.
Navegación: Acceso rápido a la lista de productos y al carrito mediante un menú responsivo.
Diseño Atractivo: Interfaz moderna con Tailwind CSS, animaciones suaves, y un diseño responsivo que se adapta a móviles, tabletas y escritorios.



Arquitectura Técnica


Hooks Personalizados: Uso de hooks para manejar lógica repetitiva, como consumo de APIs o validación de formularios.
Routing Dinámico y Protegido: Implementado con React Router, con rutas privadas que verifican el estado de autenticación y el rol del usuario.
Componentes Reutilizables: Estructura modular con componentes como Button, Card, y Input para facilitar la escalabilidad.
Estado Global: Gestión con React Context para compartir datos como el usuario autenticado, el carrito, y preferencias entre componentes.
Consumo de API: Uso de Axios para realizar solicitudes HTTP, con manejo de errores y estados de carga.
Validación de Formularios: Retroalimentación en tiempo real usando librerías como react-hook-form o validaciones personalizadas.

🛠 Tecnologías Utilizadas

Frontend: React 18, React Router, React Context
Estilos: Tailwind CSS
Consumo de API: Axios
Validación: react-hook-form (o equivalente)
Autenticación: JSON Web Tokens (JWT)
Herramientas de Desarrollo: Vite (o Create React App), ESLint, Prettier
Otros: FontAwesome o Heroicons para íconos, npm/yarn para dependencias

📂 Estructura del Proyecto

├── public/

│   ├── index.html

│   └── favicon.ico

├── src/

│   ├── assets/
# Imágenes y otros recursos  estáticos
│   ├── components/             # Componentes reutilizables
│   │   ├── Button.jsx


│   │   ├── Card.jsx

│   │   ├── Input.jsx

│   │   └── Navbar.jsx

│   ├── contexts/               # Contextos para estado global
│   │   └── AuthContext.jsx

│   ├── hooks/                  # Hooks personalizados
│   │   ├── useAuth.js

│   │   └── useFetch.js
│   ├── pages/                  # Páginas de la aplicación

│   │   ├── Home.jsx

│   │   ├── Login.jsx

│   │   ├── Register.jsx
│   │   ├── Products.jsx
│   │   └── Cart.jsx


│   ├── routes/                 # Configuración de rutas

│   │   └── ProtectedRoute.jsx
│   ├── services/               # Lógica de consumo de API

│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .eslintrc.json
├── .prettierrc
├── package.json
└── README.md

🚀 Instalación
Sigue estos pasos para ejecutar el proyecto localmente:

Clona el repositorio:
git clone https://github.com/tu-usuario/e-commerce-frontend.git
cd e-commerce-frontend


Instala las dependencias:
npm install


Configura las variables de entorno: Crea un archivo .env en la raíz del proyecto con la URL de la API:
VITE_API_URL=http://localhost:3000/api


Inicia el servidor de desarrollo:
npm run dev


Accede a la aplicación: Abre tu navegador en http://localhost:3000.


📖 Uso

Registro: Crea una cuenta proporcionando correo y contraseña en la página de registro.
Inicio de Sesión: Inicia sesión para obtener un token JWT y acceder a las funcionalidades protegidas.
Explora Productos: Usa los filtros o la barra de búsqueda para encontrar productos. Navega entre páginas si hay más de 10 elementos.
Carrito: Agrega productos al carrito y finaliza la compra (requiere autenticación).
Cerrar Sesión: Usa el botón en la barra de navegación para cerrar sesión.

🧪 Pruebas
El proyecto incluye pruebas unitarias para componentes clave y hooks personalizados, usando Jest y React Testing Library. Para ejecutar las pruebas:
npm run test

🌟 Contribuciones
¡Las contribuciones son bienvenidas! Sigue estos pasos:

Haz un fork del repositorio.
Crea una rama para tu funcionalidad: git checkout -b feature/nueva-funcionalidad.
Realiza tus cambios y haz commit: git commit -m "Agrega nueva funcionalidad".
Envía tus cambios: git push origin feature/nueva-funcionalidad.
Abre un Pull Request en GitHub.

Por favor, asegúrate de seguir las guías de estilo definidas en .eslintrc.json y .prettierrc.
📝 Licencia
Este proyecto está bajo la licencia MIT. Siéntete libre de usarlo y modificarlo según tus necesidades.
🙌 Agradecimientos

A Tailwind CSS por facilitar el diseño responsivo.
A React por su flexibilidad y potencia.
A la comunidad open-source por sus recursos y herramientas.


