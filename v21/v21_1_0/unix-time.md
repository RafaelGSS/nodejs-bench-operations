## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,030,389|98|
|Date.now()|24,096,884|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:22:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":13030388.984145358,"samples":5},{"name":"Date.now()","opsSec":24096883.862571612,"samples":6}]}-->
