const checkMillionDollarIdea = (req,res,next) => {
    const {numWeeks , weeklyRevenue } = req.body
    const totalRev  = Number(numWeeks) * Number(weeklyRevenue)

    if( totalRev < 1000000 || !weeklyRevenue || !numWeeks ) {
        res.status(400).send('Total yields less than 1 Million')
    } else if( isNaN(totalRev)){
        res.status(400).send()
    } else {
        next()
    }
    
}

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
