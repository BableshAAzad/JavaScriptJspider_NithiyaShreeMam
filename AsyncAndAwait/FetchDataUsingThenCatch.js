let putData = document.getElementById("sect");
fetch("./Data.json") // * fetch the data
    /**
     * Promise {<pending>} // * return JSON Promise
       [[Prototype]]: Promise
       [[PromiseState]]: "fulfilled"
       [[PromiseResult]]: Response
     */
    .then((msg) => { //* Return response
        // Response {type: 'basic', url: 'http://127.0.0.1:5501/AsyncAndAwait/Data.json', redirected: false, status: 200, ok: true, …}
        msg.json()
            /**
             * Promise {<pending>} // * return js Promise
               [[Prototype]] : Promise
               [[PromiseState]] : "fulfilled"
               [[PromiseResult]] : Array(5)
             */
            .then((val) => { // * return Array of Object
                val.map((ele) => { // * return Objects
                    putData.innerHTML += `<h3>${ele.ename}</h3>`;
                })
            })
    })