## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,907,920|9971127|
|{ ...object, __proto__: null }|19,958,306|9990379|
|{ ...object, newProp: true }|758,825|380503|
|structuredClone|286,501|143266|
|JSON.parse + JSON.stringify|187,609|93808|
|loop + object.keys starting with {}|1,501,812|750953|
|loop + object.keys starting with { __proto__: null }|738,925|369683|
|loop + object.keys starting with { randomProp: true }|539,985|270019|
|object.keys + reduce(FN, {})|1,521,889|760966|
|object.keys + reduce(FN, { __proto__: null })|772,483|386423|
|object.keys + reduce(FN, { newProp: true })|547,281|273752|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:10:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":9971127,"opsSec":19907920.322821178},{"name":"{ ...object, __proto__: null }","samples":9990379,"opsSec":19958306.820824027},{"name":"{ ...object, newProp: true }","samples":380503,"opsSec":758825.4392178635},{"name":"structuredClone","samples":143266,"opsSec":286501.001164676},{"name":"JSON.parse + JSON.stringify","samples":93808,"opsSec":187609.93794768502},{"name":"loop + object.keys starting with {}","samples":750953,"opsSec":1501812.316947669},{"name":"loop + object.keys starting with { __proto__: null }","samples":369683,"opsSec":738925.1262348329},{"name":"loop + object.keys starting with { randomProp: true }","samples":270019,"opsSec":539985.6192349917},{"name":"object.keys + reduce(FN, {})","samples":760966,"opsSec":1521889.6945102718},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":386423,"opsSec":772483.0951667217},{"name":"object.keys + reduce(FN, { newProp: true })","samples":273752,"opsSec":547281.8451642835}]}-->
