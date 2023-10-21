## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|693,393,807|91|
|Length = 10_000 - Array.at|670,199,191|89|
|Length = 1_000_000 - Array.at|642,338,473|90|
|Length = 100 - Array[length - 1]|652,671,930|89|
|Length = 10_000 - Array[length - 1]|646,593,995|89|
|Length = 1_000_000 - Array[length - 1]|614,329,466|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":693393806.6183873,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":670199190.7562598,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":642338473.078916,"samples":10},{"name":"Length = 100 - Array[length - 1]","opsSec":652671930.2027539,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":646593995.4929851,"samples":9},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":614329465.6311858,"samples":6}]}-->
