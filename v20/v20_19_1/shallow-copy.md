## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,584,590|10292427|
|{ ...object, __proto__: null }|20,648,301|10327161|
|{ ...object, newProp: true }|801,231|400618|
|structuredClone|283,944|141978|
|JSON.parse + JSON.stringify|191,082|95543|
|loop + object.keys starting with {}|1,501,471|750839|
|loop + object.keys starting with { __proto__: null }|739,455|369905|
|loop + object.keys starting with { randomProp: true }|518,453|259297|
|object.keys + reduce(FN, {})|1,515,383|757696|
|object.keys + reduce(FN, { __proto__: null })|754,239|377258|
|object.keys + reduce(FN, { newProp: true })|501,494|250748|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:42:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":10292427,"opsSec":20584590.311398108},{"name":"{ ...object, __proto__: null }","samples":10327161,"opsSec":20648301.079295088},{"name":"{ ...object, newProp: true }","samples":400618,"opsSec":801231.0515970252},{"name":"structuredClone","samples":141978,"opsSec":283944.5774775372},{"name":"JSON.parse + JSON.stringify","samples":95543,"opsSec":191082.93579404158},{"name":"loop + object.keys starting with {}","samples":750839,"opsSec":1501471.724811502},{"name":"loop + object.keys starting with { __proto__: null }","samples":369905,"opsSec":739455.8435393836},{"name":"loop + object.keys starting with { randomProp: true }","samples":259297,"opsSec":518453.91686238727},{"name":"object.keys + reduce(FN, {})","samples":757696,"opsSec":1515383.3077613465},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":377258,"opsSec":754239.743100815},{"name":"object.keys + reduce(FN, { newProp: true })","samples":250748,"opsSec":501494.73121833004}]}-->
