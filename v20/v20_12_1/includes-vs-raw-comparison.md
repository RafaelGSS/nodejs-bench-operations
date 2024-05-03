## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|952,041,208|98|
|using Array.includes (first item)|950,485,625|98|
|Using raw comparison|937,063,799|97|
|Using raw comparison (first item)|940,560,939|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:22:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":952041207.5606678,"samples":6},{"name":"using Array.includes (first item)","opsSec":950485625.2375089,"samples":6},{"name":"Using raw comparison","opsSec":937063798.8229771,"samples":6},{"name":"Using raw comparison (first item)","opsSec":940560938.5796468,"samples":8}]}-->
