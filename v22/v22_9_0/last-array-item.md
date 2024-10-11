## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|105,828,079|53962188|
|Length = 10_000 - Array.at|70,841,071|36094916|
|Length = 1_000_000 - Array.at|87,644,818|44059099|
|Length = 100 - Array[length - 1]|90,065,716|45032916|
|Length = 10_000 - Array[length - 1]|87,240,174|43620141|
|Length = 1_000_000 - Array[length - 1]|90,156,675|45257749|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:09:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":105828079.43032363,"samples":53962188},{"name":"Length = 10_000 - Array.at","opsSec":70841071.83154204,"samples":36094916},{"name":"Length = 1_000_000 - Array.at","opsSec":87644818.1702635,"samples":44059099},{"name":"Length = 100 - Array[length - 1]","opsSec":90065716.175489,"samples":45032916},{"name":"Length = 10_000 - Array[length - 1]","opsSec":87240174.86906527,"samples":43620141},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":90156675.51333703,"samples":45257749}]}-->
