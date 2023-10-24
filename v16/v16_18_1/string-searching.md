## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|11,555,574|97|
|Using indexof|592,289,512|96|
|Using RegExp.test|11,000,870|99|
|Using RegExp.text with cached regex pattern|11,469,963|99|
|Using new RegExp.test|3,732,153|92|
|Using new RegExp.test with cached regex pattern|4,291,110|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:54:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":11555574.169576624,"samples":6},{"name":"Using indexof","opsSec":592289512.2118534,"samples":7},{"name":"Using RegExp.test","opsSec":11000869.594498517,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":11469962.556177668,"samples":6},{"name":"Using new RegExp.test","opsSec":3732152.9224065673,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4291110.282419909,"samples":6}]}-->
