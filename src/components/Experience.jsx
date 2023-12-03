import React from 'react';
import ExperienceItem from './ExperienceItem';

const data = {
    "habilidades": [
        {
            "nombre": "Certificado en Algoritmos de JavaScript y Estructuras de Datos",
            "descripcion": "https://freecodecamp.org/certification/monier87/javascript-algorithms-and-data-structures"
        },
        {
            "nombre": "JavaScript, HTML, CSS",
            "descripcion": "Amplio conocimiento y experiencia en el desarrollo de aplicaciones web utilizando JavaScript como lenguaje principal, así como dominio de HTML y CSS para crear interfaces web atractivas y funcionales."
        },
        {
            "nombre": "Diseño y Arquitectura de Sistemas Web Escalables y Mantenibles",
            "descripcion": "Capacidad para diseñar y crear arquitecturas de sistemas web que sean escalables, eficientes y fáciles de mantener a medida que crecen en tamaño y complejidad."
        },
        {
            "nombre": "Colaboración con Equipos Multidisciplinarios para el Desarrollo de Proyectos",
            "descripcion": "Experiencia trabajando en equipo con profesionales de diferentes disciplinas, como diseñadores, desarrolladores, analistas de negocio, para lograr el desarrollo exitoso de proyectos."
        },
        {
            "nombre": "Implementación de Metodologías Ágiles y Mejores Prácticas de Codificación",
            "descripcion": "Conocimiento y aplicación de metodologías ágiles, como Scrum, Kanban, para gestionar eficientemente el desarrollo de proyectos. Uso de buenas prácticas de codificación para garantizar la calidad y mantenibilidad del código."
        },
        {
            "nombre": "React, Next.js",
            "descripcion": "Experiencia en el desarrollo de aplicaciones web utilizando React, un framework JavaScript popular para la construcción de interfaces de usuario interactivas y reutilizables. Conocimiento de Next.js, un framework de React utilizado para crear aplicaciones web con renderizado del lado del servidor."
        },
        {
            "nombre": "MySQL, MongoDB",
            "descripcion": "Familiaridad con bases de datos relacionales como MySQL para el almacenamiento y manipulación de datos. Conocimiento de bases de datos NoSQL, como MongoDB, para el manejo de datos no estructurados y escalabilidad horizontal."
        },
        {
            "nombre": "Git, GitHub",
            "descripcion": "Experiencia en el uso de Git como sistema de control de versiones para gestionar el desarrollo colaborativo de proyectos. Conocimiento de GitHub como plataforma para alojar y compartir repositorios de código."
        },
        {
            "nombre": "Docker",
            "descripcion": "Conocimiento de Docker, una plataforma para desarrollar, implementar y ejecutar aplicaciones utilizando contenedores. Capacidad para crear y administrar entornos de desarrollo y despliegue de aplicaciones de forma eficiente."
        }
    ]
};


const Experience = () => {
    return (
        <div id='experience' style={{ maxWidth: '1040px', margin: '0 auto' }} className='md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Experience</h1>
            {data.habilidades.map((item, idx) => (
                <ExperienceItem key={idx} nombre={item.nombre} descripcion={item.descripcion} />
            ))}
        </div>
    );
};

export default Experience;