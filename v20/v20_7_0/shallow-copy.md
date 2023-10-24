## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,040,118|92|
|{ ...object, __proto__: null }|21,077,367|95|
|{ ...object, newProp: true }|613,326|85|
|structuredClone|180,645|92|
|JSON.parse + JSON.stringify|149,409|98|
|loop + object.keys starting with {}|864,902|98|
|loop + object.keys starting with { __proto__: null }|501,299|97|
|loop + object.keys starting with { randomProp: true }|389,920|96|
|object.keys + reduce(FN, {})|370,701|95|
|object.keys + reduce(FN, { __proto__: null })|501,162|91|
|object.keys + reduce(FN, { newProp: true })|390,176|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":20040117.612303577,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":21077366.538307697,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":613326.0877272964,"samples":3},{"name":"structuredClone","opsSec":180645.15653937607,"samples":4},{"name":"JSON.parse + JSON.stringify","opsSec":149409.36881027842,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":864901.9196171783,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":501299.42545071157,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":389920.1772853752,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":370700.9029215952,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":501161.513292064,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":390175.5671899106,"samples":4}]}-->
