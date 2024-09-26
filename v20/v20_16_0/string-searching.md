## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|9,189,489|4594745|
|Using indexof|9,319,757|4659879|
|Using RegExp.test|8,147,598|4073800|
|Using RegExp.text with cached regex pattern|8,314,323|4157162|
|Using new RegExp.test|3,414,623|1707312|
|Using new RegExp.test with cached regex pattern|3,988,311|1994156|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:55:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":9189489.944884002,"samples":4594745},{"name":"Using indexof","opsSec":9319757.459467446,"samples":4659879},{"name":"Using RegExp.test","opsSec":8147598.37050983,"samples":4073800},{"name":"Using RegExp.text with cached regex pattern","opsSec":8314323.151972931,"samples":4157162},{"name":"Using new RegExp.test","opsSec":3414623.2351445584,"samples":1707312},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3988311.832480893,"samples":1994156}]}-->
