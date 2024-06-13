import {  CREATEEMPLOYEE,SINGLEEMPLOYEE,DELETEEMP,UPDATEDATA } from "../const"

let getData = JSON.parse(localStorage.getItem('employees'));

let data = [];

if (getData != null) {
    data = getData;
}

const initialState = {
    employees: data,
    employee: null,
    isLoading:false,
    err : null
}

export const empReducer = (state = initialState, action) => {

    switch (action.type) {

        case CREATEEMPLOYEE:
            localStorage.setItem("employees", JSON.stringify([...state.employees, action.payload]));
            return {
                ...state,
                employees: [...state.employees, action.payload]
            }

        case SINGLEEMPLOYEE:

            const single = state.employees.filter((d) => {

                return d.id == action.payload;
            })

            return {
                ...state,
                employee: single[0]
            }

        case DELETEEMP:
            const deleteData = state.employees.filter((d) => {
                return d.id != action.payload;
            })

            localStorage.setItem("employees", JSON.stringify(deleteData));
            console.log("delete", deleteData);
            return {
                ...state,
                employees: deleteData
            }

        case UPDATEDATA:

            const newData = state.employees.map((data) => {
                if (data.id == action.payload.id) {
                    return data = action.payload;
                } else {
                    return data;
                }
            })

            localStorage.setItem("employees", JSON.stringify(newData));

            return {
                ...state,
                employees: newData
            }
        case "ADDREQUEST":
            return{
                ...state,
                isLoading:true,
                err:null
            }
        case "ADDSUCCESS":
                return{
                    isLoading:false,
                    employees:action.payload,
                    err:null
                }
         case "ADDREJECT":
                    return{
                        err:{msg:"server err",status:404},
                        isLoading:false,
                        ...state
                    }        


        default:
            return state;


    }

}

