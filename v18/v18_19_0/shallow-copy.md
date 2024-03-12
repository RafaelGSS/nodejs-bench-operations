## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,522,466|94|
|{ ...object, __proto__: null }|25,644,206|94|
|{ ...object, newProp: true }|717,786|88|
|structuredClone|253,179|96|
|JSON.parse + JSON.stringify|174,264|98|
|loop + object.keys starting with {}|501,333|95|
|loop + object.keys starting with { __proto__: null }|697,010|91|
|loop + object.keys starting with { randomProp: true }|535,090|94|
|object.keys + reduce(FN, {})|514,907|94|
|object.keys + reduce(FN, { __proto__: null })|708,922|92|
|object.keys + reduce(FN, { newProp: true })|541,277|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:12:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{ ...object }","opsSec":25522466.439101588,"samples":8},{"name":"{ ...object, __proto__: null }","opsSec":25644205.8444407,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":717785.8298286601,"samples":3},{"name":"structuredClone","opsSec":253178.86954304797,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":174263.52983173408,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":501332.69697424676,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":697010.370886517,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":535089.6557965173,"samples":8},{"name":"object.keys + reduce(FN, {})","opsSec":514907.05136015784,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":708922.2156969245,"samples":5},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":541276.738078501,"samples":7}]}-->
