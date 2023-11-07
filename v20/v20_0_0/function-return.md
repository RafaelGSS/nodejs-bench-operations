## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,627,784|95|
|Function returning explicitly undefined|1,653,119|99|
|Function returning implicitly undefined|1,682,558|99|
|Function returning string|1,621,507|100|
|Function returning integer|1,680,692|94|
|Function returning float|1,677,546|100|
|Function returning functions|1,635,813|100|
|Function returning arrow functions|1,645,804|98|
|Function returning empty object|1,672,033|101|
|Function returning empty array|1,664,814|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:03:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1627784.4964097808,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1653119.249867937,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1682558.0666915884,"samples":5},{"name":"Function returning string","opsSec":1621506.6980784517,"samples":8},{"name":"Function returning integer","opsSec":1680692.0334194328,"samples":5},{"name":"Function returning float","opsSec":1677546.1729119397,"samples":5},{"name":"Function returning functions","opsSec":1635812.5077101968,"samples":5},{"name":"Function returning arrow functions","opsSec":1645804.039790784,"samples":6},{"name":"Function returning empty object","opsSec":1672032.9601235604,"samples":6},{"name":"Function returning empty array","opsSec":1664813.594369486,"samples":5}]}-->
