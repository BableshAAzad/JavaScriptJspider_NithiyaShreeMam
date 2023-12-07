// ! One Object
// ^ sname ="",
// ^ sid =123,
// ^ fee = 3923
// ^ mock_rating = 1-10
// ^ comm_rating = "1*" or "1" or 2

let Student = [
    {
        sname: "Bablesh",
        sid: 123,
        fee: 2000,
        mock_rating: 9,
        comm_rating: "1*",
    },
    {
        sname: "Kumar",
        sid: 124,
        fee: 2000,
        mock_rating: 8,
        comm_rating: "1",
    },
    {
        sname: "AAzad",
        sid: 125,
        fee: 2000,
        mock_rating: 10,
        comm_rating: "2",
    },
    {
        sname: "Durgesh",
        sid: 126,
        fee: 2000,
        mock_rating: 6,
        comm_rating: "1*",
    }, {
        sname: "Sharad",
        sid: 127,
        fee: 2000,
        mock_rating: 10,
        comm_rating: "2",
    }, {
        sname: "Raja",
        sid: 128,
        fee: 2000,
        mock_rating: 7,
        comm_rating: "2",
    }, {
        sname: "Golu",
        sid: 129,
        fee: 2000,
        mock_rating: 9,
        comm_rating: "1*",
    }, {
        sname: "Arjun",
        sid: 130,
        fee: 2000,
        mock_rating: 8,
        comm_rating: "1*",
    },
];

let OfferedPersons = [];
let i = 0;
for (let obj of Student) {
    if (obj.mock_rating >= 8 && obj.comm_rating === "1*") {
        OfferedPersons[i++] = obj;
        delete obj.mock_rating;
        delete obj.comm_rating;
        obj.fee_refund = obj.fee * 0.1;
        obj.requirement = "Offered.....!!!";
    }
}
console.log(OfferedPersons);
// console.log(Student);