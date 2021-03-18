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
    user : {
        fullName: "Henry Kennedy",
        email: "abc@gmail.com",
        phone: "123456789",
        address: "@abc, abc -12345"
    },
    company: "ABC",
    color: getRandomColor()
},
{
    name: "Coil",
    user : {
        fullName: "Coil Benjamin",
        email: "abc@gmail.com",
        phone: "123456789",
        address: "@abc, abc -12345",
        description: "Product Manager at abc"
    },
    company: "ABC",
    color: getRandomColor()
},
{
    name: "Ribhu",
    user : {
        fullName: "Ribhu Brah",
        email: "abc@gmail.com",
        phone: "123456789",
        address: "@abc, abc -12345",
        description: "Product Manager at abc"
    },
    company: "ABC",
    color: getRandomColor()
},
{
    name: "Rocky",
    user : {
        fullName: "Rocky Bill",
        email: "abc@gmail.com",
        phone: "123456789",
        address: "@abc, abc -12345",
        description: "Product Manager at abc",
    },
    company: "ABC",
    color: getRandomColor()
},
]