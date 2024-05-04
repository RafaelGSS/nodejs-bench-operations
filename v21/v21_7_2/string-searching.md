## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|910,089,909|97|
|Using indexof|910,872,486|96|
|Using RegExp.test|18,537,001|95|
|Using RegExp.text with cached regex pattern|19,386,045|98|
|Using new RegExp.test|4,938,292|96|
|Using new RegExp.test with cached regex pattern|5,608,387|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:39:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":910089909.1593091,"samples":7},{"name":"Using indexof","opsSec":910872486.2463844,"samples":10},{"name":"Using RegExp.test","opsSec":18537000.797138978,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":19386045.25181551,"samples":6},{"name":"Using new RegExp.test","opsSec":4938292.351710335,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5608386.781154526,"samples":6}]}-->
