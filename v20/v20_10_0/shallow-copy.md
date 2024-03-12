## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|26,421,274|92|
|{ ...object, __proto__: null }|27,127,730|98|
|{ ...object, newProp: true }|895,454|88|
|structuredClone|261,860|97|
|JSON.parse + JSON.stringify|172,396|93|
|loop + object.keys starting with {}|1,461,448|92|
|loop + object.keys starting with { __proto__: null }|778,047|98|
|loop + object.keys starting with { randomProp: true }|614,420|91|
|object.keys + reduce(FN, {})|1,471,931|94|
|object.keys + reduce(FN, { __proto__: null })|779,538|97|
|object.keys + reduce(FN, { newProp: true })|618,167|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"{ ...object }","opsSec":26421273.845582608,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":27127729.992757663,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":895453.9129377009,"samples":3},{"name":"structuredClone","opsSec":261859.97199136054,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":172395.67056729487,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1461448.1139412255,"samples":7},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":778046.8638887528,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":614419.8866962406,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":1471931.017498355,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":779538.1131759277,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":618167.123353708,"samples":4}]}-->
