## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,356,487|1678755|
|Using replaceAll()|3,194,844|1598077|
|Using replaceAll(//g)|3,094,531|1547529|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:02:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1678755,"opsSec":3356487.74138051},{"name":"Using replaceAll()","samples":1598077,"opsSec":3194844.4652021583},{"name":"Using replaceAll(//g)","samples":1547529,"opsSec":3094531.7563076494}]}-->
