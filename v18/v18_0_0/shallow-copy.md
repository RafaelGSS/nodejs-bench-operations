## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|16,154,721|85|
|{ ...object, __proto__: null }|16,399,351|91|
|{ ...object, newProp: true }|453,791|81|
|structuredClone|166,048|89|
|JSON.parse + JSON.stringify|130,813|94|
|loop + object.keys starting with {}|762,840|90|
|loop + object.keys starting with { __proto__: null }|408,299|90|
|loop + object.keys starting with { randomProp: true }|306,260|89|
|object.keys + reduce(FN, {})|299,251|89|
|object.keys + reduce(FN, { __proto__: null })|409,084|90|
|object.keys + reduce(FN, { newProp: true })|306,664|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:44:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{ ...object }","opsSec":16154720.537335247,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":16399350.984602844,"samples":7},{"name":"{ ...object, newProp: true }","opsSec":453791.3948042042,"samples":3},{"name":"structuredClone","opsSec":166047.64264725012,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":130813.04303033708,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":762839.9065518312,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":408299.4515387518,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":306260.46799515,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":299250.8142834734,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":409084.4123669708,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":306664.28224030166,"samples":6}]}-->
