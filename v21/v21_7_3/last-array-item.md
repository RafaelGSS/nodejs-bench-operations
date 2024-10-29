## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|135,595,432|67800103|
|Length = 10_000 - Array.at|95,556,900|47778483|
|Length = 1_000_000 - Array.at|96,835,809|48423677|
|Length = 100 - Array[length - 1]|94,659,272|47334478|
|Length = 10_000 - Array[length - 1]|97,264,221|48791441|
|Length = 1_000_000 - Array[length - 1]|96,898,484|48456396|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:07:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":135595432.76957563,"samples":67800103},{"name":"Length = 10_000 - Array.at","opsSec":95556900.83019362,"samples":47778483},{"name":"Length = 1_000_000 - Array.at","opsSec":96835809.23482303,"samples":48423677},{"name":"Length = 100 - Array[length - 1]","opsSec":94659272.16713876,"samples":47334478},{"name":"Length = 10_000 - Array[length - 1]","opsSec":97264221.45615338,"samples":48791441},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":96898484.93869881,"samples":48456396}]}-->
