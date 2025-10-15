## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,314,461|1657483|
|Using delete property (proto: null)|18,368,072|9184037|
|Using delete property (cached proto: null)|3,326,971|1663868|
|Using undefined assignment|82,284,580|41152657|
|Using undefined assignment (proto: null)|20,728,909|10366216|
|Using undefined property (cached proto: null)|80,831,180|40415636|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:29:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1657483,"opsSec":3314461.4196513183},{"name":"Using delete property (proto: null)","samples":9184037,"opsSec":18368072.493818056},{"name":"Using delete property (cached proto: null)","samples":1663868,"opsSec":3326971.4353483855},{"name":"Using undefined assignment","samples":41152657,"opsSec":82284580.42513196},{"name":"Using undefined assignment (proto: null)","samples":10366216,"opsSec":20728909.494951706},{"name":"Using undefined property (cached proto: null)","samples":40415636,"opsSec":80831180.17577931}]}-->
