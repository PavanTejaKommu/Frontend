fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {
        for (i = 0; i <= data.length; i++) {
            console.log(data[i]);
            if (data[i].id == 10) {
                console.log(data[i].id);
                { method: "DELETE" };
            }
        }
    })
    .catch((res) => console.log(res));





