## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|126,983,452|64545135|
|Using indexof|17,533,536|8774409|
|Using RegExp.test|13,846,031|6923799|
|Using RegExp.text with cached regex pattern|15,329,932|7664968|
|Using new RegExp.test|4,967,958|2484273|
|Using new RegExp.test with cached regex pattern|5,512,829|2756416|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:55:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":126983452.49226789,"samples":64545135},{"name":"Using indexof","opsSec":17533536.470953375,"samples":8774409},{"name":"Using RegExp.test","opsSec":13846031.709200993,"samples":6923799},{"name":"Using RegExp.text with cached regex pattern","opsSec":15329932.228836672,"samples":7664968},{"name":"Using new RegExp.test","opsSec":4967958.658119685,"samples":2484273},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5512829.155380156,"samples":2756416}]}-->
