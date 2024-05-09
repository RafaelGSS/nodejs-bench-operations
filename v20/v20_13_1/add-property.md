## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|19,868,200|9934101|
|Using dot notation|20,043,440|10021721|
|Using define property (writable)|3,652,530|1826266|
|Using define property initialized (writable)|4,238,452|2119227|
|Using define property (getter)|2,222,195|1112090|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:25:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":19868200.609221067,"samples":9934101},{"name":"Using dot notation","opsSec":20043440.035736486,"samples":10021721},{"name":"Using define property (writable)","opsSec":3652530.969982901,"samples":1826266},{"name":"Using define property initialized (writable)","opsSec":4238452.999742501,"samples":2119227},{"name":"Using define property (getter)","opsSec":2222195.126427302,"samples":1112090}]}-->
