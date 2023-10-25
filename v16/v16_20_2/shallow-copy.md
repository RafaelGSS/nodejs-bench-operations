## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,495,881|94|
|{ ...object, __proto__: null }|13,649,786|95|
|{ ...object, newProp: true }|494,381|83|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|140,523|98|
|loop + object.keys starting with {}|325,603|95|
|loop + object.keys starting with { __proto__: null }|425,244|97|
|loop + object.keys starting with { randomProp: true }|339,413|94|
|object.keys + reduce(FN, {})|324,400|94|
|object.keys + reduce(FN, { __proto__: null })|421,950|93|
|object.keys + reduce(FN, { newProp: true })|333,460|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":13495880.840898832,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":13649786.270443007,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":494381.29113380634,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":140522.95271483995,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":325602.8067654857,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":425243.63053388614,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":339412.65653669153,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":324399.688014092,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":421949.7567947134,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":333460.2314349798,"samples":6}]}-->
