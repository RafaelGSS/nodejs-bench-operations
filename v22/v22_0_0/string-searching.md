## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|141,127,769|82|
|Using indexof|146,048,431|83|
|Using RegExp.test|15,085,010|96|
|Using RegExp.text with cached regex pattern|15,485,135|97|
|Using new RegExp.test|4,977,806|92|
|Using new RegExp.test with cached regex pattern|5,889,315|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:40:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":141127768.63312277,"samples":7},{"name":"Using indexof","opsSec":146048430.6877638,"samples":6},{"name":"Using RegExp.test","opsSec":15085009.678219175,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":15485135.487492343,"samples":4},{"name":"Using new RegExp.test","opsSec":4977806.408029403,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5889314.795327299,"samples":5}]}-->
