## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,570,812|8286362|
|Using indexof|16,702,992|8352264|
|Using RegExp.test|13,847,966|6924534|
|Using RegExp.text with cached regex pattern|14,472,177|7236092|
|Using new RegExp.test|4,542,908|2271815|
|Using new RegExp.test with cached regex pattern|5,361,147|2681646|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:01:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8286362,"opsSec":16570812.192255756},{"name":"Using indexof","samples":8352264,"opsSec":16702992.79452627},{"name":"Using RegExp.test","samples":6924534,"opsSec":13847966.255804688},{"name":"Using RegExp.text with cached regex pattern","samples":7236092,"opsSec":14472177.574353155},{"name":"Using new RegExp.test","samples":2271815,"opsSec":4542908.985829041},{"name":"Using new RegExp.test with cached regex pattern","samples":2681646,"opsSec":5361147.444521538}]}-->
