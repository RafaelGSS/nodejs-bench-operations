## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,822,382|88|
|{ ...object, __proto__: null }|20,835,533|95|
|{ ...object, newProp: true }|594,921|83|
|structuredClone|194,420|93|
|JSON.parse + JSON.stringify|145,693|98|
|loop + object.keys starting with {}|1,149,021|95|
|loop + object.keys starting with { __proto__: null }|586,748|92|
|loop + object.keys starting with { randomProp: true }|438,378|97|
|object.keys + reduce(FN, {})|416,280|95|
|object.keys + reduce(FN, { __proto__: null })|599,634|96|
|object.keys + reduce(FN, { newProp: true })|437,876|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":20822382.449912235,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":20835533.043650396,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":594921.0315339745,"samples":3},{"name":"structuredClone","opsSec":194419.79388559196,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":145693.27169584215,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1149020.603731806,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":586747.7023613856,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":438377.52481844026,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":416279.72096983495,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":599633.6669778717,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":437875.5892695649,"samples":5}]}-->
