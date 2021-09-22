const savelocalstorge = (color) => {
    let localStorageData;
    try {
        localStorageData = JSON.parse(localStorage.colorList)
    } catch (error) {
        localStorageData = 'erorr'
    }
    
    if (typeof localStorageData != 'object'){
        localStorage.setItem('colorList',JSON.stringify([color]))
    }else {
        localStorageData.push(color)
        localStorage.setItem('colorList',JSON.stringify(localStorageData))
    }        
}

export default savelocalstorge;