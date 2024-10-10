## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,146,806|11073819|
|{ ...object, __proto__: null }|20,603,510|10301908|
|{ ...object, newProp: true }|778,278|389141|
|structuredClone|284,719|142364|
|JSON.parse + JSON.stringify|189,848|94925|
|loop + object.keys starting with {}|1,509,023|754975|
|loop + object.keys starting with { __proto__: null }|787,953|393977|
|loop + object.keys starting with { randomProp: true }|605,541|302773|
|object.keys + reduce(FN, {})|1,559,437|779721|
|object.keys + reduce(FN, { __proto__: null })|840,025|421267|
|object.keys + reduce(FN, { newProp: true })|600,979|300490|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":22146806.077376507,"samples":11073819},{"name":"{ ...object, __proto__: null }","opsSec":20603510.53235285,"samples":10301908},{"name":"{ ...object, newProp: true }","opsSec":778278.2533684883,"samples":389141},{"name":"structuredClone","opsSec":284719.9498281386,"samples":142364},{"name":"JSON.parse + JSON.stringify","opsSec":189848.39578105567,"samples":94925},{"name":"loop + object.keys starting with {}","opsSec":1509023.9844139165,"samples":754975},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":787953.0245141556,"samples":393977},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":605541.8871595025,"samples":302773},{"name":"object.keys + reduce(FN, {})","opsSec":1559437.4464426565,"samples":779721},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":840025.8357391849,"samples":421267},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":600979.7019140678,"samples":300490}]}-->
