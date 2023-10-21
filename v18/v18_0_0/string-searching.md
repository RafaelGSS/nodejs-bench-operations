## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|11,900,019|96|
|Using indexof|592,631,588|97|
|Using RegExp.test|11,309,916|96|
|Using RegExp.text with cached regex pattern|11,777,728|97|
|Using new RegExp.test|3,155,325|99|
|Using new RegExp.test with cached regex pattern|3,586,758|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using includes","opsSec":11900019.070812237,"samples":6},{"name":"Using indexof","opsSec":592631587.7659571,"samples":8},{"name":"Using RegExp.test","opsSec":11309915.776672825,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":11777727.796333084,"samples":6},{"name":"Using new RegExp.test","opsSec":3155325.212456421,"samples":7},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3586758.0201488645,"samples":5}]}-->
