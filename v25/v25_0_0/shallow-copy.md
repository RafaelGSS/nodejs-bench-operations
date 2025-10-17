## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,321,001|11660940|
|{ ...object, __proto__: null }|2,386,520|1193269|
|{ ...object, newProp: true }|21,980,471|10992861|
|structuredClone|307,394|153698|
|JSON.parse + JSON.stringify|341,501|170751|
|loop + object.keys starting with {}|1,761,130|880778|
|loop + object.keys starting with { __proto__: null }|951,654|475904|
|loop + object.keys starting with { randomProp: true }|711,329|355722|
|object.keys + reduce(FN, {})|1,811,163|905742|
|object.keys + reduce(FN, { __proto__: null })|1,000,219|500233|
|object.keys + reduce(FN, { newProp: true })|706,272|353163|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:57:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":11660940,"opsSec":23321001.54451382},{"name":"{ ...object, __proto__: null }","samples":1193269,"opsSec":2386520.988878391},{"name":"{ ...object, newProp: true }","samples":10992861,"opsSec":21980471.568717323},{"name":"structuredClone","samples":153698,"opsSec":307394.0425147373},{"name":"JSON.parse + JSON.stringify","samples":170751,"opsSec":341501.0499440791},{"name":"loop + object.keys starting with {}","samples":880778,"opsSec":1761130.651724995},{"name":"loop + object.keys starting with { __proto__: null }","samples":475904,"opsSec":951654.3097322868},{"name":"loop + object.keys starting with { randomProp: true }","samples":355722,"opsSec":711329.20000307},{"name":"object.keys + reduce(FN, {})","samples":905742,"opsSec":1811163.0800138523},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":500233,"opsSec":1000219.2739112657},{"name":"object.keys + reduce(FN, { newProp: true })","samples":353163,"opsSec":706272.8826290433}]}-->
