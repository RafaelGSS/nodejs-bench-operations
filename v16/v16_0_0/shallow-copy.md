## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|14,621,125|93|
|{ ...object, __proto__: null }|14,993,073|92|
|{ ...object, newProp: true }|513,325|83|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|138,538|96|
|loop + object.keys starting with {}|364,365|93|
|loop + object.keys starting with { __proto__: null }|510,858|97|
|loop + object.keys starting with { randomProp: true }|373,164|94|
|object.keys + reduce(FN, {})|372,787|97|
|object.keys + reduce(FN, { __proto__: null })|523,439|97|
|object.keys + reduce(FN, { newProp: true })|387,691|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":14621125.486116987,"samples":8},{"name":"{ ...object, __proto__: null }","opsSec":14993073.320287578,"samples":7},{"name":"{ ...object, newProp: true }","opsSec":513325.39383521414,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":138538.39520592662,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":364364.8888506387,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":510858.0967656853,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":373163.71991327696,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":372786.72752792505,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":523438.91111815773,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":387690.60242647614,"samples":8}]}-->
