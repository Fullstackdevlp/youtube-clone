export const API_KEY = 'AIzaSyBRAX2Rlp7LuKJCEMTwLsyFgL_1EyG6_Gk';


export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return  Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}