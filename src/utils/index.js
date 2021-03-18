export function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export const contactsAPI = [{
    fullName: "Henry Kennedy",
    email: "abc@gmail.com",
    phone: "123456789",
    address: "@abc, abc -12345",
    company: "ABC",
    color: getRandomColor()
},
{
    fullName: "Coil Koir",
    email: "abc@gmail.com",
    phone: "123456789",
    address: "@abc, abc -12345",
    company: "QQQ",
    color: getRandomColor()
},
{
    fullName: "Ribhu Koir",
    email: "qqq@gmail.com",
    phone: "123456789",
    address: "@abc, abc -12345",
    company: "WWW",
    color: getRandomColor()
},
{
    fullName: "Rocky Star",
    email: "qqq@gmail.com",
    phone: "123456789",
    address: "@abc, abc -12345",
    company: "QQQ",
    color: getRandomColor()
},
]