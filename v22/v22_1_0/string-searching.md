## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|141,572,757|82|
|Using indexof|146,185,452|83|
|Using RegExp.test|17,105,310|97|
|Using RegExp.text with cached regex pattern|17,854,069|96|
|Using new RegExp.test|5,122,749|94|
|Using new RegExp.test with cached regex pattern|5,836,007|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:41:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":141572757.1135388,"samples":5},{"name":"Using indexof","opsSec":146185451.94899634,"samples":7},{"name":"Using RegExp.test","opsSec":17105310.036777463,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17854068.77976062,"samples":5},{"name":"Using new RegExp.test","opsSec":5122748.6367733665,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5836006.53829842,"samples":5}]}-->
