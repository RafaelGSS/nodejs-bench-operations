## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|18,304,284|85|
|{ ...object, __proto__: null }|19,122,513|97|
|{ ...object, newProp: true }|716,336|87|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|169,213|98|
|loop + object.keys starting with {}|502,286|97|
|loop + object.keys starting with { __proto__: null }|704,840|98|
|loop + object.keys starting with { randomProp: true }|525,547|97|
|object.keys + reduce(FN, {})|511,591|97|
|object.keys + reduce(FN, { __proto__: null })|710,314|97|
|object.keys + reduce(FN, { newProp: true })|530,624|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"{ ...object }","opsSec":18304284.128688503,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":19122512.556097608,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":716335.9365587622,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":169213.45797260114,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":502286.22041986044,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":704840.1629067339,"samples":8},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":525547.1537888824,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":511590.90961997287,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":710313.5361262271,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":530623.8005678037,"samples":4}]}-->
