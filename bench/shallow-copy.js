const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Shallow Copy')

const headers = {
  Accept: '*/*',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'en-US,en;q=0.9',
  'cache-control': 'no-cache',
  'CloudFront-Forwarded-Proto': 'https',
  'CloudFront-Is-Desktop-Viewer': 'true',
  'CloudFront-Is-Mobile-Viewer': 'false',
  'CloudFront-Is-SmartTV-Viewer': 'false',
  'CloudFront-Is-Tablet-Viewer': 'false',
  'CloudFront-Viewer-Country': 'US',
  'content-type': '',
  Host: 'xxxxxx.execute-api.us-east-1.amazonaws.com',
  origin: 'https://xxxxxx.execute-api.us-east-1.amazonaws.com',
  pragma: 'no-cache',
  Referer: 'https://xxxxxx.execute-api.us-east-1.amazonaws.com/prod/',
  'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
  Via: '2.0 00f0a41f749793b9dd653153037c957e.cloudfront.net (CloudFront)',
  'X-Amz-Cf-Id': '2D5N65SYHJdnJfEmAV_hC0Mw3QvkbUXDumJKAL786IGHRdq_MggPtA==',
  'X-Amzn-Trace-Id': 'Root=1-5cdf30d0-31a428004abe13807f9445b0',
  'X-Forwarded-For': '11.111.111.111, 11.111.111.111',
  'X-Forwarded-Port': '443',
  'X-Forwarded-Proto': 'https',
}

suite
  .add('{ ...object }', () => {
    const result = { ...headers }
  })
  .add('{ ...object, __proto__: null }', () => {
    const result = { ...headers, __proto__: null }
  })
  .add('{ ...object, newProp: true }', () => {
    const result = { ...headers, newProp: true }
  })
  .add('structuredClone', () => {
    const result = structuredClone(headers)
  })
  .add('JSON.parse + JSON.stringify', () => {
    const result = JSON.parse(JSON.stringify(headers))
  })
  .add('loop + object.keys starting with {}', () => {
    const result = {}
    const keys = Object.keys(headers)

    for (let i = 0; i < keys.length; i++) {
      const headerKey = keys[i]
      result[headerKey] = headers[headerKey]
    }
  })
  .add('loop + object.keys starting with { __proto__: null }', () => {
    const result = { __proto__: null }
    const keys = Object.keys(headers)

    for (let i = 0; i < keys.length; i++) {
      const headerKey = keys[i]
      result[headerKey] = headers[headerKey]
    }
  })
  .add('loop + object.keys starting with { randomProp: true }', () => {
    const result = { randomProp: true }
    const keys = Object.keys(headers)

    for (let i = 0; i < keys.length; i++) {
      const headerKey = keys[i]
      result[headerKey] = headers[headerKey]
    }
  })
  .add('object.keys + reduce(FN, {})', () => {
    const result = Object.keys(headers).reduce((acc, key) => {
      acc[key] = headers[key]

      return acc
    }, {})
  })
  .add('object.keys + reduce(FN, { __proto__: null })', () => {
    const result = Object.keys(headers).reduce(
      (acc, key) => {
        acc[key] = headers[key]

        return acc
      },
      { __proto__: null },
    )
  })
  .add('object.keys + reduce(FN, { newProp: true })', () => {
    const result = Object.keys(headers).reduce(
      (acc, key) => {
        acc[key] = headers[key]

        return acc
      },
      { newProp: true },
    )
  })
  .run({ async: false })
