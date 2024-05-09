## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,095,947|5047974|
|{ ...object, __proto__: null }|2,229,687|1114844|
|{ ...object, newProp: true }|9,737,810|4868906|
|structuredClone|314,044|157023|
|JSON.parse + JSON.stringify|290,350|145176|
|loop + object.keys starting with {}|1,481,930|740966|
|loop + object.keys starting with { __proto__: null }|915,648|457825|
|loop + object.keys starting with { randomProp: true }|672,089|336045|
|object.keys + reduce(FN, {})|1,533,943|766972|
|object.keys + reduce(FN, { __proto__: null })|899,909|449955|
|object.keys + reduce(FN, { newProp: true })|698,198|349100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:29:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10095947.293285822,"samples":5047974},{"name":"{ ...object, __proto__: null }","opsSec":2229687.906351766,"samples":1114844},{"name":"{ ...object, newProp: true }","opsSec":9737810.675656324,"samples":4868906},{"name":"structuredClone","opsSec":314044.3914645668,"samples":157023},{"name":"JSON.parse + JSON.stringify","opsSec":290350.4297847318,"samples":145176},{"name":"loop + object.keys starting with {}","opsSec":1481930.438046687,"samples":740966},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":915648.4965058457,"samples":457825},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":672089.8870892056,"samples":336045},{"name":"object.keys + reduce(FN, {})","opsSec":1533943.4539168775,"samples":766972},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":899909.2008808567,"samples":449955},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":698198.7655833923,"samples":349100}]}-->
