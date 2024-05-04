## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|33,512,555|90|
|{ ...object, __proto__: null }|2,824,306|95|
|{ ...object, newProp: true }|30,957,147|99|
|structuredClone|311,251|97|
|JSON.parse + JSON.stringify|251,063|98|
|loop + object.keys starting with {}|1,668,554|95|
|loop + object.keys starting with { __proto__: null }|866,187|96|
|loop + object.keys starting with { randomProp: true }|698,133|96|
|object.keys + reduce(FN, {})|677,265|97|
|object.keys + reduce(FN, { __proto__: null })|870,512|96|
|object.keys + reduce(FN, { newProp: true })|704,144|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:31:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":33512554.563270263,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":2824305.9005462723,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":30957146.697950613,"samples":6},{"name":"structuredClone","opsSec":311250.5996689971,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":251062.7925731059,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1668553.8475828075,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":866186.5905831299,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":698133.1766627394,"samples":7},{"name":"object.keys + reduce(FN, {})","opsSec":677265.4457642619,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":870511.9771063247,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":704144.09466761,"samples":4}]}-->
