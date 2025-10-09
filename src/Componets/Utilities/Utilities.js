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


const setLocalStorageData = (data) => {
  if (Array.isArray(data)) {
    localStorage.setItem("appList", JSON.stringify(data));
  } else {
    const getDataLocal = getLocalStorageData();
    if (getDataLocal.includes(data)) {
      alert("This App is already Installed");
    } else {
      const updatedData = [...getDataLocal, data];
      localStorage.setItem("appList", JSON.stringify(updatedData));
    }
  }
};

   


export {setLocalStorageData as setLocalData,getLocalStorageData as getStorageData}
    