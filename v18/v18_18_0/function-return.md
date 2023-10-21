## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,367,780|94|
|Function returning explicitly undefined|1,368,703|95|
|Function returning implicitly undefined|1,395,011|94|
|Function returning string|1,344,140|96|
|Function returning integer|1,384,766|97|
|Function returning float|1,384,382|94|
|Function returning functions|1,326,948|97|
|Function returning arrow functions|1,329,160|94|
|Function returning empty object|1,374,520|96|
|Function returning empty array|1,348,182|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1367779.9999482464,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1368703.2058803819,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1395011.3147138446,"samples":5},{"name":"Function returning string","opsSec":1344140.0211934303,"samples":5},{"name":"Function returning integer","opsSec":1384766.3013447127,"samples":7},{"name":"Function returning float","opsSec":1384381.6207450605,"samples":5},{"name":"Function returning functions","opsSec":1326947.558429572,"samples":6},{"name":"Function returning arrow functions","opsSec":1329160.0953595522,"samples":5},{"name":"Function returning empty object","opsSec":1374520.4995226315,"samples":6},{"name":"Function returning empty array","opsSec":1348182.1560061201,"samples":7}]}-->
