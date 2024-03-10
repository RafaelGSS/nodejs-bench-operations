## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|18,740,151|89|
|{ ...object, __proto__: null }|18,984,977|95|
|{ ...object, newProp: true }|748,285|86|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|169,147|95|
|loop + object.keys starting with {}|528,878|97|
|loop + object.keys starting with { __proto__: null }|728,591|97|
|loop + object.keys starting with { randomProp: true }|541,041|92|
|object.keys + reduce(FN, {})|536,952|97|
|object.keys + reduce(FN, { __proto__: null })|741,998|97|
|object.keys + reduce(FN, { newProp: true })|558,475|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":18740151.107187096,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":18984977.238358144,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":748284.9400982838,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":169147.3005904002,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":528877.5796419606,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":728590.6911301545,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":541040.7382141761,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":536951.6053666454,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":741998.030082793,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":558474.8460409098,"samples":4}]}-->
