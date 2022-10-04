import Categories from './stock.json'

export async function getItemsByCategory(categoryid){
    let data = Categories.filter(item => item.category === categoryid)
    return data
};

export async function getItem(itemId){
    const data = Categories.find(data => data.id === itemId);
    return data
};

export async function getAllItem(){
    const data = Categories
    return data
};