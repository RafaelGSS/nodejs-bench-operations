## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|10,566,903|5283452|
|Length = 10_000 - Array.at|10,773,849|5386925|
|Length = 1_000_000 - Array.at|10,568,942|5284472|
|Length = 100 - Array[length - 1]|20,804,014|10402008|
|Length = 10_000 - Array[length - 1]|20,819,875|10409938|
|Length = 1_000_000 - Array[length - 1]|20,888,943|10444472|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:54:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":10566903.108151508,"samples":5283452},{"name":"Length = 10_000 - Array.at","opsSec":10773849.398927508,"samples":5386925},{"name":"Length = 1_000_000 - Array.at","opsSec":10568942.84591679,"samples":5284472},{"name":"Length = 100 - Array[length - 1]","opsSec":20804014.482220545,"samples":10402008},{"name":"Length = 10_000 - Array[length - 1]","opsSec":20819875.801446192,"samples":10409938},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":20888943.302756295,"samples":10444472}]}-->
