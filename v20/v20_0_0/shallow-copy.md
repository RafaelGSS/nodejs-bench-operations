## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|26,215,067|91|
|{ ...object, __proto__: null }|27,607,190|99|
|{ ...object, newProp: true }|888,711|92|
|structuredClone|258,687|96|
|JSON.parse + JSON.stringify|176,384|97|
|loop + object.keys starting with {}|1,463,421|95|
|loop + object.keys starting with { __proto__: null }|780,538|96|
|loop + object.keys starting with { randomProp: true }|623,366|95|
|object.keys + reduce(FN, {})|601,081|92|
|object.keys + reduce(FN, { __proto__: null })|780,328|94|
|object.keys + reduce(FN, { newProp: true })|624,203|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":26215067.144866683,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":27607189.657290004,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":888710.9477902829,"samples":3},{"name":"structuredClone","opsSec":258687.02649252678,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":176384.29812346943,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1463421.009400247,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":780537.9041323254,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":623365.524344489,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":601081.2496126775,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":780328.2252550052,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":624203.0314529144,"samples":6}]}-->
