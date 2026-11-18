// const URL = 'https://fakestoreapi.com/products';
// async function dataMethod(){
//     let data = await fetch(URL);
//     let res = await data.json();

//     res.forEach(ele => {
//         console.log(ele);
//     });
// }

// dataMethod();


//***************************************************************************************8 */

// const url = "https://dummyjson.com/quotes";

// async function dataSome(){
//     let data = await fetch("https://dummyjson.com/quotes");
//     let res = await data.json();

//     res.quotes.forEach(ele=>{
//         console.log(ele);
//     })
// }

// dataSome();



//***************************************************************************************8 */
// const url = "https://dummyjson.com/todos";
// async function dataSome(){
//     let data = await fetch(url);
//     let res = await data.json();

//     res.todos.forEach((ele)=>{
//         console.log(ele);
//     })
// }


//***************************************************************************************8 */

// const url = "https://jsonplaceholder.typicode.com/photos";

// async function dataSome(){
//     let data = await fetch(url);
//     let res = await data.json();
//     res.forEach(ele=>{
//         console.log(ele);
//     })
// }

//***************************************************************************************8 */

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

async function dataSome(){
    let data = await fetch(url);
    let res = await data.json();
    res.game_indices.forEach(ele=>{
        console.log(ele.version);
    })
}

dataSome();