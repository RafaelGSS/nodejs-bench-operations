## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,083,123|10546933|
|{ ...object, __proto__: null }|21,567,109|10790088|
|{ ...object, newProp: true }|614,935|309756|
|structuredClone|251,782|125959|
|JSON.parse + JSON.stringify|193,456|96732|
|loop + object.keys starting with {}|1,276,226|638122|
|loop + object.keys starting with { __proto__: null }|708,865|354434|
|loop + object.keys starting with { randomProp: true }|515,127|257677|
|object.keys + reduce(FN, {})|1,290,403|645369|
|object.keys + reduce(FN, { __proto__: null })|726,650|363328|
|object.keys + reduce(FN, { newProp: true })|506,352|253179|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:32:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":10546933,"opsSec":21083123.768943492},{"name":"{ ...object, __proto__: null }","samples":10790088,"opsSec":21567109.825317647},{"name":"{ ...object, newProp: true }","samples":309756,"opsSec":614935.0739111139},{"name":"structuredClone","samples":125959,"opsSec":251782.40862661196},{"name":"JSON.parse + JSON.stringify","samples":96732,"opsSec":193456.1669597998},{"name":"loop + object.keys starting with {}","samples":638122,"opsSec":1276226.574402353},{"name":"loop + object.keys starting with { __proto__: null }","samples":354434,"opsSec":708865.5487429325},{"name":"loop + object.keys starting with { randomProp: true }","samples":257677,"opsSec":515127.5602270753},{"name":"object.keys + reduce(FN, {})","samples":645369,"opsSec":1290403.8628237606},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":363328,"opsSec":726650.9148968976},{"name":"object.keys + reduce(FN, { newProp: true })","samples":253179,"opsSec":506352.72177922813}]}-->
