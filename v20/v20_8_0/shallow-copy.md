## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|29,104,866|94|
|{ ...object, __proto__: null }|29,742,767|94|
|{ ...object, newProp: true }|887,566|89|
|structuredClone|265,584|93|
|JSON.parse + JSON.stringify|208,699|100|
|loop + object.keys starting with {}|1,661,262|93|
|loop + object.keys starting with { __proto__: null }|874,728|95|
|loop + object.keys starting with { randomProp: true }|637,673|99|
|object.keys + reduce(FN, {})|608,708|95|
|object.keys + reduce(FN, { __proto__: null })|898,272|96|
|object.keys + reduce(FN, { newProp: true })|641,796|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:55:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":29104866.256744016,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":29742767.030706726,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":887565.8400622496,"samples":3},{"name":"structuredClone","opsSec":265584.25356398785,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":208699.05752221184,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1661262.4045498352,"samples":8},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":874728.1638790237,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":637673.4886878112,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":608708.3337781808,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":898271.9082771736,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":641795.7393190529,"samples":5}]}-->
