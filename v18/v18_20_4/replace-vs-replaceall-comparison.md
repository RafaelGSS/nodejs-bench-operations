## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,459,911|1229956|
|Using replaceAll()|2,271,194|1135598|
|Using replaceAll(//g)|2,269,059|1134530|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:40:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2459911.511207565,"samples":1229956},{"name":"Using replaceAll()","opsSec":2271194.3231086745,"samples":1135598},{"name":"Using replaceAll(//g)","opsSec":2269059.2721034884,"samples":1134530}]}-->
