## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,547,575|7773803|
|Using indexof|15,941,226|7970616|
|Using RegExp.test|13,694,661|6847335|
|Using RegExp.text with cached regex pattern|14,585,435|7292941|
|Using new RegExp.test|4,323,029|2162017|
|Using new RegExp.test with cached regex pattern|4,895,483|2447744|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:51:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":15547575.309086341,"samples":7773803},{"name":"Using indexof","opsSec":15941226.516218077,"samples":7970616},{"name":"Using RegExp.test","opsSec":13694661.399752641,"samples":6847335},{"name":"Using RegExp.text with cached regex pattern","opsSec":14585435.539818125,"samples":7292941},{"name":"Using new RegExp.test","opsSec":4323029.863915329,"samples":2162017},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4895483.858420655,"samples":2447744}]}-->
