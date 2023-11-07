## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|27,323,255|95|
|{ ...object, __proto__: null }|27,911,591|94|
|{ ...object, newProp: true }|704,355|88|
|structuredClone|265,576|91|
|JSON.parse + JSON.stringify|207,379|99|
|loop + object.keys starting with {}|1,275,625|99|
|loop + object.keys starting with { __proto__: null }|780,826|96|
|loop + object.keys starting with { randomProp: true }|546,844|95|
|object.keys + reduce(FN, {})|531,992|97|
|object.keys + reduce(FN, { __proto__: null })|796,328|97|
|object.keys + reduce(FN, { newProp: true })|485,116|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:47:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":27323254.796147652,"samples":7},{"name":"{ ...object, __proto__: null }","opsSec":27911591.493906617,"samples":7},{"name":"{ ...object, newProp: true }","opsSec":704355.4213119508,"samples":3},{"name":"structuredClone","opsSec":265575.73588846676,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":207379.0442735849,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1275624.7138446807,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":780826.186568106,"samples":7},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":546843.6323993065,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":531991.550282929,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":796328.0108415536,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":485116.1743053588,"samples":4}]}-->
