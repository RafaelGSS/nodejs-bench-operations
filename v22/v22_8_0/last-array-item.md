## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|100,137,494|50636084|
|Length = 10_000 - Array.at|79,823,837|39911929|
|Length = 1_000_000 - Array.at|85,030,880|42656082|
|Length = 100 - Array[length - 1]|74,690,353|37346271|
|Length = 10_000 - Array[length - 1]|65,043,748|32521884|
|Length = 1_000_000 - Array[length - 1]|57,107,861|28553980|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:09:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":100137494.23114283,"samples":50636084},{"name":"Length = 10_000 - Array.at","opsSec":79823837.24580231,"samples":39911929},{"name":"Length = 1_000_000 - Array.at","opsSec":85030880.31735435,"samples":42656082},{"name":"Length = 100 - Array[length - 1]","opsSec":74690353.27388766,"samples":37346271},{"name":"Length = 10_000 - Array[length - 1]","opsSec":65043748.87713784,"samples":32521884},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":57107861.66026223,"samples":28553980}]}-->
