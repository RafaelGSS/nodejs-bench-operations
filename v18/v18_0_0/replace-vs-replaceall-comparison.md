## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,071,495|94|
|Using replaceAll()|1,948,662|94|
|Using replaceAll(//g)|1,859,386|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2071495.3557671213,"samples":5},{"name":"Using replaceAll()","opsSec":1948662.2747307487,"samples":6},{"name":"Using replaceAll(//g)","opsSec":1859386.3303781205,"samples":5}]}-->
