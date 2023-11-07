## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,863,645|90|
|{ ...object, __proto__: null }|21,268,026|99|
|{ ...object, newProp: true }|717,183|89|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|197,167|97|
|loop + object.keys starting with {}|509,264|96|
|loop + object.keys starting with { __proto__: null }|768,776|99|
|loop + object.keys starting with { randomProp: true }|531,037|98|
|object.keys + reduce(FN, {})|524,162|97|
|object.keys + reduce(FN, { __proto__: null })|775,408|98|
|object.keys + reduce(FN, { newProp: true })|547,058|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:38:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":20863644.752361048,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":21268026.096310105,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":717182.6397502336,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":197166.8694652675,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":509263.5756268957,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":768776.4797690883,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":531037.3250860356,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":524161.9953628985,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":775408.3892716394,"samples":8},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":547058.1636305224,"samples":4}]}-->
