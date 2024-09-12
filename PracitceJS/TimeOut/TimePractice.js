function abc() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 3000)
    }
    console.log("Hello Bablesh")
}

abc();