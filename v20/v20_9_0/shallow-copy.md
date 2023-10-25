## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|16,057,243|84|
|{ ...object, __proto__: null }|15,740,084|84|
|{ ...object, newProp: true }|429,828|72|
|structuredClone|143,503|89|
|JSON.parse + JSON.stringify|109,222|91|
|loop + object.keys starting with {}|808,032|91|
|loop + object.keys starting with { __proto__: null }|360,766|90|
|loop + object.keys starting with { randomProp: true }|274,676|86|
|object.keys + reduce(FN, {})|273,529|88|
|object.keys + reduce(FN, { __proto__: null })|364,748|89|
|object.keys + reduce(FN, { newProp: true })|286,846|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":16057243.225925464,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":15740084.023476662,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":429827.64346517326,"samples":3},{"name":"structuredClone","opsSec":143503.25698633128,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":109222.16627086038,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":808032.1088070995,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":360766.0711933288,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":274675.721257522,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":273529.0094185482,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":364747.6149400163,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":286845.90438605245,"samples":5}]}-->
