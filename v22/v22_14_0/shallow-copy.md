## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,494,987|11748194|
|{ ...object, __proto__: null }|2,519,732|1260087|
|{ ...object, newProp: true }|22,762,294|11383781|
|structuredClone|284,955|142509|
|JSON.parse + JSON.stringify|293,274|146642|
|loop + object.keys starting with {}|1,652,960|828554|
|loop + object.keys starting with { __proto__: null }|856,152|428116|
|loop + object.keys starting with { randomProp: true }|641,859|321013|
|object.keys + reduce(FN, {})|1,690,815|845581|
|object.keys + reduce(FN, { __proto__: null })|843,884|422133|
|object.keys + reduce(FN, { newProp: true })|608,703|304352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:40:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":11748194,"opsSec":23494987.980656207},{"name":"{ ...object, __proto__: null }","samples":1260087,"opsSec":2519732.462241177},{"name":"{ ...object, newProp: true }","samples":11383781,"opsSec":22762294.896010242},{"name":"structuredClone","samples":142509,"opsSec":284955.4716509447},{"name":"JSON.parse + JSON.stringify","samples":146642,"opsSec":293274.91610274866},{"name":"loop + object.keys starting with {}","samples":828554,"opsSec":1652960.6061319727},{"name":"loop + object.keys starting with { __proto__: null }","samples":428116,"opsSec":856152.0405363261},{"name":"loop + object.keys starting with { randomProp: true }","samples":321013,"opsSec":641859.9020619841},{"name":"object.keys + reduce(FN, {})","samples":845581,"opsSec":1690815.6093693709},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":422133,"opsSec":843884.6502143375},{"name":"object.keys + reduce(FN, { newProp: true })","samples":304352,"opsSec":608703.348687417}]}-->
