const { Description } = require("@mui/icons-material");
const mongoose = require("mongoose");

const schema = mongoose.Schema(
    
        {
            description:{
                type : String,
                required : true,
                trim : true,
            },
            completed :{
                type : Boolean,
                default : false,
            },
        },{
            timestamps : true,
        }
    
)

module.exports = mongoose.model("Todo", schema);