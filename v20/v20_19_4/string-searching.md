## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,490,555|8245418|
|Using indexof|16,662,396|8331342|
|Using RegExp.test|12,913,915|6460535|
|Using RegExp.text with cached regex pattern|13,745,669|6872835|
|Using new RegExp.test|4,360,787|2180404|
|Using new RegExp.test with cached regex pattern|5,226,599|2613558|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:43:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8245418,"opsSec":16490555.52863157},{"name":"Using indexof","samples":8331342,"opsSec":16662396.240416927},{"name":"Using RegExp.test","samples":6460535,"opsSec":12913915.510012636},{"name":"Using RegExp.text with cached regex pattern","samples":6872835,"opsSec":13745669.395190546},{"name":"Using new RegExp.test","samples":2180404,"opsSec":4360787.896767796},{"name":"Using new RegExp.test with cached regex pattern","samples":2613558,"opsSec":5226599.643314838}]}-->
