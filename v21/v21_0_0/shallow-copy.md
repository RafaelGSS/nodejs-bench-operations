## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,225,025|4612513|
|{ ...object, __proto__: null }|2,188,184|1094093|
|{ ...object, newProp: true }|9,867,868|4933935|
|structuredClone|256,297|128149|
|JSON.parse + JSON.stringify|249,693|124850|
|loop + object.keys starting with {}|1,301,365|650683|
|loop + object.keys starting with { __proto__: null }|740,890|370446|
|loop + object.keys starting with { randomProp: true }|562,070|281036|
|object.keys + reduce(FN, {})|1,214,399|607200|
|object.keys + reduce(FN, { __proto__: null })|781,999|391000|
|object.keys + reduce(FN, { newProp: true })|568,674|284338|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:10:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":9225025.857072225,"samples":4612513},{"name":"{ ...object, __proto__: null }","opsSec":2188184.247050848,"samples":1094093},{"name":"{ ...object, newProp: true }","opsSec":9867868.761496073,"samples":4933935},{"name":"structuredClone","opsSec":256297.45449365693,"samples":128149},{"name":"JSON.parse + JSON.stringify","opsSec":249693.51467229778,"samples":124850},{"name":"loop + object.keys starting with {}","opsSec":1301365.7677873117,"samples":650683},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":740890.9433044828,"samples":370446},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":562070.773587044,"samples":281036},{"name":"object.keys + reduce(FN, {})","opsSec":1214399.282924986,"samples":607200},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":781999.5899559845,"samples":391000},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":568674.1165518138,"samples":284338}]}-->
