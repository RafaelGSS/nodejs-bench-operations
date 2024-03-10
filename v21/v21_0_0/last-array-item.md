## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|867,723,129|96|
|Length = 10_000 - Array.at|873,817,983|91|
|Length = 1_000_000 - Array.at|867,089,937|95|
|Length = 100 - Array[length - 1]|818,737,279|95|
|Length = 10_000 - Array[length - 1]|821,315,871|94|
|Length = 1_000_000 - Array[length - 1]|822,874,415|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":867723128.7217239,"samples":10},{"name":"Length = 10_000 - Array.at","opsSec":873817982.8560684,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":867089937.3164809,"samples":8},{"name":"Length = 100 - Array[length - 1]","opsSec":818737278.7109885,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":821315870.6655908,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":822874415.2115588,"samples":7}]}-->
