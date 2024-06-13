import {  CREATEEMPLOYEE,SINGLEEMPLOYEE ,UPDATEDATA, DELETEEMP  } from "../const"

export const createEmp = (data) => {

    return{
        type : CREATEEMPLOYEE,
        payload : data
    }
}

export const singleEmp = (id) => {

    return{
        type : SINGLEEMPLOYEE,
        payload : id
    }
}

export const updatedata = (data) => {

    return{
        type : UPDATEDATA,
        payload : data
    }
}

export const deleteEmp = (data) => {

    return{
        type : DELETEEMP,
        payload : data
    }
}

export const addRequest = ()=>{
    return{
        type:"ADDREQUEST"
    }
}
export const addSuccess = (data)=>{
    return{
        type:"ADDSUCCESS",
        payload: data
    }
}

export const addReject = ()=>{
    return{
        type:"ADDREJECT"
    }
}

export const  addData = (maindata)=>{
    return(dispatch=>{
        dispatch(addRequest());
        setTimeout(()=>{
            dispatch (addSuccess(maindata));
        },3000)
    })
}