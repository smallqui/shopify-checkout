let properties = { hkey: "" };

let object = {
    checkout: {
        line_items: [
            {
                variant_id: 12345623131,
                quantity: 1,
                ...(properties && { properties })
            }
        ]
    }
}

console.log(JSON.stringify(object, null, 4));