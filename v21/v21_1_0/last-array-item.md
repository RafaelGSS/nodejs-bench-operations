## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|845,661,058|95|
|Length = 10_000 - Array.at|846,274,945|98|
|Length = 1_000_000 - Array.at|847,549,452|99|
|Length = 100 - Array[length - 1]|849,003,793|94|
|Length = 10_000 - Array[length - 1]|849,442,698|98|
|Length = 1_000_000 - Array[length - 1]|850,542,503|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:42:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":845661057.7890908,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":846274944.7669266,"samples":9},{"name":"Length = 1_000_000 - Array.at","opsSec":847549451.5917195,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":849003793.4915249,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":849442697.9976958,"samples":8},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":850542503.4308584,"samples":8}]}-->
