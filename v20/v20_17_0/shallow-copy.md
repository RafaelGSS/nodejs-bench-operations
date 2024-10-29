## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|22,126,539|11063277|
|{ ...object, __proto__: null }|20,269,162|10136670|
|{ ...object, newProp: true }|798,304|399359|
|structuredClone|286,171|143087|
|JSON.parse + JSON.stringify|192,178|96093|
|loop + object.keys starting with {}|1,526,342|763172|
|loop + object.keys starting with { __proto__: null }|802,120|401731|
|loop + object.keys starting with { randomProp: true }|592,881|296442|
|object.keys + reduce(FN, {})|1,561,923|781163|
|object.keys + reduce(FN, { __proto__: null })|828,837|414540|
|object.keys + reduce(FN, { newProp: true })|588,625|294313|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:11:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":22126539.8390145,"samples":11063277},{"name":"{ ...object, __proto__: null }","opsSec":20269162.566133443,"samples":10136670},{"name":"{ ...object, newProp: true }","opsSec":798304.0777390841,"samples":399359},{"name":"structuredClone","opsSec":286171.7993388631,"samples":143087},{"name":"JSON.parse + JSON.stringify","opsSec":192178.67683934033,"samples":96093},{"name":"loop + object.keys starting with {}","opsSec":1526342.3576556232,"samples":763172},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":802120.6729555463,"samples":401731},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":592881.5976437663,"samples":296442},{"name":"object.keys + reduce(FN, {})","opsSec":1561923.9295420572,"samples":781163},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":828837.0164825739,"samples":414540},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":588625.113530579,"samples":294313}]}-->
