## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|29,669,233|92|
|{ ...object, __proto__: null }|30,411,530|98|
|{ ...object, newProp: true }|923,761|89|
|structuredClone|270,214|96|
|JSON.parse + JSON.stringify|206,021|91|
|loop + object.keys starting with {}|1,647,349|99|
|loop + object.keys starting with { __proto__: null }|915,537|92|
|loop + object.keys starting with { randomProp: true }|656,722|95|
|object.keys + reduce(FN, {})|641,138|97|
|object.keys + reduce(FN, { __proto__: null })|925,154|97|
|object.keys + reduce(FN, { newProp: true })|655,794|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:54:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":29669232.664336704,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":30411530.365146924,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":923760.6565146085,"samples":3},{"name":"structuredClone","opsSec":270213.8604994488,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":206020.53210863037,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":1647348.6176617276,"samples":4},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":915537.4240936147,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":656721.6219060426,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":641137.7568119519,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":925154.1224609868,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":655794.4997228091,"samples":6}]}-->
