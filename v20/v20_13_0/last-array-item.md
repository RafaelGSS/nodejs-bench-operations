## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|19,855,307|9927654|
|Length = 10_000 - Array.at|19,712,747|9856374|
|Length = 1_000_000 - Array.at|19,825,594|9912798|
|Length = 100 - Array[length - 1]|19,301,403|9650702|
|Length = 10_000 - Array[length - 1]|19,323,086|9661544|
|Length = 1_000_000 - Array[length - 1]|19,280,407|9640204|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:56:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":19855307.96026743,"samples":9927654},{"name":"Length = 10_000 - Array.at","opsSec":19712747.44804152,"samples":9856374},{"name":"Length = 1_000_000 - Array.at","opsSec":19825594.29502197,"samples":9912798},{"name":"Length = 100 - Array[length - 1]","opsSec":19301403.30528343,"samples":9650702},{"name":"Length = 10_000 - Array[length - 1]","opsSec":19323086.99530627,"samples":9661544},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":19280407.151674423,"samples":9640204}]}-->
