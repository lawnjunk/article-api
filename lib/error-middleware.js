'use strict'

module.exports = (err, req, res, next) => {
  console.error(err.message)
  err.message = err.message.toLowerCase()
  // if validation error respond with 400
  if(err.message.includes('validation failed'))
    return res.sendStatus(400)

  // if duplacte key respond with 409
  if(err.message.includes('duplicate key'))
    return res.sendStatus(409)

  if(err.message.includes('objectid failed'))
    return res.sendStatus(404)

  if(err.message.includes('unauthorized'))
    return res.sendStatus(401)

  res.sendStatus(500)
}
