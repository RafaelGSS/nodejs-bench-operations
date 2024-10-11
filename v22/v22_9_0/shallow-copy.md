## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,962,245|11982680|
|{ ...object, __proto__: null }|2,527,041|1264205|
|{ ...object, newProp: true }|19,575,260|9790410|
|structuredClone|297,846|149083|
|JSON.parse + JSON.stringify|298,709|149370|
|loop + object.keys starting with {}|1,625,573|813004|
|loop + object.keys starting with { __proto__: null }|874,222|437112|
|loop + object.keys starting with { randomProp: true }|657,244|328633|
|object.keys + reduce(FN, {})|1,719,125|859563|
|object.keys + reduce(FN, { __proto__: null })|912,871|456657|
|object.keys + reduce(FN, { newProp: true })|688,760|344420|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:50:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{ ...object }","opsSec":23962245.722772393,"samples":11982680},{"name":"{ ...object, __proto__: null }","opsSec":2527041.9302561334,"samples":1264205},{"name":"{ ...object, newProp: true }","opsSec":19575260.82167925,"samples":9790410},{"name":"structuredClone","opsSec":297846.33046889765,"samples":149083},{"name":"JSON.parse + JSON.stringify","opsSec":298709.22876750777,"samples":149370},{"name":"loop + object.keys starting with {}","opsSec":1625573.9002433831,"samples":813004},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":874222.2760336717,"samples":437112},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":657244.3976911367,"samples":328633},{"name":"object.keys + reduce(FN, {})","opsSec":1719125.05448122,"samples":859563},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":912871.2318921379,"samples":456657},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":688760.5803949957,"samples":344420}]}-->
