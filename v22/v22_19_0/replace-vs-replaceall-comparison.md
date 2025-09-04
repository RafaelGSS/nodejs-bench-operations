## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,291,103|1645814|
|Using replaceAll()|3,147,122|1573980|
|Using replaceAll(//g)|3,041,591|1520832|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:02:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1645814,"opsSec":3291103.8851240864},{"name":"Using replaceAll()","samples":1573980,"opsSec":3147122.2234756215},{"name":"Using replaceAll(//g)","samples":1520832,"opsSec":3041591.95076987}]}-->
