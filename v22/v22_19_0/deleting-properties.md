## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,127,968|2063986|
|Using delete property (proto: null)|18,154,114|9084891|
|Using delete property (cached proto: null)|4,234,195|2117099|
|Using undefined assignment|79,101,512|39558159|
|Using undefined assignment (proto: null)|19,539,063|9771589|
|Using undefined property (cached proto: null)|78,004,478|39002248|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:30:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2063986,"opsSec":4127968.870999595},{"name":"Using delete property (proto: null)","samples":9084891,"opsSec":18154114.889925305},{"name":"Using delete property (cached proto: null)","samples":2117099,"opsSec":4234195.823623347},{"name":"Using undefined assignment","samples":39558159,"opsSec":79101512.88623914},{"name":"Using undefined assignment (proto: null)","samples":9771589,"opsSec":19539063.151456553},{"name":"Using undefined property (cached proto: null)","samples":39002248,"opsSec":78004478.05897005}]}-->
