## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,291,330|1646338|
|Using replaceAll()|3,057,941|1528979|
|Using replaceAll(//g)|3,039,679|1520392|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:35:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1646338,"opsSec":3291330.7607088215},{"name":"Using replaceAll()","samples":1528979,"opsSec":3057941.7011707327},{"name":"Using replaceAll(//g)","samples":1520392,"opsSec":3039679.8484537685}]}-->
