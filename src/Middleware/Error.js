const errorhandler = async (err, req, res, next) => {
console.log(err.message)
res.status(500).json({errorMessage:err.message})
}

module.exports = errorhandler