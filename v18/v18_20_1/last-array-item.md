## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|9,356,569|4678285|
|Length = 10_000 - Array.at|9,714,448|4857225|
|Length = 1_000_000 - Array.at|9,644,741|4822372|
|Length = 100 - Array[length - 1]|17,018,066|8509034|
|Length = 10_000 - Array[length - 1]|15,966,173|7983088|
|Length = 1_000_000 - Array[length - 1]|16,857,115|8428558|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:53:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":9356569.424458763,"samples":4678285},{"name":"Length = 10_000 - Array.at","opsSec":9714448.80025757,"samples":4857225},{"name":"Length = 1_000_000 - Array.at","opsSec":9644741.994848484,"samples":4822372},{"name":"Length = 100 - Array[length - 1]","opsSec":17018066.093011126,"samples":8509034},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15966173.974871505,"samples":7983088},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16857115.115809124,"samples":8428558}]}-->
