## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,812,224|93|
|{ ...object, __proto__: null }|11,126,723|96|
|{ ...object, newProp: true }|423,547|84|
|structuredClone|146,516|94|
|JSON.parse + JSON.stringify|122,389|94|
|loop + object.keys starting with {}|625,361|93|
|loop + object.keys starting with { __proto__: null }|375,900|93|
|loop + object.keys starting with { randomProp: true }|270,537|95|
|object.keys + reduce(FN, {})|261,551|96|
|object.keys + reduce(FN, { __proto__: null })|381,365|92|
|object.keys + reduce(FN, { newProp: true })|272,898|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":10812223.542266702,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":11126723.254419561,"samples":8},{"name":"{ ...object, newProp: true }","opsSec":423547.3590374744,"samples":3},{"name":"structuredClone","opsSec":146515.776934771,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":122389.11828372262,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":625361.1666900826,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":375900.1990452162,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":270537.36272940226,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":261551.23324384735,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":381364.7008377605,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":272898.19691847445,"samples":5}]}-->
