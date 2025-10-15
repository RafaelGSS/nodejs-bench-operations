## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,323,561|11162460|
|{ ...object, __proto__: null }|22,143,199|11071606|
|{ ...object, newProp: true }|846,767|423649|
|structuredClone|287,802|143904|
|JSON.parse + JSON.stringify|189,301|94652|
|loop + object.keys starting with {}|1,532,739|766376|
|loop + object.keys starting with { __proto__: null }|807,299|403889|
|loop + object.keys starting with { randomProp: true }|572,383|286197|
|object.keys + reduce(FN, {})|1,529,579|764834|
|object.keys + reduce(FN, { __proto__: null })|828,034|414056|
|object.keys + reduce(FN, { newProp: true })|576,211|288224|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:34:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":11162460,"opsSec":22323561.923786804},{"name":"{ ...object, __proto__: null }","samples":11071606,"opsSec":22143199.821240097},{"name":"{ ...object, newProp: true }","samples":423649,"opsSec":846767.1735136646},{"name":"structuredClone","samples":143904,"opsSec":287802.31532866764},{"name":"JSON.parse + JSON.stringify","samples":94652,"opsSec":189301.4171714641},{"name":"loop + object.keys starting with {}","samples":766376,"opsSec":1532739.9833185307},{"name":"loop + object.keys starting with { __proto__: null }","samples":403889,"opsSec":807299.1053269254},{"name":"loop + object.keys starting with { randomProp: true }","samples":286197,"opsSec":572383.8756740071},{"name":"object.keys + reduce(FN, {})","samples":764834,"opsSec":1529579.0396830519},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":414056,"opsSec":828034.5638636567},{"name":"object.keys + reduce(FN, { newProp: true })","samples":288224,"opsSec":576211.0666190947}]}-->
