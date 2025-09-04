## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,060,437|2030221|
|Using replaceAll()|3,121,221|1562847|
|Using replaceAll(//g)|3,442,781|1721852|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:05:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":2030221,"opsSec":4060437.898957722},{"name":"Using replaceAll()","samples":1562847,"opsSec":3121221.9194762185},{"name":"Using replaceAll(//g)","samples":1721852,"opsSec":3442781.29330002}]}-->
