## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|23,400,041|99|
|Length = 10_000 - Array.at|23,455,166|98|
|Length = 1_000_000 - Array.at|23,445,206|97|
|Length = 100 - Array[length - 1]|821,914,453|100|
|Length = 10_000 - Array[length - 1]|822,039,928|98|
|Length = 1_000_000 - Array[length - 1]|822,160,484|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:56:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":23400041.46623576,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":23455166.49322627,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":23445205.6107281,"samples":5},{"name":"Length = 100 - Array[length - 1]","opsSec":821914452.9888554,"samples":10},{"name":"Length = 10_000 - Array[length - 1]","opsSec":822039928.0466238,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":822160483.8839574,"samples":7}]}-->
