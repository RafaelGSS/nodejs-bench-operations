## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|98,590,527|49309397|
|Using backtick (`)|97,590,806|48795410|
|Using array.join|9,871,301|4936090|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:06:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":49309397,"opsSec":98590527.89847046},{"name":"Using backtick (`)","samples":48795410,"opsSec":97590806.33728711},{"name":"Using array.join","samples":4936090,"opsSec":9871301.631838195}]}-->
