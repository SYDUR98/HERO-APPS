const getLocalStorageData = () =>{
    const getData = localStorage.getItem('appList')
    if(getData){
        const getDataParse = JSON.parse(getData)
        return getDataParse
    }
    else{
        return []
    }
}


const setLocalStorageData = (id)=>{
    const getDataLocal = getLocalStorageData()
    if(getDataLocal.includes(id)){
        alert("This App is already Install")
    }
    else{
        getDataLocal.push(id)
        const data = JSON.stringify(getDataLocal)
        localStorage.setItem("appList",data)

}
    }


export {setLocalStorageData as setLocalData,getLocalStorageData as getStorageData}
    