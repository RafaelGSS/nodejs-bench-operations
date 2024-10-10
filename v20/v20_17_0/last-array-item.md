## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|132,667,191|66400117|
|Length = 10_000 - Array.at|96,804,516|48402563|
|Length = 1_000_000 - Array.at|97,020,079|48519150|
|Length = 100 - Array[length - 1]|92,807,213|46403616|
|Length = 10_000 - Array[length - 1]|96,480,116|48245442|
|Length = 1_000_000 - Array[length - 1]|96,515,910|48260220|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:27:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":132667191.62555651,"samples":66400117},{"name":"Length = 10_000 - Array.at","opsSec":96804516.71237181,"samples":48402563},{"name":"Length = 1_000_000 - Array.at","opsSec":97020079.04703449,"samples":48519150},{"name":"Length = 100 - Array[length - 1]","opsSec":92807213.25294292,"samples":46403616},{"name":"Length = 10_000 - Array[length - 1]","opsSec":96480116.04720819,"samples":48245442},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":96515910.89436537,"samples":48260220}]}-->
