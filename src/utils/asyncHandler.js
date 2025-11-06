
//this is async await approch
// const asyncHandler=(fn)=> async(req,res,nxt)=>{
//     try {
//         await fn(req,res,nxt)
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }

// }

//this is promise approch 
const asyncHandler=(requestHandler)=>{
    (req,res,nxt)=>{
        Promise.resolve(requestHandler(req,res,nxt)).
        catch((err)=>nxt(err))
    }
}




export {asyncHandler}