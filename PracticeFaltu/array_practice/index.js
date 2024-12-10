// const all_files = [
//     {
//         'id-1733850925570-757533': 'http://localhost:3000/files/1733850925566-dummy.pdf'
//     },
//     {
//         'id-1733850946508-475450': 'http://localhost:3000/files/1733850946506-dummy.pdf'
//     },
//     {
//         'id-1733850963434-968033': 'http://localhost:3000/files/1733850963431-dummy.pdf'
//     }
// ]

const all_files = [
    'http://localhost:3000/files/1733850925566-dummy.pdf',
    'http://localhost:3000/files/1733850946506-dummy.pdf',
    'http://localhost:3000/files/1733850963431-dummy.pdf'
]

let temp = !all_files.includes("http://localhost:3000/files/1733850963431-dummy.pdf")
console.log(temp)