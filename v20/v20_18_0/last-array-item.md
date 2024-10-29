## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|131,854,685|65927390|
|Length = 10_000 - Array.at|91,730,058|45865955|
|Length = 1_000_000 - Array.at|97,514,925|48757472|
|Length = 100 - Array[length - 1]|95,092,439|47546442|
|Length = 10_000 - Array[length - 1]|95,418,296|47714963|
|Length = 1_000_000 - Array[length - 1]|95,371,580|47693982|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:06:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":131854685.59204513,"samples":65927390},{"name":"Length = 10_000 - Array.at","opsSec":91730058.52049881,"samples":45865955},{"name":"Length = 1_000_000 - Array.at","opsSec":97514925.08210453,"samples":48757472},{"name":"Length = 100 - Array[length - 1]","opsSec":95092439.53793761,"samples":47546442},{"name":"Length = 10_000 - Array[length - 1]","opsSec":95418296.6088459,"samples":47714963},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":95371580.30696222,"samples":47693982}]}-->
