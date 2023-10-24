## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|16,571,164|92|
|{ ...object, __proto__: null }|16,519,342|92|
|{ ...object, newProp: true }|456,372|79|
|structuredClone|152,415|96|
|JSON.parse + JSON.stringify|120,830|97|
|loop + object.keys starting with {}|306,287|97|
|loop + object.keys starting with { __proto__: null }|412,709|96|
|loop + object.keys starting with { randomProp: true }|319,772|96|
|object.keys + reduce(FN, {})|303,287|94|
|object.keys + reduce(FN, { __proto__: null })|413,126|95|
|object.keys + reduce(FN, { newProp: true })|319,202|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:31:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":16571164.2961981,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":16519342.432033034,"samples":4},{"name":"{ ...object, newProp: true }","opsSec":456372.0327598371,"samples":3},{"name":"structuredClone","opsSec":152415.22129814143,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":120829.92002933183,"samples":4},{"name":"loop + object.keys starting with {}","opsSec":306286.7384070003,"samples":6},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":412708.7447068893,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":319772.0113842024,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":303286.6197954086,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":413126.20474179555,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":319201.6162213525,"samples":6}]}-->
