## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,996,519|7998261|
|Using indexof|15,968,273|7995558|
|Using RegExp.test|13,041,428|6520716|
|Using RegExp.text with cached regex pattern|13,982,922|6992525|
|Using new RegExp.test|4,731,535|2366975|
|Using new RegExp.test with cached regex pattern|5,243,016|2621510|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:01:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7998261,"opsSec":15996519.15261959},{"name":"Using indexof","samples":7995558,"opsSec":15968273.19357731},{"name":"Using RegExp.test","samples":6520716,"opsSec":13041428.478814311},{"name":"Using RegExp.text with cached regex pattern","samples":6992525,"opsSec":13982922.973688934},{"name":"Using new RegExp.test","samples":2366975,"opsSec":4731535.402853216},{"name":"Using new RegExp.test with cached regex pattern","samples":2621510,"opsSec":5243016.109682046}]}-->
