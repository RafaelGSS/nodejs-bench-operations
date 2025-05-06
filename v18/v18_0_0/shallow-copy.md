## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,237,474|9618765|
|{ ...object, __proto__: null }|19,883,888|9942140|
|{ ...object, newProp: true }|671,689|336972|
|structuredClone|245,020|122512|
|JSON.parse + JSON.stringify|194,939|97471|
|loop + object.keys starting with {}|1,264,101|632056|
|loop + object.keys starting with { __proto__: null }|680,169|340479|
|loop + object.keys starting with { randomProp: true }|518,593|259629|
|object.keys + reduce(FN, {})|1,269,420|634753|
|object.keys + reduce(FN, { __proto__: null })|671,645|335925|
|object.keys + reduce(FN, { newProp: true })|521,429|260716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:41:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":9618765,"opsSec":19237474.44217381},{"name":"{ ...object, __proto__: null }","samples":9942140,"opsSec":19883888.526002698},{"name":"{ ...object, newProp: true }","samples":336972,"opsSec":671689.7313455953},{"name":"structuredClone","samples":122512,"opsSec":245020.88284432847},{"name":"JSON.parse + JSON.stringify","samples":97471,"opsSec":194939.71491666176},{"name":"loop + object.keys starting with {}","samples":632056,"opsSec":1264101.11356121},{"name":"loop + object.keys starting with { __proto__: null }","samples":340479,"opsSec":680169.3314171738},{"name":"loop + object.keys starting with { randomProp: true }","samples":259629,"opsSec":518593.71878498426},{"name":"object.keys + reduce(FN, {})","samples":634753,"opsSec":1269420.6619265813},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":335925,"opsSec":671645.3778624713},{"name":"object.keys + reduce(FN, { newProp: true })","samples":260716,"opsSec":521429.0455830277}]}-->
