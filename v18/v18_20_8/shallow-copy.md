## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,547,786|9782390|
|{ ...object, __proto__: null }|20,395,486|10203555|
|{ ...object, newProp: true }|592,311|300990|
|structuredClone|253,231|126679|
|JSON.parse + JSON.stringify|190,039|95020|
|loop + object.keys starting with {}|1,257,484|628747|
|loop + object.keys starting with { __proto__: null }|691,502|345787|
|loop + object.keys starting with { randomProp: true }|502,891|251447|
|object.keys + reduce(FN, {})|1,270,660|635337|
|object.keys + reduce(FN, { __proto__: null })|718,876|359552|
|object.keys + reduce(FN, { newProp: true })|509,906|254954|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:10:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":9782390,"opsSec":19547786.60086542},{"name":"{ ...object, __proto__: null }","samples":10203555,"opsSec":20395486.57141198},{"name":"{ ...object, newProp: true }","samples":300990,"opsSec":592311.7684502458},{"name":"structuredClone","samples":126679,"opsSec":253231.4779566685},{"name":"JSON.parse + JSON.stringify","samples":95020,"opsSec":190039.36792906225},{"name":"loop + object.keys starting with {}","samples":628747,"opsSec":1257484.085995466},{"name":"loop + object.keys starting with { __proto__: null }","samples":345787,"opsSec":691502.8899918105},{"name":"loop + object.keys starting with { randomProp: true }","samples":251447,"opsSec":502891.35076836415},{"name":"object.keys + reduce(FN, {})","samples":635337,"opsSec":1270660.896944831},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":359552,"opsSec":718876.7357465145},{"name":"object.keys + reduce(FN, { newProp: true })","samples":254954,"opsSec":509906.0592975383}]}-->
