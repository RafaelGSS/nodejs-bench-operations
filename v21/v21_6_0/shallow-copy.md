## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|30,090,742|90|
|{ ...object, __proto__: null }|2,488,950|98|
|{ ...object, newProp: true }|27,366,741|95|
|structuredClone|272,898|96|
|JSON.parse + JSON.stringify|235,271|97|
|loop + object.keys starting with {}|1,486,921|93|
|loop + object.keys starting with { __proto__: null }|798,347|96|
|loop + object.keys starting with { randomProp: true }|624,729|96|
|object.keys + reduce(FN, {})|611,444|88|
|object.keys + reduce(FN, { __proto__: null })|813,587|92|
|object.keys + reduce(FN, { newProp: true })|642,497|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:14:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":30090742.32917829,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":2488949.8446187535,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":27366740.926504936,"samples":6},{"name":"structuredClone","opsSec":272898.4850593826,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":235270.83781871662,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":1486921.3781500144,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":798346.7478626351,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":624729.2759721676,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":611443.7456211008,"samples":8},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":813586.8014343833,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":642497.0221957157,"samples":6}]}-->
