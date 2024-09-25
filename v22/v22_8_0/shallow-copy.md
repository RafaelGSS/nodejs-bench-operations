## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,250,367|5125184|
|{ ...object, __proto__: null }|2,128,245|1064123|
|{ ...object, newProp: true }|9,367,687|4683844|
|structuredClone|286,282|143142|
|JSON.parse + JSON.stringify|279,716|139859|
|loop + object.keys starting with {}|1,397,220|698611|
|loop + object.keys starting with { __proto__: null }|760,501|380251|
|loop + object.keys starting with { randomProp: true }|536,620|268311|
|object.keys + reduce(FN, {})|1,403,229|701615|
|object.keys + reduce(FN, { __proto__: null })|693,245|346623|
|object.keys + reduce(FN, { newProp: true })|563,036|281519|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:54:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":10250367.71291622,"samples":5125184},{"name":"{ ...object, __proto__: null }","opsSec":2128245.94466856,"samples":1064123},{"name":"{ ...object, newProp: true }","opsSec":9367687.044431187,"samples":4683844},{"name":"structuredClone","opsSec":286282.3235305437,"samples":143142},{"name":"JSON.parse + JSON.stringify","opsSec":279716.2260393361,"samples":139859},{"name":"loop + object.keys starting with {}","opsSec":1397220.527325111,"samples":698611},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":760501.2957757442,"samples":380251},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":536620.9568082999,"samples":268311},{"name":"object.keys + reduce(FN, {})","opsSec":1403229.000900307,"samples":701615},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":693245.2499089204,"samples":346623},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":563036.4111116071,"samples":281519}]}-->
