import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
//Action 
export const fetchUserDetails = createAsyncThunk("fetchUser",async()=>{
    const url = 'https://dummyjson.com/users/'
    const response = await fetch(url)
    return response.json()
})

const viewDetails = createSlice({
    name:'viewDetails',
    initialState:{
        isLoading:false,
        firstTime:true,
        data:[],
        currentUser:null,
        isError:false
    },
    reducers:{
        setData(state,action){
            state.currentUser = action.payload
        },
        addUser(state,action){
            state.firstTime = false
            console.log("actio11",action)

            state.data?.push(action.payload)
        },
        deleteUser(state,action){
            state.data = state.data.filter((user)=>{
                if(user.id!==action.payload){
                    return true
                }
                else{
                    return false
                }
            })
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUserDetails.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchUserDetails.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload['users']
        })
        builder.addCase(fetchUserDetails.rejected,(state,action)=>{
            state.isError = true;
            console.log('Error',action.payload)
        })
    }
})
export const {setData,deleteUser,addUser} = viewDetails.actions
export default viewDetails.reducer