## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|578,568,244|92|
|Using dot notation|571,501,309|94|
|Using define property (writable)|2,452,843|96|
|Using define property initialized (writable)|3,085,000|93|
|Using define property (getter)|1,252,117|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Directly in the object","opsSec":578568244.1663089,"samples":7},{"name":"Using dot notation","opsSec":571501308.611334,"samples":8},{"name":"Using define property (writable)","opsSec":2452842.747195422,"samples":5},{"name":"Using define property initialized (writable)","opsSec":3085000.2901863456,"samples":5},{"name":"Using define property (getter)","opsSec":1252116.6190295815,"samples":4}]}-->
