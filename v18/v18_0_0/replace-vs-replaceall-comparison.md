## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|1,878,757|80|
|Using replaceAll()|1,670,350|85|
|Using replaceAll(//g)|1,706,969|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:39:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using replace(//g)","opsSec":1878756.7692822092,"samples":5},{"name":"Using replaceAll()","opsSec":1670350.0002570818,"samples":8},{"name":"Using replaceAll(//g)","opsSec":1706969.1678437563,"samples":4}]}-->
