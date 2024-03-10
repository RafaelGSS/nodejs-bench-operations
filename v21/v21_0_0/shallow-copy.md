## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|30,432,329|92|
|{ ...object, __proto__: null }|2,492,476|96|
|{ ...object, newProp: true }|27,904,520|98|
|structuredClone|256,322|93|
|JSON.parse + JSON.stringify|234,011|99|
|loop + object.keys starting with {}|1,497,587|98|
|loop + object.keys starting with { __proto__: null }|792,967|98|
|loop + object.keys starting with { randomProp: true }|631,400|96|
|object.keys + reduce(FN, {})|614,481|94|
|object.keys + reduce(FN, { __proto__: null })|793,992|93|
|object.keys + reduce(FN, { newProp: true })|642,804|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":30432329.061042156,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":2492475.9755413085,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":27904519.804504722,"samples":6},{"name":"structuredClone","opsSec":256322.28864293406,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":234011.12344376938,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1497587.0520212513,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":792966.7681719383,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":631399.9735814985,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":614480.9295506044,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":793992.2728525089,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":642804.4848808831,"samples":5}]}-->
