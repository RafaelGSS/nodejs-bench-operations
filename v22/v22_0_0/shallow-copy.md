## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,794,579|5397290|
|{ ...object, __proto__: null }|2,257,346|1128674|
|{ ...object, newProp: true }|10,457,773|5228887|
|structuredClone|321,805|160903|
|JSON.parse + JSON.stringify|293,127|146564|
|loop + object.keys starting with {}|1,479,388|739695|
|loop + object.keys starting with { __proto__: null }|883,264|441633|
|loop + object.keys starting with { randomProp: true }|656,987|328494|
|object.keys + reduce(FN, {})|1,541,204|770603|
|object.keys + reduce(FN, { __proto__: null })|878,181|439091|
|object.keys + reduce(FN, { newProp: true })|698,516|349259|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:25:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10794579.632983554,"samples":5397290},{"name":"{ ...object, __proto__: null }","opsSec":2257346.8487518057,"samples":1128674},{"name":"{ ...object, newProp: true }","opsSec":10457773.247034859,"samples":5228887},{"name":"structuredClone","opsSec":321805.57779111405,"samples":160903},{"name":"JSON.parse + JSON.stringify","opsSec":293127.17924405326,"samples":146564},{"name":"loop + object.keys starting with {}","opsSec":1479388.7129336982,"samples":739695},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":883264.201674023,"samples":441633},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":656987.8213000409,"samples":328494},{"name":"object.keys + reduce(FN, {})","opsSec":1541204.9951341543,"samples":770603},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":878181.016437999,"samples":439091},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":698516.2718705345,"samples":349259}]}-->
