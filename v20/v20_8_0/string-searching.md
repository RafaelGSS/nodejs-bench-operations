## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|691,277,613|87|
|Using indexof|713,268,612|88|
|Using RegExp.test|10,027,092|84|
|Using RegExp.text with cached regex pattern|10,360,473|88|
|Using new RegExp.test|2,823,527|88|
|Using new RegExp.test with cached regex pattern|3,257,157|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:07:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":691277612.8157433,"samples":7},{"name":"Using indexof","opsSec":713268611.7884619,"samples":6},{"name":"Using RegExp.test","opsSec":10027092.126427772,"samples":4},{"name":"Using RegExp.text with cached regex pattern","opsSec":10360473.476450091,"samples":4},{"name":"Using new RegExp.test","opsSec":2823526.8567089466,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3257157.0945213535,"samples":4}]}-->
