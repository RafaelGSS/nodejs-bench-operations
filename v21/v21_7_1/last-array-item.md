## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|866,780,869|94|
|Length = 10_000 - Array.at|870,092,920|99|
|Length = 1_000_000 - Array.at|867,086,625|96|
|Length = 100 - Array[length - 1]|818,186,562|97|
|Length = 10_000 - Array[length - 1]|818,303,598|97|
|Length = 1_000_000 - Array[length - 1]|818,109,106|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":866780869.3034127,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":870092919.7426186,"samples":9},{"name":"Length = 1_000_000 - Array.at","opsSec":867086625.0816306,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":818186562.1207709,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":818303598.3347789,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":818109105.7325722,"samples":6}]}-->
