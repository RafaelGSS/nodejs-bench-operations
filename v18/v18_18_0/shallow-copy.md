## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|15,286,041|92|
|{ ...object, __proto__: null }|15,555,016|96|
|{ ...object, newProp: true }|452,862|78|
|structuredClone|176,673|98|
|JSON.parse + JSON.stringify|147,341|95|
|loop + object.keys starting with {}|672,077|96|
|loop + object.keys starting with { __proto__: null }|428,357|98|
|loop + object.keys starting with { randomProp: true }|314,325|98|
|object.keys + reduce(FN, {})|676,076|95|
|object.keys + reduce(FN, { __proto__: null })|422,873|93|
|object.keys + reduce(FN, { newProp: true })|322,355|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":15286041.237427384,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":15555016.160934266,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":452861.61761314893,"samples":3},{"name":"structuredClone","opsSec":176673.00576178925,"samples":10},{"name":"JSON.parse + JSON.stringify","opsSec":147341.44251633846,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":672076.5766873166,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":428356.7322576324,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":314324.80230980593,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":676076.3071081657,"samples":7},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":422872.6345137444,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":322355.3076085978,"samples":5}]}-->
