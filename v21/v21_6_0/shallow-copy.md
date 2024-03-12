## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|30,719,404|95|
|{ ...object, __proto__: null }|2,494,632|92|
|{ ...object, newProp: true }|28,206,092|97|
|structuredClone|284,421|97|
|JSON.parse + JSON.stringify|232,992|98|
|loop + object.keys starting with {}|1,486,275|95|
|loop + object.keys starting with { __proto__: null }|801,470|92|
|loop + object.keys starting with { randomProp: true }|632,529|98|
|object.keys + reduce(FN, {})|617,730|99|
|object.keys + reduce(FN, { __proto__: null })|808,415|93|
|object.keys + reduce(FN, { newProp: true })|646,408|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":30719404.112520285,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":2494632.385833377,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":28206091.915051915,"samples":6},{"name":"structuredClone","opsSec":284420.82279447344,"samples":3},{"name":"JSON.parse + JSON.stringify","opsSec":232992.22012263958,"samples":6},{"name":"loop + object.keys starting with {}","opsSec":1486274.5237173974,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":801469.5862333274,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":632529.3771593951,"samples":6},{"name":"object.keys + reduce(FN, {})","opsSec":617730.2971571848,"samples":7},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":808414.6974505424,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":646408.1284718547,"samples":6}]}-->
