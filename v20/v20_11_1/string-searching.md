## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|845,420,364|92|
|Using indexof|846,025,370|98|
|Using RegExp.test|17,286,974|91|
|Using RegExp.text with cached regex pattern|17,895,927|97|
|Using new RegExp.test|4,575,189|97|
|Using new RegExp.test with cached regex pattern|5,550,607|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:28:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using includes","opsSec":845420364.2812369,"samples":6},{"name":"Using indexof","opsSec":846025369.7977393,"samples":7},{"name":"Using RegExp.test","opsSec":17286973.569263462,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17895927.415573806,"samples":5},{"name":"Using new RegExp.test","opsSec":4575189.267935968,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5550606.716551011,"samples":4}]}-->
