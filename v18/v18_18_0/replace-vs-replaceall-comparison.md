## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,107,780|96|
|Using replaceAll()|1,998,614|95|
|Using replaceAll(//g)|1,893,526|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:29:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2107780.409275513,"samples":7},{"name":"Using replaceAll()","opsSec":1998613.5556424712,"samples":4},{"name":"Using replaceAll(//g)","opsSec":1893525.5619247204,"samples":8}]}-->
