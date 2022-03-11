
const { matchIp, assets } = require('@russia-sanctions/base')

exports.handler = async (event) => {
  const ip = event.Records[0].cf.request.clientIp
  const match = await matchIp(ip)

  if (!match.type) {
    return event.Records[0].cf.request
  } else {
    const body = await assets.getHtml()
    return {
      statusCode: 451,
      headers: {
        'content-type': { value: 'text/html; charset=UTF-8' }
      },
      body
    }
  }
}
