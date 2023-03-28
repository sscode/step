export default function splitOrWatts(str){
    if(str.includes(":") || str.includes(".") || str.includes(",")){
        return "500m"
    } else {
        return "watts"
    }
}