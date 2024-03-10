## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|23,621,286|96|
|Length = 10_000 - Array.at|23,393,143|93|
|Length = 1_000_000 - Array.at|23,486,172|99|
|Length = 100 - Array[length - 1]|815,978,991|97|
|Length = 10_000 - Array[length - 1]|819,207,054|97|
|Length = 1_000_000 - Array[length - 1]|815,761,584|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":23621285.867837515,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":23393142.635958068,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":23486172.19977589,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":815978990.9340026,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":819207054.0751355,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":815761583.8058882,"samples":6}]}-->
