## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|23,257,096|99|
|Length = 10_000 - Array.at|23,318,152|94|
|Length = 1_000_000 - Array.at|23,316,601|96|
|Length = 100 - Array[length - 1]|815,469,237|92|
|Length = 10_000 - Array[length - 1]|815,774,844|97|
|Length = 1_000_000 - Array[length - 1]|815,950,710|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":23257095.780231107,"samples":4},{"name":"Length = 10_000 - Array.at","opsSec":23318151.692381207,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":23316601.12019535,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":815469236.5606205,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":815774844.0958465,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":815950709.830403,"samples":6}]}-->
