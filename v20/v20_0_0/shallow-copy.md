## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|29,415,366|94|
|{ ...object, __proto__: null }|30,037,139|98|
|{ ...object, newProp: true }|946,360|88|
|structuredClone|283,455|98|
|JSON.parse + JSON.stringify|192,266|97|
|loop + object.keys starting with {}|1,622,267|96|
|loop + object.keys starting with { __proto__: null }|868,133|92|
|loop + object.keys starting with { randomProp: true }|684,001|98|
|object.keys + reduce(FN, {})|662,991|97|
|object.keys + reduce(FN, { __proto__: null })|868,277|96|
|object.keys + reduce(FN, { newProp: true })|688,119|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:26:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":29415366.16499367,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":30037138.65406706,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":946359.8667782436,"samples":3},{"name":"structuredClone","opsSec":283454.93417931814,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":192266.0070361466,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1622267.4746338434,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":868133.0812995968,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":684001.438483786,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":662991.0270640156,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":868277.4373836389,"samples":10},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":688118.9639875551,"samples":4}]}-->
