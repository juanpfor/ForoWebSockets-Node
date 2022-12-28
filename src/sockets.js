module.exports =  function (io) {
    io.on('connection' , socket =>{


        const id_user_socket = socket.id
        const { nameQuestion } = socket.handshake.query
        const { id_Question } = socket.handshake.query

        socket.join(nameQuestion)

        console.log(`New user ${id_user_socket} joined ${nameQuestion}`);

        socket.on('send email', data =>{
            console.log(data);
            io.sockets.emit('forward message' ,{
                message : data ,
                username : 'juan',
                img : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIYAWQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwMEBQYIAgH/xAA3EAABAwMCBQICCAUFAAAAAAABAAIDBAURBiEHEhMxQVFhInEUFjKBkbHB8BUjQpOhCFJVYnL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APVHawGt+HwsrBbRt8Ky9NR4A28K9jpgPCqMTFbxt8KufoTWNJcMAeSsXrHUsen2Nhi5TOYzLIe5jYCGjDfLnOcAPHc+MKPNTcQLnc9OyNHQpmVjjE2KMnqCMYLnF3ofs49ygkH6xabjnML7xRB7SQ4dUHGO+/ZadeuKVJDzR2i3vkc1+OpU/C1zfUAb7++P0UUF2c+68qKkyj4qvfXA19sY2jIwei7mkafXcgH/AAr6h4oW2arcytoJqan/AKJWkPPzcNsbY7ZUSog6WpDT11KyqpJGTQSDLJGHIIVKoowR2UFae1VdrA5raCpIg5+d0LgC13r37KbNIX+PUtliqn9KOq3EsLHeQcZA7gFVGNr6AEHZYj+Gj0W71dNkdljfovsg3eKnwBsqwiA8K9fCGjZUuXdBAfGRrRdmSc7BVYdHPG0EnkDiWOzjHYtHz+eVGZJ8qcdTaNut+u894ttwh64/lT29zDlrRtghzsOyAO+A7Yj1UQ3eyXO2jq3G3T0jHyOY3qRlo5hgkDPzH7CisWiIgIiIC2rhvWw0mpqUVDxG2R4HUc8NDe/fbfPYfNaqtn4c2mC86rpaWpeWsaHSjBwS5oyAgn2oaHNy3cHsrHphZeePDdlY9NVG4OfnuvBIReSgtLhcKW3Rtlqn8vUcI42tYXvkd4a1oBLj3OAPUqCONF/nvF7pqZsU0NDSsPSEm3UcT8TsA+MY+4qVtS2mWu1Xaqmnr5qCanoap7KhrGva1wdCMOa4YIIc7Pbt32UA6zvDrpeah0dWaiAPJ5wOVj3ZJLmN7hpJOAcndFa+iIoCIiAtz4RxSy65oXRD4Y2SOk9m8hH5kLTFK/Ae1PfWXG7PjPSZGKeN57FxIc4fcA38UEuStyFadP2WQkGyt8Koz+F5IXteSgtK6hp66MR1LC4DOC15a4ZGDuCD2JXNvE3SlHpO9spKGpkljlj6oZLjmjaTtuO/n8F03hQj/qDtgjuVtujI3fzoTDI/xlpy378OP4IqIURFAREQXNtoam519PRUUZkqKiQRxtHkn9F1LpuxwaesNJbKfBELPjf/AL3ndzvvK5+4camotLXsVlZbhVPk5YmzdTlNOwnD3AYOTj3G2R5XSshxsgoyDZW+FWe7ZUMqo2AsK8luFWXl5CCitJ4wW91foirMNG6qqIXNexrG8zmjIDnY9gt3Kw+qdTWzStsdXXSYN79KEH45nejR+Z8IOS+hNyOf0pORoyXcpwN8fmqa23UGsqm+01xFe/mnrJmSgxghrGtG0e+5Az+85WpKKIiIK1GIXVkDal/ThMjRI/GeVudzjzsutLfcKO8UENwts7Z6Wcc0cjfO+Nx4OdsLkVSDw54j/VOhqLfW0klXSPf1IhG/Do3HYjfbBxn5/NBPb2KhyKz05qe06noxUWmpD3AZkgfgSxf+m/qNvdZPlVRmXLyW5XshRbr3izarU+vstDSzV1SGuglkbKI42EjBw4ZJI9gN/KDe7veqK2QOLpo5JyD04GvHM4/oFy9ra9Vl91HWVddJzOa8xMHhrWkgALDCeRkjnxPfGXE/ZcfzVMnPdRXxERAREQEREFWnqJ6Wdk9LNJDMw5ZJG4tc0+xCzn151V/z9f8A3iteRB1Jxb1DJp3RtTJSyGOrqiKeF7Tgsz9pw9MDO/qQuXCSTknJKlvjxffpd0/hMbgW0bYubf8AreHOd/gRqI0BERAREQEREBERAREQZnWFe+56putY93N1aqTlP/UHDR+ACwy+kk918QEREBERAREQEREBERAREQEREBERAREQEREBERB//9k='
            })
        })
      })
}