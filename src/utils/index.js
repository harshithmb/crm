export function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export const contactsAPI = [{
    name: "Henry",
    company: "ABC",
    email: "abc@gmail.com",
    phone: "123456789",
    address: "@abc, abc -12345"
},
{
    name: "Adella",
    company: "DDD",
    email: "ddd@gmail.com",
    phone: "123456789",
    address: "@ddd, abc -12345"
},
{
    name: "Rambo",
    company: "CCC",
    email: "ccc@gmail.com",
    phone: "123456789",
    address: "@ccc, abc -12345"
},
{
    name: "Lucky",
    company: "DDD",
    email: "ddd@gmail.com",
    phone: "123456789",
    address: "@ddd, abc -12345"
},
]
  