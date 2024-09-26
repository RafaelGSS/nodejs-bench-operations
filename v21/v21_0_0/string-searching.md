## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,116,360|4058181|
|Using indexof|8,043,423|4021712|
|Using RegExp.test|6,692,596|3346299|
|Using RegExp.text with cached regex pattern|7,475,353|3737677|
|Using new RegExp.test|3,379,203|1689602|
|Using new RegExp.test with cached regex pattern|3,614,142|1807072|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:55:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8116360.854546939,"samples":4058181},{"name":"Using indexof","opsSec":8043423.23729414,"samples":4021712},{"name":"Using RegExp.test","opsSec":6692596.808805308,"samples":3346299},{"name":"Using RegExp.text with cached regex pattern","opsSec":7475353.478576635,"samples":3737677},{"name":"Using new RegExp.test","opsSec":3379203.7637891048,"samples":1689602},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3614142.789610577,"samples":1807072}]}-->
