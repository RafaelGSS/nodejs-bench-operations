## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,677,033|97|
|Function returning explicitly undefined|1,667,984|95|
|Function returning implicitly undefined|1,671,230|96|
|Function returning string|1,640,009|96|
|Function returning integer|1,693,062|100|
|Function returning float|1,673,988|95|
|Function returning functions|1,632,028|95|
|Function returning arrow functions|1,652,020|97|
|Function returning empty object|1,692,810|96|
|Function returning empty array|1,659,884|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:32:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1677033.0775489928,"samples":8},{"name":"Function returning explicitly undefined","opsSec":1667983.810090664,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1671229.8511068905,"samples":5},{"name":"Function returning string","opsSec":1640009.0523227192,"samples":5},{"name":"Function returning integer","opsSec":1693062.423294456,"samples":5},{"name":"Function returning float","opsSec":1673987.7866192006,"samples":5},{"name":"Function returning functions","opsSec":1632028.1416778557,"samples":7},{"name":"Function returning arrow functions","opsSec":1652019.7992057553,"samples":5},{"name":"Function returning empty object","opsSec":1692809.8116582374,"samples":5},{"name":"Function returning empty array","opsSec":1659883.7020336415,"samples":5}]}-->
