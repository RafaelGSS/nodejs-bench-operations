## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,791,521|91|
|Using replaceAll()|1,645,806|88|
|Using replaceAll(//g)|1,663,705|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1791520.7825858747,"samples":7},{"name":"Using replaceAll()","opsSec":1645805.9035964615,"samples":4},{"name":"Using replaceAll(//g)","opsSec":1663704.7792189915,"samples":6}]}-->
