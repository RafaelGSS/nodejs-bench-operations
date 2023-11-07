## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|27,078,746|94|
|{ ...object, __proto__: null }|27,906,988|96|
|{ ...object, newProp: true }|785,490|87|
|structuredClone|257,824|99|
|JSON.parse + JSON.stringify|205,041|98|
|loop + object.keys starting with {}|522,519|86|
|loop + object.keys starting with { __proto__: null }|770,644|99|
|loop + object.keys starting with { randomProp: true }|553,947|99|
|object.keys + reduce(FN, {})|552,375|100|
|object.keys + reduce(FN, { __proto__: null })|772,278|98|
|object.keys + reduce(FN, { newProp: true })|556,592|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:46:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":27078745.814329524,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":27906987.721196555,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":785490.142747378,"samples":3},{"name":"structuredClone","opsSec":257824.44688748237,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":205040.85524927778,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":522518.7513525922,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":770644.2162993173,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":553946.9542502546,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":552375.192070828,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":772278.311225852,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":556591.7304697784,"samples":5}]}-->
