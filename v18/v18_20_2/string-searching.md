## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|17,260,312|8630157|
|Using indexof|17,233,824|8616913|
|Using RegExp.test|8,176,747|4088374|
|Using RegExp.text with cached regex pattern|8,633,317|4316659|
|Using new RegExp.test|3,036,810|1518406|
|Using new RegExp.test with cached regex pattern|3,186,542|1593272|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:19:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":17260312.91359267,"samples":8630157},{"name":"Using indexof","opsSec":17233824.676945794,"samples":8616913},{"name":"Using RegExp.test","opsSec":8176747.672485922,"samples":4088374},{"name":"Using RegExp.text with cached regex pattern","opsSec":8633317.386613708,"samples":4316659},{"name":"Using new RegExp.test","opsSec":3036810.0581463394,"samples":1518406},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3186542.1477761846,"samples":1593272}]}-->
