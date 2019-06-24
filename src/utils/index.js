export const serchUtil = (itemsArr,searchStringArg) => {
    let searchString = searchStringArg.toLowerCase()
    console.log(searchString)
    let resArr = []
    for (let i=0; i<itemsArr.length; i++) {
        if(itemsArr[i].name.toLowerCase().includes(searchString)
        || itemsArr[i].role.toLowerCase().includes(searchString)
        || itemsArr[i].connected.toLowerCase().includes(searchString)
        ) {
            resArr.push(itemsArr[i])
        }
    }
    return resArr
}
