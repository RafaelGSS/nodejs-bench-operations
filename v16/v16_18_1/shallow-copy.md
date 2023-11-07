## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,897,219|97|
|{ ...object, __proto__: null }|20,185,273|97|
|{ ...object, newProp: true }|768,001|90|
|structuredClone|0|0|
|JSON.parse + JSON.stringify|202,107|96|
|loop + object.keys starting with {}|544,089|92|
|loop + object.keys starting with { __proto__: null }|821,651|96|
|loop + object.keys starting with { randomProp: true }|557,784|95|
|object.keys + reduce(FN, {})|551,031|98|
|object.keys + reduce(FN, { __proto__: null })|835,350|95|
|object.keys + reduce(FN, { newProp: true })|568,926|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":19897219.14924646,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":20185273.40450858,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":768000.8825236595,"samples":3},{"name":"structuredClone","opsSec":0,"samples":0},{"name":"JSON.parse + JSON.stringify","opsSec":202106.664974925,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":544089.1778131583,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":821651.1382366525,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":557783.7960720444,"samples":7},{"name":"object.keys + reduce(FN, {})","opsSec":551030.871583326,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":835350.2111266084,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":568926.3724769548,"samples":6}]}-->
