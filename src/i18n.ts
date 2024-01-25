// Dependencies
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navbar: {
          experience: 'Experience',
          projects: 'Projects',
          skills: 'Skills',
          about: 'About',
          contact: 'Contact',
        },
        badge: 'Open to work!',
        description: {
          experience: '+4 years of working experience.',
          role: 'Software Engineer and FullStack Developer.',
          location: 'From San Carlos, Costa Rica.',
        },
        documentation: {
          download: 'Download',
          talk: `Let's Talk`,
        },
        experience: {
          title: 'Experience',
          role1: {
            title: 'Full Stack Developer',
            date: 'May 2019 - present',
            company: 'Freelance',
            description:
              'Contributed to the development of responsive web applications for various clients across diverse industries using cutting-edge technologies such as React, Next.js, Node.js, GraphQL, and Express.js.',
            achievements: {
              achievement1:
                'Created custom reusable web components, enhancing application scalability through the utilization of cutting-edge Front End Technologies.',
              achievement2:
                'Collaborated closely with project managers to establish precise project requirements that met client objectives.',
              achievement3:
                'Provided ongoing maintenance and support for over 4 client websites, ensuring their optimal performance.',
              achievement4:
                'Conducted thorough testing and debugging, identifying and resolving errors and technical issues before and after implementation through both unit and manual testing.',
              achievement5:
                'Utilized AWS services for the deployment, scaling, and monitoring of web applications and services.',
            },
          },
          role2: {
            title: 'Junior Application Developer',
            date: 'July 2018 - December 2018',
            company: 'Fundación Omar Dengo',
            description:
              'Contribute to the development of an educational web application using technologies such as PHP and Slim framework, Ajax, JavaScript, jQuery, HTML5, CSS, Bootstrap, and SQL Server',
            achievements: {
              achievement1:
                'Worked within the Scrum development methodology, achieving a 95% completion rate for sprint tasks.',
              achievement2:
                'Collaborated closely with design teams to meet development requirements and enhance the overall user experience.',
            },
          },
          buttonText: {
            main: 'Read',
            more: 'More',
            less: 'Less',
          },
        },
        projects: {
          title: 'Projects',
          project1: {
            title: 'CPI Website',
            description:
              'Official site for CPI Spanish Immersion School located in Costa Rica. This website provides a comprehensive overview of their programs, locations, and the unique experiences they offer.',
          },
          project2: {
            title: 'Touring Regal',
            description:
              'Touring Regal is dedicated to transforming the transportation experience in Costa Rica, aligning with a distinctive mission and vision that encapsulates their commitment to excellence, safety, and sustainability.',
          },
          buttonText: 'Visit the website',
        },
        skills: {
          title: 'Skills',
          subTitle: `Technologies I've been working with recently`,
        },
        about: {
          title: 'About Me',
          text1: ` Nostrud eu non in velit commodo in deserunt ad ut proident nulla
        exercitation id. Esse commodo aliqua nulla Lorem ex nisi aute laboris
        magna. Velit ut labore labore Lorem adipisicing dolor eiusmod
        consectetur labore ipsum. Esse exercitation est elit aliquip enim ipsum
        elit.`,
          text2: `Nostrud eu non in velit commodo in deserunt ad ut proident nulla
        exercitation id. Esse commodo aliqua nulla Lorem ex nisi aute laboris
        magna. Velit ut labore labore Lorem adipisicing dolor eiusmod
        consectetur labore ipsum. Esse exercitation est elit aliquip enim ipsum
        elit.`,
          text3: 'Interested in learning',
        },
        contact: {
          title: 'Contact Me',
          subTitle: 'Get in touch!',
          text: `I'm currently available for work. Fill out the form and I'll get back to you as soon as possible.`,
          form: {
            input1: {
              title: 'Full Name',
            },
            input2: {
              title: 'Email',
            },
            input3: {
              title: 'Message',
              placeholder: 'Type your message',
            },
            buttonText: `Let's Talk`,
          },
        },
        footer: {
          text1: 'All Rights Reserved',
          text2: 'Inspired by',
          text3: 'design',
          text4: 'Made with',
        },
      },
    },
    es: {
      translation: {
        navbar: {
          experience: 'Experiencia',
          projects: 'Proyectos',
          skills: 'Habilidades',
          about: 'Sobre Mí',
          contact: 'Contacto',
        },
        badge: '¡Disponible para trabajar!',
        description: {
          experience: '+4 años de experiencia laboral.',
          role: 'Ingenieron en Sistemas y desarrollador FullStack',
          location: 'De San Carlos, Costa Rica',
        },
        documentation: {
          download: 'Descargar',
          talk: 'Hablemos',
        },
        experience: {
          title: 'Experiencia',
          role1: {
            title: 'Desarrollador Full Stack',
            date: 'Mayo 2019 - actualidad',
            company: 'Trabajo independiente',
            description:
              'Contribuí al desarrollo de aplicaciones web receptivas para diversos clientes en diversas industrias utilizando tecnologías de vanguardia como React, Next.js, Node.js, GraphQL y Express.js.',
            achievements: {
              achievement1:
                'Creé componentes web reutilizables personalizados, mejorando la escalabilidad de la aplicación mediante el uso de tecnologías de vanguardia en el Front End.',
              achievement2:
                'Colaboré estrechamente con los gerentes de proyectos para establecer requisitos precisos del proyecto que cumplieran con los objetivos del cliente.',
              achievement3:
                'Brindé mantenimiento continuo y soporte para más de 4 sitios web de clientes, asegurando su rendimiento óptimo.',
              achievement4:
                'Realicé pruebas exhaustivas y depuración, identificando y resolviendo errores y problemas técnicos antes y después de la implementación mediante pruebas unitarias y manuales.',
              achievement5:
                'Utilicé servicios de AWS para la implementación, escalado y monitoreo de aplicaciones y servicios web.',
            },
          },
          role2: {
            title: 'Desarrollador de Aplicaciones Junior',
            date: 'Julio 2018 - Diciembre 2018',
            company: 'Fundación Omar Dengo',
            description:
              'Contribuí al desarrollo de una aplicación web educativa utilizando tecnologías como PHP y el framework Slim, Ajax, JavaScript, jQuery, HTML5, CSS, Bootstrap y SQL Server',
            achievements: {
              achievement1:
                'Trabajé dentro de la metodología de desarrollo Scrum, logrando una tasa de finalización del 95% para las tareas de sprint.',
              achievement2:
                'Colaboré estrechamente con los equipos de diseño para cumplir con los requisitos de desarrollo y mejorar la experiencia general del usuario.',
            },
          },
          buttonText: {
            main: 'Leer',
            more: 'Más',
            less: 'Menos',
          },
        },
        projects: {
          title: 'Proyectos',
          project1: {
            title: 'Sitio web de CPI',
            description:
              'Sitio oficial de CPI Spanish Immersion School ubicada en Costa Rica. Este sitio web proporciona una visión integral de sus programas, ubicaciones y las experiencias únicas que ofrecen.',
          },
          project2: {
            title: 'Touring Regal',
            description:
              'Touring Regal se dedica a transformar la experiencia de transporte en Costa Rica, alineándose con una misión y visión distintivas que encapsulan su compromiso con la excelencia, la seguridad y la sostenibilidad.',
          },
          buttonText: 'Ir al sitio web',
        },
        skills: {
          title: 'Habilidades',
          subTitle: 'Tecnologías con las que he trabajado recientemente',
        },
        about: {
          title: 'Acerca de mí',
          text1: `Nostrud eu non in velit commodo in deserunt ad ut proident nulla
        exercitation id. Esse commodo aliqua nulla Lorem ex nisi aute laboris
        magna. Velit ut labore labore Lorem adipisicing dolor eiusmod
        consectetur labore ipsum. Esse exercitation est elit aliquip enim ipsum
        elit.`,
          text2: `Nostrud eu non in velit commodo in deserunt ad ut proident nulla
        exercitation id. Esse commodo aliqua nulla Lorem ex nisi aute laboris
        magna. Velit ut labore labore Lorem adipisicing dolor eiusmod
        consectetur labore ipsum. Esse exercitation est elit aliquip enim ipsum
        elit.`,
          text3: 'Interesado en aprender',
        },
        contact: {
          title: 'Contáctame',
          subTitle: '¡Ponte en contacto!',
          text: 'Actualmente estoy disponible para trabajar. Completa el formulario y me pondré en contacto contigo lo antes posible.',
          form: {
            input1: {
              title: 'Nombre completo',
            },
            input2: {
              title: 'Correo',
            },
            input3: {
              title: 'Mensaje',
              placeholder: 'Escribe tu mensaje',
            },
            buttonText: `Conversemos`,
          },
        },
        footer: {
          text1: 'Todos los derechos reservados',
          text2: 'Inspirado por',
          text3: 'diseño',
          text4: 'Hecho con',
        },
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
