export const handleData = () => {
    let localData = localStorage.getItem("user");
    console.log(localData);
    if(localData) {
        return true;
    }else{
         return false;
    }
}