## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,099,895|11050181|
|{ ...object, __proto__: null }|22,147,303|11073980|
|{ ...object, newProp: true }|849,651|424827|
|structuredClone|293,455|146798|
|JSON.parse + JSON.stringify|193,359|96680|
|loop + object.keys starting with {}|1,516,501|758488|
|loop + object.keys starting with { __proto__: null }|784,118|392061|
|loop + object.keys starting with { randomProp: true }|532,585|266317|
|object.keys + reduce(FN, {})|1,540,095|770072|
|object.keys + reduce(FN, { __proto__: null })|803,066|401662|
|object.keys + reduce(FN, { newProp: true })|523,614|261808|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:56:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":11050181,"opsSec":22099895.1618146},{"name":"{ ...object, __proto__: null }","samples":11073980,"opsSec":22147303.15528302},{"name":"{ ...object, newProp: true }","samples":424827,"opsSec":849651.1162841114},{"name":"structuredClone","samples":146798,"opsSec":293455.64134056936},{"name":"JSON.parse + JSON.stringify","samples":96680,"opsSec":193359.19910619728},{"name":"loop + object.keys starting with {}","samples":758488,"opsSec":1516501.2289602493},{"name":"loop + object.keys starting with { __proto__: null }","samples":392061,"opsSec":784118.7380660496},{"name":"loop + object.keys starting with { randomProp: true }","samples":266317,"opsSec":532585.2205196526},{"name":"object.keys + reduce(FN, {})","samples":770072,"opsSec":1540095.970567062},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":401662,"opsSec":803066.220561597},{"name":"object.keys + reduce(FN, { newProp: true })","samples":261808,"opsSec":523614.92030603427}]}-->
