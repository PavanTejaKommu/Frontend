// const URL1 = "https://dummyjson.com/quotes";
// fetch(URL1)
// .then((res)=>{
//     res.json()
//     .then((res)=>{

// for(i=0;i<res.quotes.length;i++){
//     console.log("Id : "+res.quotes[i].id);
//     console.log("Author : "+res.quotes[i].author);
//     console.log("Quote : "+res.quotes[i].quote+"\n\n");
// }})
// })
// .catch((res)=>console.log(res));



// const URL2 = "https://dummyjson.com/todos";
// fetch(URL2).then((res)=>res.json())
// .then((res)=>{
//     for(i=0;i< res.todos.length;i++){
//         console.log("Id : "+res.todos[i].id);
//         console.log("todo : "+res.todos[i].todo);
//         console.log("Complete : "+res.todos[i].complete);
//         console.log("User Id : "+res.todos[i].userId);
//     }
// }).catch((res)=>console.log(res));




/*
--------------------------- URL -- 3 ----------------------------------

const URL3 = "https://jsonplaceholder.typicode.com/photos";

fetch(URL3)
.then((res)=>res.json())
.then((res)=>{
    for(i=0;i<res.length;i++){
        console.log("Album id      : => "+res[i].albumId);
        console.log("Id            : => "+res[i].id);
        console.log("Url           : => "+res[i].url);
        console.log("ThumbnailUrl  : => "+res[i].thumbnailUrl);
        console.log("Title         : => "+res[i].title);
        

       // console.log(res[i]);
    }
})
.catch((res)=>console.log(res));


*/



const URL4 = "https://pokeapi.co/api/v2/pokemon/ditto";
fetch(URL4)
    .then((res) => res.json())
    .then((res) => {


        /*
        "id": 132,
          "name": "ditto",
          "base_experience": 101,
          "height": 3,
          "is_default": true,
          "order": 214,
          "weight": 40,
        */

        console.log(res.id);
        console.log(res.name);
        console.log(res.base_experience);
        console.log(res.height);
        console.log(res.is_default);
        console.log(res.order);
        console.log(res.weight);

        for (i = 0; i < res.abilities.length; i++) {
            console.log(res.abilities[i].is_hidden);
            console.log(res.abilities[i].ability.name);
            console.log(res.abilities[i].ability.url);
            console.log(res.abilities[i].slot);
        }

        for(i=0;i< res.past_abilities.length;i++){
            
            console.log(res.past_abilities[i].generation.name);
            console.log(res.past_abilities[i].generation.url);
            console.log(res.past_abilities[i].abilities[i].slot);
            console.log(res.past_abilities[i].abilities[i].is_hidden);
            console.log(res.past_abilities[i].abilities[i].ability);

        }

        for(i=0;i< res.forms.length;i++){
            console.log(res.forms[i].name);
            console.log(res.forms[i].url);
        }

        for(i =0; i < res.game_indices.length;i++){
            console.log(res.game_indices[i].game_index);
            console.log(res.game_indices[i].version.name);
            console.log(res.game_indices[i].version.url);
        }

        for(i=0;i < res.held_items.length;i++){
            console.log(res.held_items[i].item.name);
            console.log(res.held_items[i].item.url);
        }
        for(i=0;i<res.held_items.length;i++){
            console.log(res.held_items[i].version_details[i].rarity);
            console.log(res.held_items[i].version_details[i].version.name);
            console.log(res.held_items[i].version_details[i].version.url);

        }
        console.log(res.location_area_encounters);

        for(i=0; i < res.moves.length;i++){
            console.log(res.moves[i].move.name);
            console.log(res.moves[i].move.url);
            console.log(res.moves[i].version_group_details[i].level_learned_at);
            console.log(res.moves[i].version_group_details[i].version_group.name);
            console.log(res.moves[i].version_group_details[i].version_group.url);
            console.log(res.moves[i].version_group_details[i].move_learn_method.name);
            console.log(res.moves[i].version_group_details[i].move_learn_method.url);
            console.log(res.moves[i].version_group_details[i].order);

        }

        //  console.log(res);
        // console.log(res.id);
        // console.log(res.name);
        // console.log(res.base_experience);
        // console.log(res.height);
        // console.log(res.is_default);
        
    })