## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,600,523|1314705|
|Using replaceAll()|2,383,035|1191518|
|Using replaceAll(//g)|2,312,221|1156111|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:40:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2600523.445708741,"samples":1314705},{"name":"Using replaceAll()","opsSec":2383035.105254776,"samples":1191518},{"name":"Using replaceAll(//g)","opsSec":2312221.4432106833,"samples":1156111}]}-->
