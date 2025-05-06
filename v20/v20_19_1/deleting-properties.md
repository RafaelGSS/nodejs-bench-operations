## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,604,501|1802741|
|Using delete property (proto: null)|16,466,847|8233425|
|Using delete property (cached proto: null)|3,639,871|1819978|
|Using undefined assignment|82,512,010|41303319|
|Using undefined assignment (proto: null)|16,754,381|8378058|
|Using undefined property (cached proto: null)|82,764,602|41383034|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:43:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1802741,"opsSec":3604501.741333437},{"name":"Using delete property (proto: null)","samples":8233425,"opsSec":16466847.299437042},{"name":"Using delete property (cached proto: null)","samples":1819978,"opsSec":3639871.7078509894},{"name":"Using undefined assignment","samples":41303319,"opsSec":82512010.75071077},{"name":"Using undefined assignment (proto: null)","samples":8378058,"opsSec":16754381.75394465},{"name":"Using undefined property (cached proto: null)","samples":41383034,"opsSec":82764602.90099944}]}-->
