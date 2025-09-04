## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,601,770|10801505|
|{ ...object, __proto__: null }|21,465,206|10732627|
|{ ...object, newProp: true }|711,755|358024|
|structuredClone|247,197|123683|
|JSON.parse + JSON.stringify|200,670|100355|
|loop + object.keys starting with {}|1,293,325|646986|
|loop + object.keys starting with { __proto__: null }|717,467|358762|
|loop + object.keys starting with { randomProp: true }|535,501|267865|
|object.keys + reduce(FN, {})|1,288,819|644597|
|object.keys + reduce(FN, { __proto__: null })|711,026|355888|
|object.keys + reduce(FN, { newProp: true })|527,739|264017|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:08:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":10801505,"opsSec":21601770.01519759},{"name":"{ ...object, __proto__: null }","samples":10732627,"opsSec":21465206.089660008},{"name":"{ ...object, newProp: true }","samples":358024,"opsSec":711755.9252904463},{"name":"structuredClone","samples":123683,"opsSec":247197.96718180817},{"name":"JSON.parse + JSON.stringify","samples":100355,"opsSec":200670.66212876156},{"name":"loop + object.keys starting with {}","samples":646986,"opsSec":1293325.3916238544},{"name":"loop + object.keys starting with { __proto__: null }","samples":358762,"opsSec":717467.152207662},{"name":"loop + object.keys starting with { randomProp: true }","samples":267865,"opsSec":535501.4758161984},{"name":"object.keys + reduce(FN, {})","samples":644597,"opsSec":1288819.8710572706},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":355888,"opsSec":711026.5524167968},{"name":"object.keys + reduce(FN, { newProp: true })","samples":264017,"opsSec":527739.7808502577}]}-->
