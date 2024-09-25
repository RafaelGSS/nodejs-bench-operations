## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,024,252|4512127|
|{ ...object, __proto__: null }|2,105,328|1052665|
|{ ...object, newProp: true }|8,705,106|4352554|
|structuredClone|291,556|145779|
|JSON.parse + JSON.stringify|276,556|138279|
|loop + object.keys starting with {}|1,422,657|711329|
|loop + object.keys starting with { __proto__: null }|773,302|386652|
|loop + object.keys starting with { randomProp: true }|564,984|282493|
|object.keys + reduce(FN, {})|565,138|282570|
|object.keys + reduce(FN, { __proto__: null })|752,852|376427|
|object.keys + reduce(FN, { newProp: true })|570,802|285402|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:52:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9024252.790708482,"samples":4512127},{"name":"{ ...object, __proto__: null }","opsSec":2105328.3620607965,"samples":1052665},{"name":"{ ...object, newProp: true }","opsSec":8705106.537562065,"samples":4352554},{"name":"structuredClone","opsSec":291556.164362856,"samples":145779},{"name":"JSON.parse + JSON.stringify","opsSec":276556.7682166368,"samples":138279},{"name":"loop + object.keys starting with {}","opsSec":1422657.7069306741,"samples":711329},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":773302.270896049,"samples":386652},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":564984.6598557604,"samples":282493},{"name":"object.keys + reduce(FN, {})","opsSec":565138.6594917644,"samples":282570},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":752852.6237854636,"samples":376427},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":570802.5729941975,"samples":285402}]}-->
