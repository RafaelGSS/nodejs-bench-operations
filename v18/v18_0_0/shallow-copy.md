## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|27,614,180|94|
|{ ...object, __proto__: null }|28,476,125|97|
|{ ...object, newProp: true }|806,815|88|
|structuredClone|280,712|95|
|JSON.parse + JSON.stringify|188,236|96|
|loop + object.keys starting with {}|1,345,406|95|
|loop + object.keys starting with { __proto__: null }|735,115|95|
|loop + object.keys starting with { randomProp: true }|592,577|94|
|object.keys + reduce(FN, {})|573,149|99|
|object.keys + reduce(FN, { __proto__: null })|750,487|98|
|object.keys + reduce(FN, { newProp: true })|597,371|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:23:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":27614180.019079838,"samples":9},{"name":"{ ...object, __proto__: null }","opsSec":28476125.26322953,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":806814.9837047429,"samples":3},{"name":"structuredClone","opsSec":280711.6773982498,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":188236.3783908569,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":1345406.480734626,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":735115.3934611314,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":592576.5839805886,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":573149.2033793952,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":750487.386139866,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":597370.9913641548,"samples":4}]}-->
