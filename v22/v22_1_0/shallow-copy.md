## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|27,963,909|93|
|{ ...object, __proto__: null }|2,717,075|94|
|{ ...object, newProp: true }|26,014,191|92|
|structuredClone|319,902|97|
|JSON.parse + JSON.stringify|296,588|96|
|loop + object.keys starting with {}|1,754,012|96|
|loop + object.keys starting with { __proto__: null }|952,384|97|
|loop + object.keys starting with { randomProp: true }|744,045|98|
|object.keys + reduce(FN, {})|708,862|99|
|object.keys + reduce(FN, { __proto__: null })|952,172|99|
|object.keys + reduce(FN, { newProp: true })|742,304|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:35:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":27963909.144258793,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":2717074.9716515657,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":26014191.408602607,"samples":7},{"name":"structuredClone","opsSec":319902.2124291436,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":296587.74995656457,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1754011.9787244168,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":952383.6712480437,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":744044.9366116502,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":708862.3232982868,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":952172.4215456408,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":742304.0927408738,"samples":6}]}-->
