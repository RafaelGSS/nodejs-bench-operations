## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|10,626,839|5313420|
|Length = 10_000 - Array.at|10,807,930|5403966|
|Length = 1_000_000 - Array.at|10,577,223|5288612|
|Length = 100 - Array[length - 1]|20,873,985|10436993|
|Length = 10_000 - Array[length - 1]|20,882,719|10441360|
|Length = 1_000_000 - Array[length - 1]|20,906,907|10453454|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:48:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":10626839.177459065,"samples":5313420},{"name":"Length = 10_000 - Array.at","opsSec":10807930.382607954,"samples":5403966},{"name":"Length = 1_000_000 - Array.at","opsSec":10577223.435883688,"samples":5288612},{"name":"Length = 100 - Array[length - 1]","opsSec":20873985.52619823,"samples":10436993},{"name":"Length = 10_000 - Array[length - 1]","opsSec":20882719.91143131,"samples":10441360},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":20906907.844737645,"samples":10453454}]}-->
