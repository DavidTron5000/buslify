
exports.handler = (event, context, callback) => {
   return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: process.env.TWILIO_PHONE_NUMBER,
      })
   })  
}
