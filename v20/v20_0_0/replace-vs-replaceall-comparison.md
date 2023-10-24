## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,620,817|95|
|Using replaceAll()|2,304,538|93|
|Using replaceAll(//g)|2,410,331|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:25:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2620816.9552532025,"samples":5},{"name":"Using replaceAll()","opsSec":2304537.869317413,"samples":4},{"name":"Using replaceAll(//g)","opsSec":2410331.085700945,"samples":6}]}-->
