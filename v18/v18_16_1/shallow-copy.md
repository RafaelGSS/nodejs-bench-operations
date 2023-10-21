## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|14,875,759|94|
|{ ...object, __proto__: null }|14,977,415|90|
|{ ...object, newProp: true }|458,598|85|
|structuredClone|176,131|97|
|JSON.parse + JSON.stringify|144,599|96|
|loop + object.keys starting with {}|667,747|97|
|loop + object.keys starting with { __proto__: null }|414,244|95|
|loop + object.keys starting with { randomProp: true }|314,651|94|
|object.keys + reduce(FN, {})|297,446|98|
|object.keys + reduce(FN, { __proto__: null })|411,127|91|
|object.keys + reduce(FN, { newProp: true })|314,909|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":14875759.231430275,"samples":8},{"name":"{ ...object, __proto__: null }","opsSec":14977414.59211564,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":458597.69116811146,"samples":3},{"name":"structuredClone","opsSec":176130.58830721985,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":144598.99884572526,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":667747.157959436,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":414244.2887474764,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":314651.4284725838,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":297445.5670442859,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":411126.78145173745,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":314909.4065211767,"samples":7}]}-->
