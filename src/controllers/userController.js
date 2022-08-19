const userModel = require("../models/userModel")

// validation function 
const isValidValue = (value) => {
    if (typeof value === "undefined" || value === null)
        return false;
    if (typeof value === "string" && value.trim().length === 0)
        return false;
    return true;
};

const sleepAssesement =async function (req,res){
    try {
        const body =  req.body

        // destructuring request body
        const {name,sleepProblemTime, bedTime,wakingupTime,totalSleep} = body

        if (Object.keys(body).length === 0)
            return res.status(400).send({status:false,message:"Invalid Request"})

        if (!isValidValue(name))
            return res
              .status(400)
              .send({ status: false, message: "Please provide name" });

        if (!isValidValue(sleepProblemTime))
            return res
              .status(400)
              .send({ status: false, message: "Please provide time from when you struggled to sleep" });

        if (!isValidValue(bedTime))
            return res
              .status(400)
              .send({ status: false, message: "Please provide time when you go to sleep" });

        if (!isValidValue(wakingupTime))
            return res
              .status(400)
              .send({ status: false, message: "Please provide time of waking up" });

        if (!isValidValue(totalSleep))
            return res
              .status(400)
              .send({ status: false, message: "Please provide total sleep time at night" });


        const sleepData = await userModel.create(body)

        return res.status(201).send({status:true,message:"Your sleep assesement is done",data:sleepData})



        
    } catch (error) {
        return res.status(500).send({status:false,error:error.msg})
    }
}

module.exports.sleepAssesement=sleepAssesement