// add categories from browser and 
export const fetchCategories = async () => {
    let resp = await fetch("https://api.escuelajs.co/api/v1/categories/", {
        method: "GET"
    })
    return resp.json()
}

// MARK: Create a function to insert product
export const insertProduct = async (product) => {
    let resp = await fetch(' https://api.escuelajs.co/api/v1/products/', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(product)
    })
    return resp
}