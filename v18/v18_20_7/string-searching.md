## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,731,876|7865941|
|Using indexof|15,395,226|7698452|
|Using RegExp.test|13,408,842|6704423|
|Using RegExp.text with cached regex pattern|14,125,795|7062901|
|Using new RegExp.test|4,106,504|2053997|
|Using new RegExp.test with cached regex pattern|4,793,361|2397197|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:12:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":7865941,"opsSec":15731876.305060778},{"name":"Using indexof","samples":7698452,"opsSec":15395226.936348915},{"name":"Using RegExp.test","samples":6704423,"opsSec":13408842.647789337},{"name":"Using RegExp.text with cached regex pattern","samples":7062901,"opsSec":14125795.982410911},{"name":"Using new RegExp.test","samples":2053997,"opsSec":4106504.6939426484},{"name":"Using new RegExp.test with cached regex pattern","samples":2397197,"opsSec":4793361.672869961}]}-->
