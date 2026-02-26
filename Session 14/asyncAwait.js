async function test() {
    return "Hello World";
}
test().then(res => console.log(res));

//internal working
// return Promise.resolve("Hello Worlds");